function changeTime(){

    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const secs = date.getSeconds().toString().padStart(2, '0');

    const newTime = `${hours}:${minutes}:${secs}`
    document.getElementById('clock').textContent = newTime;
}

changeTime()
setInterval(changeTime,1000)
