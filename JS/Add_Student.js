

function addition(name , id , level ,major){
    
    if(name.value ===''||id.value ===''||level.value ===''||major.value ===''){
        alert("One Filed may empty at least !!!");
    }
    else{
        alert("Nice!!")
    }
}


const kName = document.querySelector('#name');
const kId = document.querySelector('#id');
const kLevel = document.querySelector("#level");

const KMajor = document.querySelector("#major");


const image = 0;


 const save = document.querySelector('#save');   


 save.addEventListener("click", ()=>addition(kName,kId,kLevel,KMajor));