document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const task = taskInput.value.trim();

    if (task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        updateTaskList();
        taskInput.value = '';
    }
});

function updateTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.classList.add('task-item');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', function() {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            updateTaskList();
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Carregar tarefas ao iniciar
updateTaskList();