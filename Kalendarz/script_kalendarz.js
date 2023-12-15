const calendar = document.querySelector(".main")
const modules = document.querySelectorAll(".module")

modules.forEach(module => {module.addEventListener("click",function(bim){
    if(bim.target.className!="point") return
    module.classList.remove("active")
})})

calendar.addEventListener("click",function(xuy){
    let element = xuy.target
    if(element.className!="day") return 
    
    let id = Array.from(calendar.children).indexOf(element);
    modules[id].classList.add("active");
})

