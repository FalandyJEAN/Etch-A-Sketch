const container = document.querySelector(".container")
let rainbowBtn = document.querySelector("#rainbowBtn")
let eraser = document.querySelector("#erase")
let clear = document.querySelector("#clear")
let colorPicker = document.querySelector("#colorPicker")
let sizeRange = document.querySelector("#size")
let rangeValue = document.querySelector("#rangeValue")

sizeRange.value = "16"
let size = sizeRange.value
rangeValue.textContent = `${size} x ${size}`
document.documentElement.style.setProperty('--grid-size', size)
createGrid()

sizeRange.addEventListener("input", () => {
    size = sizeRange.value
    rangeValue.textContent = `${size} x ${size}`
    
    document.documentElement.style.setProperty('--grid-size', size)
    createGrid()
})

function createGrid() {
    container.innerHTML = ""

    for (let i = 0; i < size * size; i++) {
        const item = document.createElement("div")
        item.classList.add("gridItem")
        container.appendChild(item)

        addBlackColor(item)
    }
}

function addBlackColor(item) {
    const applyColor = (e) => {
        e.preventDefault()
        item.style.backgroundColor = "black"
    }

    item.addEventListener("mouseover", applyColor)
    item.addEventListener("touchmove", applyColor)
}

colorPicker.addEventListener("input", (e) => {
    const selectedColor = e.target.value
    const gridItems = document.querySelectorAll(".gridItem")

    gridItems.forEach((item) => {
        const applyColor = (e) => {
            e.preventDefault()
            item.style.backgroundColor = selectedColor
        }

        item.addEventListener("mouseover", applyColor)
        item.addEventListener("touchmove", applyColor)
    })
})


function getRandomColor(){
    const hexa = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hexa[Math.floor((Math.random() * 16))]
    }

    return color
}


function applyRandomColor(item){
    const randomColor = getRandomColor()

    const applyColor = (e) => {
        e.preventDefault()
        item.style.backgroundColor = randomColor
    }

    item.addEventListener("mouseover", applyColor)
    item.addEventListener("touchmove", applyColor)
}

rainbowBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const gridItems = document.querySelectorAll(".gridItem")
    gridItems.forEach((item)=>{
        applyRandomColor(item)
    })
})

function removeColor(item){
    const applyColor =  (e) => {
        e.preventDefault()
        item.style.backgroundColor = "white"
    }

    item.addEventListener("mouseover", applyColor)
    item.addEventListener("touchmove", applyColor)
}

eraser.addEventListener("click", (e) => {
    e.preventDefault()
    const gridItems = document.querySelectorAll(".gridItem")
    gridItems.forEach((item)=>{
        removeColor(item)
    })
})

clear.addEventListener("click", (e) => {
    e.preventDefault()
    const gridItems =document.querySelectorAll(".gridItem")
    gridItems.forEach((item)=>{
        item.style.backgroundColor = "white"
        addBlackColor(item)
        colorPicker.value = "black"
    })
})