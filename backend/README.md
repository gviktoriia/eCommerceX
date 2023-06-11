## !Install only these versions of libraries which are in package.json!
Registration:
use POST http://localhost:8888/auth/registration with body similar to
````
{
    "username":"user6",
    "email":"user6@gmail.com", (or/and "phoneNumber":"+3809537427312321")
    "password":"user12346"
}
````
Log in:
use POST http://localhost:8888/auth/login with body similar to
````
{
    "username":"user6",
    "password":"user12346"
}
````
Get user data by token in headers:
use GET http://localhost:8888/auth/user
````

## !Important!
Login returns a token which admin needs to put in Headers to access database operations: 
Authorization      Bearer <token>
Token expires in 1 hour

admin data: 
````
{
    "login":"admin",
    "password":"admin"
}
````
Add new watch:
use POST http://localhost:8888/api/watches with form data similar to:
(don't forget the token)
````
{
    "name": "applewatch5",
    "manufacturer": "apple",
    "sex": "unisex",
    "material": "leather",
    "style": "casual",
    "price": 998.99,
    "quantity": 1000,
    "image": "watch_img.jpg", // needs to be file type
    "description": "best quality",
}
````
Get watches:
use GET with one of these

all watches:
http://localhost:8888/api/watches
by ID
http://localhost:8888/api/watches/:id
by one criteria
http://localhost:8888/api/watches/substring/:substring
http://localhost:8888/api/watches/sex/:sex'
http://localhost:8888/api/watches/style/:style

Update watch:

use PUT with token in headers and body like this( needs _id and both new and old atributes):
````
{
    "_id": "648303d257a44047ecebdfae",
    "name": "applewatch6",
    "manufacturer": "apple",
    "sex": "male",
    "material": "steel",
    "style": "casual",
    "price": 70899,
    "quantity": 500,
    "image": "newimg.jpg",
    "description": "the best quality",
    "__v": 0
}
````
Delete watch:

use DELETE with token in header with http://localhost:8888/api/watches/:id

In database image is saved as a link:
````
{
    "_id":{"$oid":"6483161744401f13db547893"},
    "name":"applewatchTest",
    "manufacturer":"apple",
    "sex":"unisex",
    "material":"leather",
    "style":"casual",
    "price":{"$numberInt":"99899"},
    "quantity":{"$numberInt":"1000"},
    "image":"http://localhost:8888/file/1686311491166-watch-download.jpg",
    "description":"best quality",
    "__v":{"$numberInt":"0"}
}
````
GET http://localhost:8888/file/1686311491166-watch-download.jpg
will return an image 1686312101681-watch-download.jpg

DELETE http://localhost:8888/file/1686311491166-watch-download.jpg
will delete an image 1686312101681-watch-download.jpg
you also need admin token for delete
