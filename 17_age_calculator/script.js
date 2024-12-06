const Bdate = document.getElementById("Bdate");

const calculate = document.querySelector(".calculate");
let Output = document.querySelector(".Output");
function Result() {
  const BdayValue = Bdate.value;
  if (BdayValue === "") {
    alert("Please enter Valid Date");
  } else {
    const age = getAge(BdayValue);

    if (age < 0) {
      alert("Please select valid Date");
    } else {
      Output.textContent = `Your age is: ${age}`;
    }
  }
}

function getAge(BdayValue) {
  const currentDate = new Date();
  const Birthdate = new Date(BdayValue);

  let year = currentDate.getFullYear() - Birthdate.getFullYear();

  let month = currentDate.getMonth() - Birthdate.getMonth();

  let date = currentDate.getDate() - Birthdate.getDate();

  if (month < 0 || (month === 0 && date < 0)) {
    year--;
  }
  return year;
}

calculate.addEventListener("click", Result);
