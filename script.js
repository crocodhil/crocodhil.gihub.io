/* Insert Data */
const inputUser = document.getElementById('input-user')
const task = document.getElementById('task')

function addTask() {
    if(!inputUser.value) {
        alert('Mohon Masukkan Agenda Anda!')
    }else {
        let li = document.createElement('li')
        let span = document.createElement('span')
        span.classList.add('close')
        li.innerHTML = inputUser.value 
        span.innerHTML = " \u00d7"
        task.appendChild(li)
        li.appendChild(span)
    }
    inputUser.value = ''
    saveData()
}

task.addEventListener('click', function (e) {
    if(e.target.nodeName === 'LI') {
       e.target.classList.toggle('checked')
       saveData()
   } else if (e.target.className === 'close'){
       e.target.parentElement.style.display = 'none'
       saveData()
   }
})

function saveData() {
    localStorage.setItem("data", task.innerHTML)
}

function showTask() {
    task.innerHTML = localStorage.getItem("data")
}

showTask()
