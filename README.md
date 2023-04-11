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

#### Add User
![](https://github.com/HenryXanderTalent/Login-BE-API/blob/master/assets/add%20user.png)

#### Delete User
![](https://github.com/HenryXanderTalent/Login-BE-API/blob/master/assets/delete%20user.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript 

### What I learned

The most important lessons for me during the project was to learn how to inject HTML elements into the DOM. 

This example code below was the way I choose to inject my HTML on this project:

//filter only active tasks
let act = document.getElementById('act')

act.addEventListener('click', function(){

    const actList = dataAct.map((act) => {

        const { id, task } = act;

        return `
        <div class="task-card" id="${id}">
            <button class="comp-btn-blue" type="button" id="${id + '-comp'}" onclick="getClickID(this.id)"></button>
            <span id="${id + '-compSpan'}">${task}</span>
            <button class="clr-btn" type="button" id="${id + '-clr'}" onclick="getID(this.id)">&times;</button>
        </div>
        `;    

        }).join("");
    
    tasksContainerCom.innerHTML = ''
    tasksContainer.innerHTML = ''
    tasksContainerAct.innerHTML = actList;

})

However, I also discovered other ways to do this with the example code below:

//Add task to list
function addDiv(num, task) {

        let newcard = document.createElement('div')
        let newElementRadio = document.createElement('input')
        let newElementInput = document.createElement('span')
        let newElementcross = document.createElement('button')
    
        tasksContainer.appendChild(newcard).classList.add('task-card')
        newcard.appendChild(newElementRadio).setAttribute('type', 'radio')
        newcard.appendChild(newElementInput).textContent = task
        newcard.appendChild(newElementcross).setAttribute('class', 'bt')

        for(let i = 0; i < data.length; i++) {

            tasksContainer.lastChild.setAttribute('id', num)
    
        }
    
}

### Continued development

I would like to learn more about using frameworks for CSS like SASS, this would have helped me structure my CSS code better and mode toggling between light and dark more easier to set up.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Learn) - This helped me with code structure and syntax.
- [W3Schools](https://www.w3schools.com/) - This is helped me write functions for onclick events to get IDs of elements in the DOM.

## Author

- Linkedin - [Henry Opara](https://www.linkedin.com/in/henry-c-56323720b/)

## Acknowledgments

Thank you to Xander Talent for pushing me to challenge myself with this project and the additional resources they provided to help me learn Vanilla JavaScript.




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

