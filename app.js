//hide db connection details in .env file so not on github
require('dotenv').config()

const express = require("express");
const app = express();

const userRouter = require("./api/users/user.router")

//convert json received 
app.use(express.json())

app.use("/api/users", userRouter);

//test api is working at route/path
/*app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "This is rest API's working"
    })
})*/

//go into the env file and access the port number
app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running on PORT : ", process.env.APP_PORT);
})