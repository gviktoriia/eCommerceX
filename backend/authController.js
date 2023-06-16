import User from './models/User.js'
import Role from './models/Role.js'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import secret from './config.js'
import Guest from './models/Guest.js'

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, { expiresIn: "1h" })
}

class authController {
    // maybe check if user with this email exists
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty())
                return res.status(400).json({ message: "Registration error1", errors })
            if (!req.body.email && !req.body.phoneNumber)
                return res.status(400).json({ message: "Empty email and phone number" })

            const { username, password, email, phoneNumber } = req.body
            const candidate = await User.findOne({ username })
            if (candidate)
                return res.status(400).json({ message: "User with this name already exists" })
            const hashPassword = bcrypt.hashSync(password, 8)
            const userRole = await Role.findOne({ value: "USER" })
            const user = new User({
                username,
                password: hashPassword,
                email: email,
                phoneNumber: phoneNumber,
                roles: [userRole.value]
            })
            await user.save()
            res.status(200).json({ message: "Successeful registration" })
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: "Registration error" })
        }
    }
    async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })
            if (!user)
                return res.status(400).json({ message: `Couldn't found user with this name${username}:${password}` })
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword)
                return res.status(400).json({ message: "Wrong password" })
            const token = generateAccessToken(user._id, user.roles)
            return res.json({ token })

        } catch (e) {
            console.log(e)
            res.status(400).json({ message: "Login error" })
        }
    }
    async getUserData(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({ message: "User is not autorised" })
            }
            const { id } = jwt.verify(token, secret)
            const user = await User.findById(id)
            res.status(200).json({
                roles: user.roles,
                username: user.username,
                email: user.email,
                phoneNumber: user.phoneNumber,
                adress: user.adress
            })
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: "get userdata error" })
        }
    }
    async updateUser(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({ message: "User is not autorised" })
            }
            const { id } = jwt.verify(token, secret)
            const newData = req.body
            // prohibit user set role "admin"
            const user = await User.findById(id)
            if (newData.hasOwnProperty("roles") &&
                (user.roles.indexOf("USER") > -1 && user.roles.indexOf("ADMIN") === -1)) {
                return res.status(403).json({ message: "Forbitten operation" })
            }
            const updated = await User.findByIdAndUpdate(id, newData, { new: true })
            res.status(200).json({
                roles: updated.roles,
                username: updated.username,
                email: updated.email,
                phoneNumber: updated.phoneNumber,
                adress: updated.adress
            })
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: "update error" })
        }
    }
    async guestRegistration(req, res) {
        try {
            if (!req.body.email && !req.body.phoneNumber)
                return res.status(400).json({ message: "Empty email and phone number" })

            const { username, email, phoneNumber, adress } = req.body
            const guest = new Guest({
                username,
                email: email,
                phoneNumber: phoneNumber,
                adress:adress
            })
            await guest.save()
            res.status(200).json(guest)

        } catch (error) {
            console.log(e)
            res.status(400).json({ message: "guest registration error" })
        }
    }
}

export default new authController();