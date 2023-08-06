const start_btn = document.querySelector(".start_btn button");
const exit_btn = start_btn.querySelector(".quit");
const continue_btn = start_btn.querySelector(".restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");

start_btn.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
}

start_btn.onclick = ()=>{
    
    quiz_box.classList.add("activeQuiz");
    showQuetions(0);
    queCounter(1); 
}

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
     
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    next_btn.classList.remove("show"); 
}

quit_quiz.onclick = ()=>{
    window.location.reload(); 
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count);
        queCounter(que_numb); 
        next_btn.classList.remove("show");
    }else{
        showResult(); 
    }
}


function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag; 
    const option = option_list.querySelectorAll(".option");

    
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    
    if(userAns == correcAns){ 
        userScore += 1; 
    }else{
        console.log("Wrong Answer");

    }
    for(i=0; i < allOptions; i++){
    
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showResult(){
    
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ 
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore > 1){ 
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}



function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}