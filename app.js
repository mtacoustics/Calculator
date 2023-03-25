let currentInput = document.querySelector("#currentInput")
let previousInput = document.querySelector("#previousInput")
let tempTotal = ""
let stringStorage = ""
let stringStorageTwo = ""
let total = 0
let lastTotal = 0
let operand = ""
let hasDecimal = ""
let noDecimal = 0

function equals() {
    stringStorage = parseFloat(stringStorage)
    stringStorageTwo = parseFloat(stringStorageTwo)
    if (operand === "add") {
        total = stringStorage + stringStorageTwo
        previousInput.innerHTML = total
        lastTotal = total
        softClear()
    } if (operand === "minus") {
        total = stringStorageTwo - stringStorage
        console.log(stringStorage,stringStorageTwo,total)
        previousInput.innerHTML = total
        lastTotal = total
        softClear()
    } if (operand === "multiply") {
        total = stringStorage * stringStorageTwo
        previousInput.innerHTML = total
        lastTotal = total
        softClear()
    } if (operand === "divide") {
        total = stringStorageTwo / stringStorage
        previousInput.innerHTML = total
        lastTotal = total
        softClear()
    }
}

function add() {
    stringStorageTwo = stringStorage
    stringStorage = ""
    currentInput.innerHTML = ""
    operand = "add"
    noDecimal = 0
    if (lastTotal !== 0) {
        stringStorageTwo = lastTotal
        add()
    }
}
function subtract() {
    stringStorageTwo = stringStorage
    stringStorage = ""
    operand = "minus"
    noDecimal = 0
    if (lastTotal !== 0) {
        stringStorageTwo = lastTotal
        subtract()
    }
}
function multiply() {
    stringStorageTwo = stringStorage
    stringStorage = ""
    operand = "multiply"
    noDecimal = 0
    if (lastTotal !== 0) {
        stringStorageTwo = lastTotal
        multiply()
    }
}
function divide() {
    stringStorageTwo = stringStorage
    stringStorage = ""
    operand = "divide"
    noDecimal = 0
    if (lastTotal !== 0) {
        stringStorageTwo = lastTotal
        divide()
    }
}

function turnBtnToString() {
    tempTotal = tempTotal.toString()
    stringStorage = stringStorage + tempTotal
    currentInput.innerHTML = stringStorage
}

function add1() {
    tempTotal = 1
    turnBtnToString()
}
function add2() {
    tempTotal = 2
    turnBtnToString()
}
function add3() {
    tempTotal = 3
    turnBtnToString()
}
function add4() {
    tempTotal = 4
    turnBtnToString()
}
function add5() {
    tempTotal = 5
    turnBtnToString()
}
function add6() {
    tempTotal = 6
    turnBtnToString()
}
function add7() {
    tempTotal = 7
    turnBtnToString()
}
function add8() {
    tempTotal = 8
    turnBtnToString()
}
function add9() {
    tempTotal = 9
    turnBtnToString()
}
function add0() {
    if (stringStorage === "") {
        return stringStorage = ""
    } else {
        tempTotal = 0
        turnBtnToString()
    }
}

function decimalPoint() {
    hasDecimal = stringStorage.search(".")
    console.log(hasDecimal)
    console.log()
    if (hasDecimal === -1 && noDecimal === 0) {
        tempTotal = "0."
        turnBtnToString()
        noDecimal = 1
    } else if (hasDecimal === 0 && noDecimal ===0) {
        tempTotal = "."
        turnBtnToString()
        noDecimal = 1
    }
}

function backSpace() {
    stringStorage = stringStorage.substring(0,stringStorage.length-1)
    currentInput.innerHTML = stringStorage
}

function softClear() {
    tempTotal = ""
    stringStorage = ""
    operand = ""
    total = 0
    currentInput.innerHTML = 0
}

function clearAll() {
    tempTotal = ""
    stringStorage = ""
    operand = ""
    total = 0
    lastTotal = 0
    noDecimal = 0
    currentInput.innerHTML = 0
    previousInput.innerHTML = 0
}

function storeValue() {

}