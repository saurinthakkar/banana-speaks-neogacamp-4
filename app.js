// var username = prompt("Give me your username");

// alert("this script works " + username)

var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click",clickEventHandler);

var outputDiv = document.querySelector("#output");

//console.log(outputDiv)
// console.log(btnTranslate);

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?text=" + text;
}

var txtInput = document.querySelector("#txt-input");
//console.log(txtInput);
function errorHandler(error){
    console.log("error occured",error)

}


function clickEventHandler(){
    //console.log("clicked");
    //outputDiv.innerText="abbbsdahsd " + txtInput.value;
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then (response => response.json())
    .then (json => console.log(json.contents.translated))
    .catch(errorHandler)

}

