 function countCourses ()
 {
    c =0
    for(let i = 0 ; i<100 ;i++)
    {
        c++
    }
    return c
 }
 function countStudents ()
 {
    c =0
    for(let i = 0 ; i<500;i++)
    {
        c++
    }
    return c
 }
 function countInstructors ()
 {
    c =0
    for(let i = 0 ; i<200 ;i++)
    {
        c++
    }
    return c
 }




const totalCourses = document.querySelector('#courses');
const totalStudent = document.querySelector('#student');
const totaInstructors = document.querySelector('#instructor');
const totatDepartments = document.querySelector('#department');

  totalCourses.innerHTML = countCourses();
  totalStudent.innerHTML = countStudents();
  totaInstructors.innerHTML = countInstructors();
  totatDepartments.innerHTML = 7 ;


const percentageOfStudents = document.querySelector('#inStd');
const percentageOfCourses = document.querySelector('#inCrs');
const percentageOfInstructors = document.querySelector('#inIns');
const percentageOfDepartment = document.querySelector('#inDt');


percentageOfStudents.innerHTML = 0/countStudents();

percentageOfCourses.innerHTML = 0/countCourses();

percentageOfInstructors.innerHTML = 0/countInstructors();


percentageOfDepartment.innerHTML = 7-7;


window.addEventListener("load", () => {
  document.getElementById("loader").style.opacity = 0;
  setTimeout(() => document.getElementById("loader").style.display = "none", 500);
});
















