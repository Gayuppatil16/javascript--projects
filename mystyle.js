const questions=[
    {
        'que':'Which of the following is markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct':'a'
    },

    {
        'que':'CSS Stands for?',
        'a': 'Cascading style style',
        'b': 'Cascding style sheet',
        'c': 'code style sheet',
        'd': 'code sheet style',
        'correct':'b'
    },

    {
        'que':'Which of the Style tag?',
        'a': 'style',
        'b': 'sheet',
        'c': '<style>',
        'd': '</style>',
        'correct':'c'
    },
    {
        'que':'Choose the correct HTML element for the largest heading?',
        'a': '<heading>',
        'b': '<h6>',
        'c': '<head>',
        'd': '<h1>',
        'correct':'d'
    },
    {
        'que':'What is the correct HTML element for inserting a line break?',
        'a': 'break',
        'b': 'lb',
        'c': '<br>',
        'd': '</br>',
        'correct':'c'
    }
]
//for Load the questions
let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const quesBox=document.getElementById("quesBox")
const optioninputs=document.querySelectorAll('.options')
const loadquestion=()=>{
    if(index=== total)
    {
        return endQuiz();
    }
    reset();
    const data=questions[index];
    quesBox.innerText=`${index+1}) ${data.que}`;

//Load the options//
    optioninputs[0].nextElementSibling.innerText=data.a;
    optioninputs[1].nextElementSibling.innerText=data.b;
    optioninputs[2].nextElementSibling.innerText=data.c;
    optioninputs[3].nextElementSibling.innerText=data.d;
    optioninputs[4].nextElementSibling.innerText=data.d;
    optioninputs[5].nextElementSibling.innerText=data.c;
   
}
//submit code//

const submitQuiz=()=>            
{
 const data=questions[index];   
 const ans=getAnswer()  
 if(ans===data.correct)              //answer is correct or not//
 {
     right++;
 } 
 else{
    wrong++;
 }
 index++;                            //next questions//
 loadquestion();                    //Load questions//
 return;
}
const getAnswer=()=>{  
    let answer;                          //load answers//
    optioninputs.forEach(
        (input)=>{
            if(input.checked)
            {
                answer=input.value;
                
            }
           

        } )
        return answer;
}
const reset=()=>                            //option reset function//
{
    optioninputs.forEach(
        
            (input)=>{
                return input.checked=false;
            }
      )
 
    }

    const endQuiz=()=>
    {
        document.getElementById("box").innerHTML=`
        <div style="text-align:center">
        <h3> Thank You For Playing Quiz
        <h2>${right}/${total} are correct<h2>
        </div>`
    }
    
loadquestion();