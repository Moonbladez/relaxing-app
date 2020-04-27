//dom elements
const container = document.querySelector("#container")
const text = document.querySelector(".text")

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5

const breathAnimation = () => {

    text.innerText = "Breath in"
    container.className = "container grow"

    setTimeout(() => {
        text.innerText = "Hold"

        setTimeout(() => {
            text.innerText = "and breath out..."
            container.className = "container shrink"
        }, holdTime)
    }, breatheTime)
}

setInterval(breathAnimation, totalTime)



breathAnimation()