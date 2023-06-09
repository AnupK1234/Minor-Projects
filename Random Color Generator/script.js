const getColor = () => {
    const randomNum = Math.floor(Math.random()*16777215); // Math.random() method generates any random no. betn 0 and 1
    // The value 16777215 is for white color
    const randomCode = "#" + randomNum.toString(16); // To convert it into a string and a radix i.e 16 for Hexadecimal is passed
    console.log(randomNum, randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode); // This will copy the code to clipboard
}


// event call
document.getElementById("btn").addEventListener(
    "click", getColor
);

// initial call - when page loads
getColor();