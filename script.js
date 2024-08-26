function addTask(listId, inputId) {
    const taskInput = document.getElementById(inputId);
    const taskList = document.getElementById(listId);
    
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        const span = document.createElement('span');
        span.textContent = taskInput.value;

        li.appendChild(checkbox);
        li.appendChild(span);
        taskList.appendChild(li);

        taskInput.value = '';  // Clear the input field
    }
}
function resetTasks() {
    document.getElementById('today-list').innerHTML = '';
    document.getElementById('week-list').innerHTML = '';
    document.getElementById('month-list').innerHTML = '';
    alert("All tasks have been reset!");
}

function resetTodayTasks() {
    document.getElementById('today-list').innerHTML = '';
    alert("Today's tasks have been reset!");
  }
  
  function resetWeekTasks() {
    document.getElementById('week-list').innerHTML = '';
    alert("This week's tasks have been reset!");
  }
  
  function resetMonthTasks() {
    document.getElementById('month-list').innerHTML = '';
    alert("This month's tasks have been reset!");
  }


function saveNotes() {
    const notes = document.getElementById('notes').value;
    localStorage.setItem('savedNotes', notes);
    alert('Notes saved!');
}

// Load saved notes when the page loads
window.onload = function() {
    const savedNotes = localStorage.getItem('savedNotes');
    if (savedNotes) {
        document.getElementById('notes').value = savedNotes;
    }
};
