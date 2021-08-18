
function getPin(product, price, incrasing) {
    const number = document.getElementById(product + '-input')
    let numberText = number.value
    const numberInt = parseInt(numberText)
    if (incrasing) {
        numberText = numberInt + 1
    }
    else if (numberText > 0) {
        numberText = numberInt - 1
    }
    number.value = numberText
    //updateTotal
    const total = document.getElementById(product + '-total')
    total.innerText = numberText * price
    //calculate total
    calculateTotal()
}
function getCalc(product) {
    const input = document.getElementById(product + '-input')
    const inputText = input.value
    const integer = parseInt(inputText)
    return integer
}
function calculateTotal() {
    const phoneTotal = getCalc('phone') * 1219
    const caseTotal = getCalc('case') * 59
    const subTotal = phoneTotal + caseTotal
    const tax = subTotal / 10
    const total = subTotal + tax
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax').innerText = tax
    document.getElementById('total-price').innerText = total
}
function getInPlus() {
    getPin('phone', 1219, true)
}
function getInMinus() {
    getPin('phone', 1219, false)
}
function phoneInPlus() {
    getPin('case', 59, true)
}
function phoneInMinus() {
    getPin('case', 59, false)
}