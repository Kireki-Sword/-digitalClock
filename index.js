function changeTime(){

    const date = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const secs = now.getSeconds().toString().padStart(2,0);

    newTime = `${hours}:${minutes}:${secs}`
    document.getElementById('clock') = newTime
}

changeTime()
setInterval(changeTime,1000)
