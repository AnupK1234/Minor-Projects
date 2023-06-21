let upperSet = "ABCDEFGHIJHKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefhigklmnopqrstuvwxyz";
let numSet = "1234567890";
let symbolSet = "~!@#$%^&*()_";

let passbox = document.getElementById("pass-box");
let upperInput = document.getElementById("upper-case");
let lowerInput = document.getElementById("lower-case");
let charInput = document.getElementById("total-char");
let numberInput = document.getElementById("numbers");
let symbolInput = document.getElementById("symbol");

// console.log(passbox, upperInput, lowerInput, charInput, numberInput, symbolInput)

let getRandom = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
};


let generatePassword = (password  = "") => {
    if(upperInput.checked) {
        password = password + getRandom(upperSet);
    }
    if(lowerInput.checked) {
        password = password + getRandom(lowerSet);
    }
    if(numberInput.checked) {
        password = password + getRandom(numSet);
    }
    if(symbolInput.checked) {
        password = password + getRandom(symbolSet);
    }
    if(password.length < charInput.value)
    {
        return generatePassword(password);
    }
    passbox.innerText = truncateString(password, charInput.value);
    navigator.clipboard.writeText(passbox.innerText); // This will copy you code to clipboard
};

// Adding eventListener to Button
document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword();
    }
)

// to reduce the size of string if it is bigger than required
function truncateString(str, num) {
    if(str.length > num)
    {
        let subStr = str.substring(0, num);
        return subStr;
    }

    else {
        return str;
    }
}
