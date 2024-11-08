const express = require('express')
const router = express.Router()

router.get('/:title', (req, res) => {
    const reqBook = req.params.title.toLocaleLowerCase() // what the user types in 
    const searchedBook = books.find((book) => book.title.toLocaleLowerCase() === reqBook)
    if (searchedBook) {
        res.send(searchedBook)
    } else {
        return res.status(404).send('Invalid Book')
    }
    
})

router.get('/:title', (res, req) => {
    const reqBook = req.params.title.toLocaleLowerCase() // what the user types in 
    const searchedBook = books.find((book) => book.title.toLocaleLowerCase() === reqBook)
})

router.post('/:title', (res, req) => {
    const { id, title, author } = req.body
    if (!id || !title || !author) {
        return res.status(404).send("all fields are required")
    } else {
        res.send(title, author)
    }
})

module.exports = router; 