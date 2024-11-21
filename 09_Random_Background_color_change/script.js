// generatae a random color

let randomColor = function(){
    let hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}


let intervalId;
let start = document.querySelector('.start')
let stop  = document.querySelector('.stop')

start.addEventListener('click', function(){
    
    if(!intervalId){
        intervalId = setInterval(function(){
            document.body.style.backgroundColor = randomColor()
            console.log(randomColor())
        },1000)
    }
   
})

stop.addEventListener('click', function(){
    clearInterval(intervalId)
    intervalId = null
});


