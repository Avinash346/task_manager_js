let addForm=document.querySelector(".add");
let tasks=document.querySelector(".tasks");
let clearAll=document.querySelector(".clear");
let messageSpan=document.querySelector(".message span");
let searchForm=document.querySelector(".search");



function updateMessage(){
let textLength=tasks.children.length;
messageSpan.textContent=`you have ${textLength} pending task`;
}

updateMessage();


addForm.addEventListener("submit",event=>{
    event.preventDefault();
    let value=addForm.task.value.trim();
    if(value.length){
                     tasks.innerHTML+=`<li>
                     <span>${value}</span>
                     <i class="bi bi-trash-fill delete"></i>
                                    </li>`
  updateMessage();
  addForm.reset();
    }
});

tasks.addEventListener("click",event=>{
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
        updateMessage();
    }

});

clearAll.addEventListener("click",event=>{
    let taskItems=tasks.querySelectorAll("li");
    taskItems.forEach(items=>{
        items.remove();
        updateMessage();
    });

});

function filterTask(term){
    Array.from(tasks.children).filter(task=>{
        return !task.textContent.includes(term);
    })
    .forEach(task=>{
    task.classList.add("hide");
    });
    Array.from(tasks.children).filter(task=>{
        return task.textContent.includes(term);
    })
    .forEach(task=>{
      task.classList.remove("hide");
    
    });
}
searchForm.addEventListener("keyup",event=>{
let term=searchForm.task.value.trim();
filterTask(term);
});

searchForm.addEventListener("click",event=>{
if(event.target.classList.contains("reset")){
    searchForm.reset();
    let term=searchForm.task.value.trim();
    filterTask(term);
}
});