# Login API

Back-end with MySQL uses Json web token to authenticate logins and allow CRUD actions with email & passwords.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The project

Users should be able to:

- Create a profile using an email and password
- View all users
- View a user by ID
- Update a users email and password
- Delete a user
- Only be able to do any of the above if their email and password has been authenticated
- **Bonus**: Set a user as admin which can't be deleted.

### Screenshot

#### Login Example
![](https://github.com/HenryXanderTalent/Login-BE-API/blob/master/assets/login.png)

#### Authenticate Login
![](https://github.com/HenryXanderTalent/Login-BE-API/blob/master/assets/auth%20login.png)

#### Add User
![](https://github.com/HenryXanderTalent/Login-BE-API/blob/master/assets/add%20user.png)

#### Delete User
![](https://github.com/HenryXanderTalent/Login-BE-API/blob/master/assets/delete%20user.png)

#### Get User
![](https://github.com/HenryXanderTalent/Login-BE-API/blob/master/assets/get%20user%20by%20email.png)

#### Update User
![](https://github.com/HenryXanderTalent/Login-BE-API/blob/master/assets/update%20user.png)

#### Database
![](https://github.com/HenryXanderTalent/Login-BE-API/blob/master/assets/database.png)

## My process

### Built with

- Javascript 
- Node.js
- Express
- JSON Web Token
- bcrypt
- Postman
- MySQL Workbench
- VS Code

### What I learned

The most important lessons for me during the project was to learn how to use bcrypt - genSaltSync, hashSync and compareSync to encrypt and decrypt passwords.

This example code below is an example of how I used bcrypt to encrypt and password upon user creation thus protecting the password within the database from such attacks as SQL injection:

![image](https://user-images.githubusercontent.com/127749296/231246631-791b7588-e010-48d0-a605-1f34feb2e251.png)

Controller Module:

This is a Node.js module that exports several functions that allow users to interact with a database of user information. The module requires the bcrypt and jsonwebtoken packages, which can be installed using npm. The functions include:

createUser: This function creates a new user by taking a request object and passing it to the create function from the user.service module. It also hashes the password using bcrypt before saving it to the database.

getUserByUserId: This function retrieves a user from the database by their user ID.

getUsers: This function retrieves all users from the database.

updateUsers: This function updates an existing user's information by taking a request object, hashing the password using bcrypt, and passing it to the updateUser function from the user.service module.

deleteUser: This function deletes a user from the database by taking a request object and passing it to the deleteUser function from the user.service module.

getUserByUserEmail: This function retrieves a user from the database by their email.

login: This function allows a user to log in by comparing their email and password to the corresponding fields in the database. If the login is successful, a JSON Web Token is generated using jsonwebtoken and returned to the user.

All of the functions return JSON responses with a success property that is either 0 or 1, indicating success or failure, respectively. If the function was successful, the data property will contain the requested data. If the function failed, the message property will contain an error message.

### Continued development

I would like to add a front-end interface so users can create profiles and login from a browser. I would also like to create another table in the database that be used for storing information that the users create such a tasks from a to do list.

### Useful resources

- [Youtube](https://www.youtube.com/watch?v=WfCJ3sHnLBM) - Reference video for set up .

## Author

- Linkedin - [Henry Opara](https://www.linkedin.com/in/henry-c-56323720b/)

## Acknowledgments

Thank you to Xander Talent for pushing me to challenge myself with this project and the additional resources they provided to help me learn Vanilla JavaScript.





