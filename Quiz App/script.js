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
    document.getElementById("box").innerHTML =
    `
        <div style="text-align:center">
            <h2>Quiz Over!!!</h2>
            <h3>Score : ${right}/${total}</h3>
        </div>
        
    `
}

// main call
loadQuestion();