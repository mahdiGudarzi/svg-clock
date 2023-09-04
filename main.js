let hours = window.document.getElementById("hours")
let minute = window.document.getElementById("minute")
let second = window.document.getElementById("second")
let ampm = window.document.getElementById("ampm")
let hh = document.getElementById("hh")
let mm = document.getElementById("mm")
let ss = document.getElementById("ss")
let hrDot = document.querySelector(".hr_dot")
let minDot = document.querySelector(".min_dot")
let secDot = document.querySelector(".sec_dot")
const timer = () => {
    hours.textContent = new Date().getHours()
        new Date().getHours() >= 12 ? ampm.textContent = "PM" : ampm.textContent = "AM"
        minute.innerText = new Date().getMinutes()
        second.innerHTML = new Date().getSeconds()
        hh.style.strokeDashoffset = 440 - (440 * hours.textContent) / 24
        mm.style.strokeDashoffset = 440 - (440 * minute.innerText) / 60 // 440 -((440*2)/60)
        ss.style.strokeDashoffset = 440 - (440 * second.innerHTML) / 60
        hrDot.style.transform = `rotate(${hours.textContent *15}deg)` //im using 24 hours
        minDot.style.transform = `rotate(${minute.textContent *6}deg)`
        secDot.style.transform =  `rotate(${second.textContent *6}deg)`
        requestAnimationFrame(timer)

    }
    requestAnimationFrame(timer)

