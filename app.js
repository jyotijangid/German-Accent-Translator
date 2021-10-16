let inputText = document.querySelector(".input-text");
let btnTranslate = document.getElementById("btn-translate")
let outputText = document.querySelector("#output-text");
let url = "https://api.funtranslations.com/translate/german-accent.json";
let buttonRefresh = document.querySelector(".output-text");

function onClickHandler(){
    
    fetch(constructURL(inputText.value)).then((response)=>response.json()).then(json => (
        outputText.innerText = json.contents.translated
    ));
}


function constructURL(text){
    return url+"?text="+text;
}


btnTranslate.addEventListener('click', onClickHandler);

function refreshPage(){
    window.location.reload();
}
// inputText.addEventListener('input', function (){
//     console.log(inputText.value);
// }