const questions =
[
    {
        "q": "What is full form of HTML",
        "a": "Hyper Tag Markup Language",
        "b": "Hyper Text Markup Language",
        "c": "Hyperlinks Text Mark Language",
        "d": "Hyperlinking Text Marking Language",
        "answer": "b"
    },
    {
        "q": "What does CSS stand for?",
        "a": "Computing Style Sheet",
        "b": "Creative Style System",
        "c": "Creative Styling Sheet",
        "d": "Cascading Style Sheet",
        "answer": "d"
    },
    {
        "q": "What is the correct format for aligning written content to the center of the page in CSS?",
        "a": "text-align:center;",
        "b": "font-align:center;",
        "c": "text:align-center;",
        "d": "font:align-center;",
        "answer": "a"
    },
    {
        "q": "What is the name of the protocol that is used to transfer data between a web server and a web browser?",
        "a": "HTTP",
        "b": "HTTPS",
        "c": "FTP",
        "d": "SMTP",
        "answer": "a"
    },
    {
        "q": "What is the name of the programming language that is used to create dynamic websites?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "Python",
        "answer": "c"
    }
];

let index = 0;
let queBox = document.getElementById("queBox");
let optionInput = document.querySelectorAll(".options");
let total = questions.length;
let right = 0;
let wrong = 0;

const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");


let data;
const loadQuestion = () => {
    timeCount.textContent = 15;
    timeText.textContent = "Time Left";
    startTimer(15);
    if(index == total)
    {
        return endQuiz();
    }

    reset();
    data = questions[index]
    queBox.innerText = `${index+1}) ${data.q}`; // String Literal

    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    let ans = getAnswer();
    if(ans === data.answer)
    {
       right++; 
    } 
    else 
    {
        wrong++;
    }
    

    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <h2>Your answer is ${ans}.</h2>
        <h3>Correct answer is ${data.answer}</h3>
    `;
    if(ans === data.answer){
        popup.style.backgroundColor = "#00FF00";
    }else{
        popup.style.backgroundColor = "#F40009";
    }
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 1000);

    index++;
    loadQuestion();
    return; 
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            } 
        }
    )
        return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    if (total === right) {
      document.getElementById("box").innerHTML = `
        <div style="text-align:center">
            <h1>Quiz Over!!!</h1>
            <h2 style = "margin-top:10px;">Score : ${right}/${total}</h2>
            <h1 style = "margin-top:40px;">Great Work!🎉🎉🎉</h1>
        </div>
        
    `;
    }
    else{
        document.getElementById("box").innerHTML = `
        <div style="text-align:center">
            <h1>Quiz Over!!!</h1>
            <h2 style = "margin-top:10px;">Score : ${right}/${total}</h2>
            <h1 style = "margin-top:40px;" onclick="reset()">Try again</h1>
        </div>
    `;
    }
}

// main call
loadQuestion();


function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
        }
    }
}