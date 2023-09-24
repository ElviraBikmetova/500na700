import telMask from "./telMask"

function form() {
    telMask()
    const form = document.querySelector('.subscribe-form')
    const date = form.querySelector('.date')
    const time = form.querySelector('.time')
    date.valueAsDate = new Date()
    let currentTime

    const setCurrentTime = () => {
        currentTime = new Date().toLocaleTimeString().slice(0,-3)
        time.value = currentTime
    }
    setCurrentTime()

    setInterval(setCurrentTime, 1000)
}

export default form