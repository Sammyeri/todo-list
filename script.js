
document.getElementById("addTask").addEventListener("click", (event) =>{
    event.preventDefault();
    let newTask = document.getElementById("task").value;
    let newDiv = document.createElement("div");
    let taskText = document.createElement("p");
    let removeButton = document.createElement("div");
    let checkmark = document.createElement("div");
    let subTask = document.createElement("div");
    taskText.innerText = newTask;
    removeButton.innerText = "X";
    removeButton.classList.add("remove");
    checkmark.innerText = "\u2713";
    checkmark.classList.add("check");
    newDiv.appendChild(checkmark);
    subTask.appendChild(taskText);
    subTask.appendChild(removeButton);
    subTask.classList.add("subTask");
    newDiv.classList.add("task");
    newDiv.appendChild(subTask);
    document.getElementById("taskList").appendChild(newDiv);
});

document.getElementById("taskList").addEventListener("click", (event) =>{
    if(event.target.innerText === "X"){
    document.getElementById("taskList").removeChild(event.target.parentNode.parentNode);
    } else if (event.target.firstChild.style.textDecoration === "line-through"){
        event.target.firstChild.style.textDecoration = "none";
    }else{
        event.target.firstChild.style.textDecoration = "line-through";
    }
});


//to add: checkmark/checkbox, darker background when checked, edit existing items, subtasks?, clear list, 