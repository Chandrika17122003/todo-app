let tasks = [];

function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter task");
        return;
    }

    const task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = "";
}

function renderTasks() {
    const taskList = document.getElementById("tasklist");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleComplete(${index})">
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <div>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = localStorage.getItem("todoTasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    renderTasks();
}

window.onload = loadTasks;


