const watchnow = document.querySelector(".btn")
const Trailer = document.querySelector(".trailer")
const cross = document.querySelector("i")
const video = document.querySelector("video")



watchnow.addEventListener("click", function(){
 Trailer.classList.remove("active")
 video.play()
})

cross.addEventListener("click", function(){
    Trailer.classList.add("active")
    video.pause()
    video.currentTime = 0;
})




