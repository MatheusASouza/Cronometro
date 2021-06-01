var hun = 0
var h = 0
var min = 0
var sec = 0
var time = 10
var chrono

function start(){
    chrono = setInterval(()=> {timer()}, time)
}

function pause(){
    clearInterval(chrono)
}

function stop(){
    clearInterval(chrono)
    var hun = 0
    var h = 0
    var min = 0
    var sec = 0
    document.getElementById('counter').innerText = '0:00:00:00'
}

function timer(){
    hun++
    if(hun == 100){
        hun = 0
        sec++
            if(sec == 60){
            sec = 0
            min++
                if(min == 60){
                min = 0
                h++
            }
        }
    }
    var format = (h) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec) + ':' + (hun < 10 ? '0' + hun : hun)
    document.getElementById('counter').innerText = format
}