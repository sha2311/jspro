const date = document.getElementById('date');
const hours = document.getElementById('hour');
const editForm = document.getElementById('edit-form');
const deleteBtn = document.getElementById('deleteBtn');
const todoList = document.getElementById('todo-list');
const tbody = document.getElementById('tbody');


const data = new Date();
const timeNow = Date.now();
const today = new Date(timeNow)

date.innerHTML = today.toDateString();
function time() {
    const data  = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
       
    if (h< 10) {
            h ='0'+ h;
        }
    if (m< 10) {
            m ='0'+ m;
        }
    if (s< 10) {
            s ='0'+ s;
        }

        hours.innerHTML = h + ':' + m +':' + s;

       setTimeout(' time()', 500)
}

let taskCount = 0; 

function addTask() {
  const todoInput = document.getElementById('todo-input').value; 

  if (todoInput.value ==='' || todoInput.value == null) {
    alert("Please task fill Up")
    return;
  }


}