const name = prompt("Please enter your name")

const myNameSpan = document.getElementById("myName")
myNameSpan.innerHTML = name

const myClockDiv = document.getElementById("myClock")
myClockDiv.innerHTML = "00:00:00"

const showTime = () => {
  setInterval(() => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")

    myClockDiv.innerHTML = `${hours}:${minutes}:${seconds}`
  }, 1000)
}
