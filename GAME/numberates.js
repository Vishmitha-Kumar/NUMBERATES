let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let number= 30;

btn.addEventListener('click',function(){
    let input=document.getElementById('userInput').value;
    if(input==number){
        output.innerHTML = 'Congrates,you won...!!'
    } else if(input < number){
        output.innerHTML='You guessed too low!'}
       else if(input > number){
            output.innerHTML = 'You guessed too high!'
        };

    
    });