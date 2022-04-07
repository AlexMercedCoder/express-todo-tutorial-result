// grab all the todos by class
const todos = document.querySelectorAll(".todo")

// add a click event to each of them
for (todo of todos){
    todo.addEventListener("click", () => {
        todo.style.textDecoration = "line-through"
    })
}