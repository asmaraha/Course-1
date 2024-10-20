function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const taskList = document.getElementById("todo-list");

        const listItem = document.createElement("li");
        listItem.textContent = taskValue;

        listItem.addEventListener("click", function() {
            listItem.classList.toggle("completed");
        });

        taskList.appendChild(listItem);

        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
