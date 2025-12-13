

function addition(name , id , level ,major){
    
    if(name.value ===''||id.value ===''||level.value ===''||major.value ===''){
        alert("One Filed may empty at least !!!");
    }
    else{
         const students = JSON.parse(localStorage.getItem('students') || '[]');

    students.push({
        name: name.value,
        id: id.value,
        level: level.value,
        major: major.value
    });

    localStorage.setItem('students', JSON.stringify(students));
    alert("Student Added Successfully !!");

    window.location.href = "../pages/Student_Management.html";
}
}


const kName = document.querySelector('#name');
const kId = document.querySelector('#id');
const kLevel = document.querySelector("#level");

const KMajor = document.querySelector("#major");


const image = 0;


 const save = document.querySelector('#save');   


 save.addEventListener("click", (e)=>{
    e.preventDefault();
    addition(kName,kId,kLevel,KMajor)});