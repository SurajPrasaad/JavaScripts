
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");
  
    function updateTaskStats() {
      const tasks = document.querySelectorAll(".task-item").length;
      const completed = document.querySelectorAll(".task-item.completed").length;
      totalTasks.textContent = `Total tasks: ${tasks}`;
      completedTasks.textContent = `Completed: ${completed}`;
      
      const emptyMessage = document.querySelector(".empty-list");
      if (tasks === 0) {
        if (!emptyMessage) {
          const li = document.createElement("li");
          li.classList.add("empty-list");
          li.textContent = "No tasks yet. Add one above!";
          taskList.appendChild(li);
        }
      } else {
        emptyMessage?.remove();
      }
    }
  
    function createTask(taskText) {
      const li = document.createElement("li");
      li.classList.add("task-item");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("complete-checkbox");
      checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
        updateTaskStats();
      });
  
      const span = document.createElement("span");
      span.classList.add("task-text");
      span.textContent = taskText;
  
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        li.remove();
        updateTaskStats();
      });
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      updateTaskStats();
    }
  
    addButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
        taskInput.focus();
      }
    });
  
    taskInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addButton.click();
      }
    });
  
    updateTaskStats();