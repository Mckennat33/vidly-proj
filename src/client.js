const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000


const mockUsers = [
    { id: 1, username: "thomas", displayName: "Thomas"},
    { id: 2, username: "joe", displayName: "Joe"},
    { id: 3, username: "angie", displayName: "Angie"}
]

app.get("/", (request, response) => {
    const test = "test"
    response.send(test)
})

app.get("/users/:id", (req, res) => {
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) 
        return res.status(400).send({ msg: "Bad Request. Invalid ID."})
    const findUsers = mockUsers.find((user) => user.id === parsedId);
    if (!findUsers) return res.sendStatus(404)
    return res.send(findUsers)
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})

