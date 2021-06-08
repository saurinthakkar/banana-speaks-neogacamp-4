// var username = prompt("Give me your username");

// alert("this script works " + username)

var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click",clickEventHandler);

var outputDiv = document.querySelector("#output");

console.log(outputDiv)
// console.log(btnTranslate);

var txtInput = document.querySelector("#txt-input");
console.log(txtInput);

function clickEventHandler(){
    console.log("clicked");
    outputDiv.innerText="abbbsdahsd " + txtInput.value;
}

