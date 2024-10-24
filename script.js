const date = document.getElementById('date');
const hours = document.getElementById('hour');
const editForm = document.getElementById('edit-form');
const todoInput = document.getElementById('todo-input');
const deleteBtn = document.getElementById('deleteBtn')

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

