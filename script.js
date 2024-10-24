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

let taskAdd = 0; 

function addTask() {
  const todoInput = document.getElementById('todo-input').value; 

  if (todoInput === "") {
    alert("Please task fill Up");
    return;
  }

  taskAdd++; 

  const day = data.getDate();
  const month = data.getMonth();
  const nowDate = `${day} / ${month}`
  
  const row = `<tr id="task-${taskAdd}">
                <td>${taskAdd}</td>
                <td>${todoInput}</td>
                <td>${nowDate}</td>

                
                
                <td><button onclick="checkTask(${taskAdd})"><i class="ri-checkbox-line"></i></button></td>
                <td><button onclick="deleteTask(${taskAdd})"><i class="ri-delete-bin-line"></i></button></td>
                <td><button onclick="editTask(${taskAdd})"><i class="ri-edit-box-line"></i></button></td>
              </tr>`;

  tbody.innerHTML += row;


}