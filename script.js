

function SubmitHandle(){
    const number = document.getElementById("number").value;
    const answer1 = document.getElementById("answers1");
    
    let num1 = 0, num2 = 1, n;

    for(i=1; i <= number; i++){
        num2 = n;
        n = num1 + num2;
        num1 = num2;
        console.log(num1)
        answer1.innerHTML= 'Your answer: ' + num1;
    }
    // console.log(number)
}


// program to display fibonacci sequence using recursion

function SubmitHandlerecursion(){
    const numbers = document.getElementById("number_recursion").value;
    const answer1 = document.getElementById("answers2");

    if(numbers <=0){
        alert('Please enter a positive integer.');
    }

    else{
    for(i=0; i<= numbers; i++){
        console.log(fibonacci(i));
        answer1.innerHTML='Your answer: ' + fibonacci(i)
    }
    }
}

function fibonacci(num){
    if(num <2){
        return num;
    }
    else{
        return (fibonacci(num-1) + fibonacci(num-2));
    }
}




///Find bad word and filter with ****

function CheckText(){
const Words = document.getElementById('words').value;

const changeWord = document.getElementById('checked-words');

const toActive = document.getElementById("to-active")


var badWords = ["dumb", "evil", "devil", "ghost"];

// i to ignore case

var rgx = new RegExp(badWords.join("|"), "i");

function filterWord(str) {
    return str.replace(rgx, "****");
}

toActive.classList.toggle('active');

changeWord.innerHTML = filterWord(Words)
// console.log("clicked")

}