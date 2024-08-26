document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    // Load tasks from local storage
    const loadTasks = () => {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach(task => addTaskToDOM(task));
    };
  
    // Save tasks to local storage
    const saveTasks = () => {
      const tasks = [];
      document.querySelectorAll(".task-item").forEach(taskItem => {
        tasks.push({
          text: taskItem.querySelector("span").innerText,
          completed: taskItem.classList.contains("completed"),
        });
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  
    // Add a new task
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTaskToDOM({ text: taskText, completed: false });
        saveTasks();
        taskInput.value = "";
      }
    };
  
    // Add task to the DOM
    const addTaskToDOM = ({ text, completed }) => {
      const li = document.createElement("li");
      li.className = `task-item ${completed ? "completed" : ""}`;
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = completed;
      checkbox.addEventListener("change", () => {
        li.classList.toggle("completed", checkbox.checked);
        saveTasks();
      });
  
      const span = document.createElement("span");
      span.innerText = text;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
        saveTasks();
      });
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    };
  
    // Event listeners
    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTask();
    });
  
    // Initialize
    loadTasks();
  });
  