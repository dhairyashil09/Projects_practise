
//create array of testimonials
const testimonials = [
    {
        name: "Michael Dam",
        imgUrl:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8Mg%3D%3D",
        text:"With Apple, communication between all of us is far more efficient. A game changer."
    },
    {
        name: "Jordi Espinosa",
        imgUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHVzZXJ8ZW58MHx8MHx8fDI%3D",
        text:"Apple makes me more productive and gets the job done in a fraction of the time. I'm glad I found Apple."
    },
    {
        name: "Alexander Hipp",
        imgUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHx8MHx8fDI%3D",
        text:"I can't say enough about Apple. Apple has really helped our business."
    }
]

//selection name img and text from html
const Username = document.querySelector('.username')
const imageUrl = document.querySelector("img")
const comment = document.querySelector('.text')

let forward = document.querySelector('.forw')
let backword = document.querySelector('.back')


//now creating function to update testimonial
let idx=0;

//store interval timer id and reseting when it requires
let timer;
updateTestimonials()

function updateTestimonials(){
    const {name,imgUrl,text} = testimonials[idx];
    Username.innerText = name //update name
    imageUrl.src = imgUrl //update image
    comment.innerText = text //update text
}

//
function goForward(){
    idx= (idx + 1) % testimonials.length;
    updateTestimonials()
    resetTimer()
    
}

function goBackward(){
    idx = (idx - 1 + testimonials.length) % testimonials.length;
    updateTestimonials()
    resetTimer()
}

function resetTimer() {
    clearInterval(timer); // Stops the current timer
    startTimer();         // Starts a new timer
}

//start timer
function startTimer(){
    timer = setInterval(()=>{
        goForward();
    },2000)
}


forward.addEventListener("click", goForward);
backword.addEventListener("click", goBackward);
updateTestimonials(); 
startTimer(); 

