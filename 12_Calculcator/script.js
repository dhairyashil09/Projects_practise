//select all button available in div
const buttons = document.querySelectorAll("button");

//select input tag for inserting result into input field
let result = document.getElementById("result");

//using for loop to add event listeners to all buttons at same time
for (let i = 0; i < buttons.length; i++) {
  const events = buttons[i];
  events.addEventListener("click", (e) => {
    const values = events.textContent;


    //creating condition for each values
    if(values === "C") {

        //created function for clearing values whn we click on C 
        clearResults();
    }else if(values === "="){

        //created function for calculating values whn we click on =
        CalculateValues()
    }else {

        //to appending values into input field and passing values into it
        appendValue(values)
    }
  


});

}


//for celaring result
function clearResults() {
result.value = null; //clear results
}


//for calculating values
function CalculateValues(){
    result.value = eval(result.value) //eval is built in function in javascript which evalulate calculation
}


//for appending to input field

function appendValue(values){
    result.value += values 
}