const router = require('express').Router()

const { createUser, getUserByUserId, getUsers, deleteUser, updateUsers, login } = require("./user.controller");

const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUser);

router.get("/", checkToken, getUsers);

router.get("/:id", checkToken, getUserByUserId);

router.patch("/", checkToken, updateUsers); //id gets passed within the body

router.delete("/", checkToken, deleteUser); //id gets passed within the body

router.post("/login", login);

module.exports = router;