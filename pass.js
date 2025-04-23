const passwordBox=document.querySelector("#password");
const length=12;

const button=document.querySelector("#generate");

let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerCase="abcdefghijklmnopqrstuvwxyz";
let symbols="|{}[]@#$%^&*()_+~=-<>?/";
let number="0123456789";

let allchar=upperCase+LowerCase+symbols+number;


function CreatePassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=LowerCase[Math.floor(Math.random()*LowerCase.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    password+=number[Math.floor(Math.random()*number.length)];

    while(length > password.length){
        password+=allchar[Math.floor(Math.random()*allchar.length)];
    }

    passwordBox.value=password;
}

button.addEventListener("click",CreatePassword)

function copy(){
    passwordBox.select();
    document.execCommand("copy");
}




