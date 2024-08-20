// script.js

// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterTasks = document.getElementById('filter-tasks');

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskAction);
filterTasks.addEventListener('change', filterTaskList);

// Functions
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <div class="task-buttons">
                <button class="complete-btn">✔️</button>
                <button class="delete-btn">❌</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function handleTaskAction(e) {
    if (e.target.classList.contains('complete-btn')) {
        const taskItem = e.target.closest('.task-item');
        taskItem.classList.toggle('completed');
    } else if (e.target.classList.contains('delete-btn')) {
        const taskItem = e.target.closest('.task-item');
        taskList.removeChild(taskItem);
    }
}

function filterTaskList() {
    const filter = filterTasks.value;
    const tasks = taskList.children;
    for (let task of tasks) {
        switch (filter) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'completed':
                if (task.classList.contains('completed')) {
                    task.style.display = 'flex';
                } else {
                    task.style.display = 'none';
                }
                break;
            case 'active':
                if (!task.classList.contains('completed')) {
                    task.style.display = 'flex';
                } else {
                    task.style.display = 'none';
                }
                break;
        }
    }
}



