const button = document.getElementById('calculate');
const bill = document.getElementById('bill')
const tip = document.getElementById('tip');
const total = document.getElementById('total')

function calculateTotal(){
    const billTotal = parseInt(bill.value)
    const tipTotal = parseInt(tip.value)
    total.innerText = "₹" + (billTotal + ((billTotal / 100) * tipTotal)) + "/-";    
}


button.addEventListener('click', calculateTotal)