function addTask(period) {
    let taskInput = document.getElementById(`new-${period}-task`);
    let taskList = document.getElementById(`${period}-tasks`);

    if (taskInput.value.trim() !== "") {
        let newTask = document.createElement("li");
        newTask.textContent = taskInput.value;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.className = "remove";
        removeButton.onclick = () => newTask.remove();

        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);

        taskInput.value = "";
    }
}

function removeTask(button) {
    button.parentElement.remove();
}
