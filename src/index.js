document.addEventListener("DOMContentLoaded", () => {
  let form =document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log(e.target.new_task_description)
    listToDo(e.target.new_task_description.value)
    form.reset()
  })
})

function listToDo(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  li.textContent = `${todo} ` 
  btn.textContent = 'X'
  btn.addEventListener("click" , deleteBtn)
  li.appendChild(btn)
  document.getElementById('tasks').appendChild(li)
}

function deleteBtn(e) {
  e.target.parentNode.remove() 
}
