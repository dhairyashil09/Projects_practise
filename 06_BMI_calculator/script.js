const calculation = document.querySelector(".main");

calculation.addEventListener("click", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector(".height input").value);
  const weight = parseInt(document.querySelector(".weight input").value);
  const result = document.querySelector("#result");
  if (height < 0 || height === " " || isNaN(height)) {
    result.innerHTML = `Enter valid height ${height}`;
  } else if (weight < 0 || weight === " " || isNaN(weight)) {
    result.innerHTML = `Enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>Your Bmi is ${bmi}</span>`;


    const newDiv = document.createElement("div");
    newDiv.id = "new-div";
    newDiv.style.marginTop = "10px";
    newDiv.style.color = "lightblue";
    result.parentNode.insertBefore(newDiv, result.nextSibling);
    
    
    if (bmi < 18.6) {
      newDiv.innerHTML = `<span> You are in Under Weight ${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      newDiv.innerHTML = `<span> Your weight in Normal Range ${bmi}</span>`;
    } else {
      newDiv.innerHTML = `<span>You are Over Weight ${bmi} Go to GYM</span>`;
    }
  }
});
