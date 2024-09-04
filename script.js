var tasks=[]

function addTask(){

    var taskInput=document.getElementById('todoInput')
    var taskValue=taskInput.value 

    // console.log(taskValue)
    // console.log(taskInput)

    //checking if input is empty or not
    if(taskValue.trim() !==""){
        //add task
        tasks.push({
            text : taskValue,
            completed : false
        })

        taskInput.value=""
        updateTodoList()
        // console.log(tasks)
    }
}
// addTask()

function updateTodoList(){
    const todoList=document.getElementById('todoList')
    //clear existing list/data
    todoList.innerHTML=""

    tasks.forEach((task)=>{
        var listItem=document.createElement('li')
        listItem.textContent=task.text 
        listItem.className=task.completed ?
        "completed":""
        listItem.onclick=function(){
            toogleCompleted(task)
        }
        todoList.appendChild(listItem)
        // <li>Go School</li>
    })
    //function to calculate todos,completed
    updateAggregate()
}

function toogleCompleted(task){
   task.completed=!task.completed
   updateTodoList()
}

function updateAggregate(){
    var totalTasks=document.getElementById('totalTasks')
    var completedTasks=document.getElementById('completedTasks')
    var total=tasks.length
    var completed=tasks.reduce((acc,task)=>{
        return task.completed ? acc+1 : acc
    },0)
    
    totalTasks.textContent=total
    completedTasks.textContent=completed
}

function filterTask(){
    var searchInput=document.getElementById('searchInput')
    var searchValue=searchInput.value.toLowerCase()

   var filterTask= tasks.filter((task)=>{
        return task.text.toLowerCase().includes(searchValue)
    })

    //update todolsit with filterTask
    updateTodoListwithfilterTasks(filterTask)
}

function updateTodoListwithfilterTasks(filterTask){
    var todoList=document.getElementById('todoList')

    todoList.innerHTML=""

    filterTask.forEach((task)=>{
        var listItem=document.createElement('li')
        listItem.textContent=task.text 
        listItem.className=task.completed ?
        "completed":""
        listItem.onclick=function(){
            toogleCompleted(task)
        }
        todoList.appendChild(listItem)
    })

    updateAggregate()
}


