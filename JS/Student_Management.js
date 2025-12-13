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


window.addEventListener('DOMContentLoaded', () => {
    const studentsList = document.querySelector('.students-list');

    const students = JSON.parse(localStorage.getItem('students') || '[]');

    students.forEach(student => {
        const card = document.createElement('div');
        card.classList.add('student-card');
        card.innerHTML = `
            <div class="card-top">
                <div class="student-info">
                    <div class="avatar-circle">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="info-text">
                        <h3>${student.name}</h3>
                        <span class="student-id">ID : ${student.id}</span>
                    </div>
                </div>
                <div class="card-actions">
                    <i class="fa-solid fa-pen icon-edit" id="edit" ></i>
                    <i class="fa-solid fa-trash icon-delete" id="edit" ></i>
                </div>
            </div>
            <div class="card-divider"></div>
            <div class="card-details">
                <div class="detail-item">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <span>${student.major}</span>
                </div>
                <div class="detail-item">
                    <i class="fa-regular fa-envelope"></i>
                    <span>${student.name.replace(/\s+/g, '')}@university.edu</span>
                </div>
                <div class="detail-item">
                    <i class="fa-solid fa-circle-notch"></i>
                    <span>${student.level}</span>
                </div>
            </div>
        `;
        studentsList.appendChild(card);
    });
});
