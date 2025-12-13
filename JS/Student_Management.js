function add() {
        window.location.href = "../pages/Add_Student.html";
}
function edit(btn) {
    const studentCard = btn.closest(".student-card");
    const studentIdText = studentCard.querySelector(".student-id").textContent;
    const studentId = studentIdText.replace("ID : ", "").trim();

    alert("Edit Student ID: " + studentId);
}

function msgDelete(btn) {
    const studentCard = btn.closest(".student-card");
    const studentIdText = studentCard.querySelector(".student-id").textContent;
    const studentId = studentIdText.replace("ID : ", "").trim();

    const confirmDelete = confirm("Do you want to delete student ID: " + studentId + " ?");
    if (confirmDelete) {
        alert("Student Deleted: " + studentId);
        studentCard.remove();
    }
}

function deleteSTD(button) {
    button.addEventListener("click", () => msgDelete(button));
}

const addBtn = document.querySelector("#addbtn");
if (addBtn) {
    addBtn.addEventListener("click", () => add());
}

const editButtons = document.querySelectorAll('#edit'); 
editButtons.forEach(function (button) {
    button.addEventListener("click", () => edit(button));
});

const deleteButtons = document.querySelectorAll('#delete');

deleteButtons.forEach(deleteSTD);