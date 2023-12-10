const container = document.querySelector(".container")
let size = 16

for(let i = 0; i < size * size; i++){
        const item = document.createElement("div")
        item.classList.add("gridItem")
        container.appendChild(item)

        addcolor(item)
}

function addcolor(item){
    item.addEventListener("mouseover", (e)=>{
        e.preventDefault()
        item.style.backgroundColor = "black"
    })
}

function removeColor(item){
    item.addEventListener("mouseover", (e)=>{
        e.preventDefault()
        item.style.backgroundColor = "white"
    })
}
