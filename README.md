# README

This is a Node.js module that exports several functions that allow users to interact with a database of user information. The module requires the bcrypt and jsonwebtoken packages, which can be installed using npm. The functions include:

createUser: This function creates a new user by taking a request object and passing it to the create function from the user.service module. It also hashes the password using bcrypt before saving it to the database.

getUserByUserId: This function retrieves a user from the database by their user ID.

getUsers: This function retrieves all users from the database.

updateUsers: This function updates an existing user's information by taking a request object, hashing the password using bcrypt, and passing it to the updateUser function from the user.service module.

deleteUser: This function deletes a user from the database by taking a request object and passing it to the deleteUser function from the user.service module.

getUserByUserEmail: This function retrieves a user from the database by their email.

login: This function allows a user to log in by comparing their email and password to the corresponding fields in the database. If the login is successful, a JSON Web Token is generated using jsonwebtoken and returned to the user.

All of the functions return JSON responses with a success property that is either 0 or 1, indicating success or failure, respectively. If the function was successful, the data property will contain the requested data. If the function failed, the message property will contain an error message.

Reference this video for set up https://www.youtube.com/watch?v=WfCJ3sHnLBM

