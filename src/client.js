const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())


app.set('view engine', 'pug')
app.set('views', './views') // default - optional 

app.get('/', (req, res) => {
    res.render('index', { title: 'my express app', message: 'hello'})
})

// create a library full of books
const books = [
    {id: 1, title: 'Akata Witch', author: 'Nnedi Okorafor'}, 
    {id: 2, title: 'Assassins Apprentice', author: 'Robin Hobb'}, 
    {id: 3, title: 'The Blue Sword', author: 'Robin McKinley'}, 
    {id: 4, title: 'City Of Stairs', author: 'Tom Rob'}, 
]
// get a book with the name
// user puts in a title of a book
// search the books title 
//if book title exists return book title
// if not a title return error

app.get('/books/:title', (req, res) => {
    const reqBook = req.params.title.toLocaleLowerCase() // what the user types in 
    const searchedBook = books.find((book) => book.title.toLocaleLowerCase() === reqBook)
    if (searchedBook) {
        res.send(searchedBook)
    } else {
        return res.status(404).send('Invalid Book')
    }
    
})

app.get('/books/:title', (res, req) => {
    const reqBook = req.params.title.toLocaleLowerCase() // what the user types in 
    const searchedBook = books.find((book) => book.title.toLocaleLowerCase() === reqBook)
})

app.post('/books/:title', (res, req) => {
    const { id, title, author } = req.body
    if (!id || !title || !author) {
        return res.status(404).send("all fields are required")
    } else {
        res.send(title, author)
    }
})

// delete book with a name? 



app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})
