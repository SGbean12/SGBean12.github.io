//UI Variables:
const form = document.querySelector(".task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear");
const filter = document.querySelector("#Filter");
const taskInput = document.querySelector("#task");

loadEventListeners();
//Event Listeners
function loadEventListeners(){
    form.addEventListener('submit' , addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
    document.addEventListener('DOMContentLoaded', getTasks);
}

//event Handler/s:

//functions 
function addTask(e){
    if(taskInput.value ===''){
        alert('Add a Task');
    } else {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    
    const link = document.createElement('a');
    link.className="delete-li";
    link.innerHTML='<i class="fas fa-ban"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
        
        storeTaskinLocalStorage(taskInput.value);

    taskInput.value='';
    e.preventDefault();
    }  
}
//storing To-Do's in Local Storage
function storeTaskinLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//Viewing tasks stored in local Storage
function getTasks (){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className="delete-li";
        link.innerHTML='<i class="fas fa-ban"></i>';
        li.appendChild(link);
        taskList.appendChild(li);

    });
}
//filter through set tasks
function filterTasks (e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach
    (function (task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.diplay = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}
//removing task via icon
function removeTask (e){
    if(e.target.parentElement.classList.contains("delete-li"))
    {
        if(confirm("Please Confirm")){
        e.target.parentElement.parentElement.remove();
        removeTaskFromLocalStorage (e.target.parentElement.parentElement);
        }
    }
}
//removing task from local storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//clears deleted tasks from storage 
function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLocalStorage();
}
//clears all previously stored tasks
function clearTasksFromLocalStorage(){
    localStorage.clear();
}







