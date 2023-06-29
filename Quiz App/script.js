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
    }
];

let index = 0;
let queBox = document.getElementById("queBox");
let optionInput = document.querySelectorAll(".options");
let total = questions.length;
let right = 0;
let wrong = 0;

let data;
const loadQuestion = () => {
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