let numOne = document.getElementById("numOne");
let numTwo = document.getElementById("numTwo");
let Result = document.getElementById("Result");


function add () {
   if(numOne.value && numTwo.value){
    let add = parseInt(numOne.value) + parseInt(numTwo.value);
    Result.innerText = add;
    clear()
   } else {
    alert("Enter The digit")
   }
    
    
}

function subtraction (){
if(numOne.value && numTwo.value) {
    let subtraction = parseInt(numOne.value) - parseInt(numTwo.value);
    Result.innerText = subtraction;
    clear()
} else {
    alert("Enter The digit");
}
}

function multification () {
    if(numOne.value && numTwo.value) {
        let multification = parseInt(numOne.value) * parseInt(numTwo.value);
        Result.innerText = multification;
        clear()
    } else {
        alert("Enter The digit")
    }
}

function division (){
   if(numOne.value && numTwo.value){
    let division = parseInt(numOne.value) / parseInt(numTwo.value);
    Result.innerText = division;
    clear()
   } else{
    alert("Enter The digit")
   }
    
}


function clear (){
    numOne.value = "";
    numTwo.value = "";
}