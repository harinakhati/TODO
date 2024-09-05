var todos=[]

 function addTask(){
    const todoInput = document.getElementById('todoInput')
    const todoVaule=todoInput.value
    
    if(todoVaule !==""){

    
    // console.log(todoVaule)  
        todos.push({
         text :todoVaule,
         completed:false
        // completed:true
        })
    // console.log(todos)
        todoInput.value=""
        updateTodoList()
    }
 }

 function updateTodoList(){
    const todoList = document.getElementById('todoList')
    todoList.innerHTML=""//clear existing list
     todos.forEach(function(task){
        const listItem = document.createElement('li')
        listItem.textContent=task.text
        listItem.className=task.completed ? "completed" :""
        listItem.onclick=function(){
            toggleCompleted(task)
        }
        todoList.appendChild(listItem)

        updateCount()
    })
 }


 function toggleCompleted(task){
    task.completed =!task.completed
    updateTodoList()
 }


 function updateCount(){
   const totalTasks= document.getElementById('totalTasks')
   const completedTasks =document.getElementById('completedTasks')
   const total=todos.length
   totalTasks.textContent=total
  const completed= todos.reduce(function(acc,todo){
    return todo.completed ? acc+1 : acc
   },0)
   completedTasks.textContent=completed
 }

function filterTodo(){
    const searchInput=document.getElementById('searchInput')
    const searchValue=searchInput.value
    // console.log(searchValue)
    const filteredTasks=todos.filter(function(todo){
        return todo.text.includes(searchValue)
    })
    // updateTodoList(filteredTasks)
    updateTodoListWithFilteredTasks(filteredTasks)
}

function updateTodoListWithFilteredTasks(filteredTasks){
    const todoList = document.getElementById('todoList')
    todoList.innerHTML=""//clear existing list
     filteredTasks.forEach(function(task){
        const listItem = document.createElement('li')
        listItem.textContent=task.text
        listItem.className=task.completed ? "completed" :""
        listItem.onclick=function(){
            toggleCompleted(task)
        }
        console.log(listItem)
        todoList.appendChild(listItem)
    })
        updateCount()
    
}








