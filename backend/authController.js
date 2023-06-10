import User from './models/User.js'
import Role from './models/Role.js'
import bcrypt from 'bcryptjs'
import {validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import secret from './config.js'

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn:"1h"})
}

class authController {
    async registration(req,res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty())
                return res.status(400).json({message:"Registration error1", errors})
            if(!req.body.email && !req.body.phoneNumber)
                return res.status(400).json({message:"Empty email and phone number"})

            const {username, password, email, phoneNumber} = req.body
            const candidate = await User.findOne({username})
            if(candidate)
                return res.status(400).json({message:"User with this name already exists"})
            const hashPassword = bcrypt.hashSync(password, 8)
            const userRole = await Role.findOne({value:"USER"})   
            const user = new User({
                username,
                password:hashPassword,
                email:email,
                phoneNumber:phoneNumber,
                roles: [userRole.value]})
            await user.save()
            res.status(200).json({message:"Successeful registration"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message:"Registration error"})
        }
    }
    async login(req,res) {
        try {
            const {username, password } = req.body
            const user = await User.findOne({username})
            if(!user)
                return res.status(400).json({message:`Couldn't found user with this name${username}:${password}`})
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword)
                return res.status(400).json({message:"Wrong password"})
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})

        } catch (e) {
            console.log(e)
            res.status(400).json({message:"Login error"})
        }
    }  
    async getUserData(req,res){
        try{
        //const {token} = req.params
        //const parsed = this.parseJwt(token)
        console.log(token)
        res.status(400).json({message:'hello'})
        } catch(e){
            console.log(e)
            res.status(400).json({message:"get userdata error"})
        }
        
    }
    // parseJwt (token) {
    //     return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    // }
}

export default new authController();