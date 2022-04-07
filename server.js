// import dependencies
const express = require("express")

// Create a new express application object
const app = express()

// Array for Todos
const todos = []

//middleware
app.use("/static", express.static("static"))
app.use(express.urlencoded({extended: true}))

//Routes
app.get("/test", (req, res) => {
    res.send("Hello")
})

app.get("/", (req, res) => {
    res.render("index.ejs", {
        name: "Alex Merced",
        todos: todos
    })
})

app.post("/", (req, res) => {
    // push new todo into array
    todos.push(req.body)
    // redirect back to main page (refresh page)
    res.redirect("/")
})

// run your application, so it listens on port 4444
app.listen(4444, () => {
    console.log("Server is Listening on port 4444")
})