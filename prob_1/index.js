function clock(){
    const now = new Date() //date object built in javascript
    const hours = now.getHours() %12
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    //converting decimal hours to degrees in the clock
    const hoursDegrees = hours*30+(minutes/2) 
    const minutesDegrees = minutes*6+ seconds*0.1
    const secondsDegrees = seconds*6
    //dom elements
    document.getElementById('hour').style.transform=`rotate(${hoursDegrees-90}deg)`//minus 90 degrees cause hands start horizontal
    document.getElementById('minute').style.transform=`rotate(${minutesDegrees-90}deg)`
    document.getElementById('second').style.transform=`rotate(${secondsDegrees-90}deg)`
}
//show clocks new state
setInterval(clock,1000)