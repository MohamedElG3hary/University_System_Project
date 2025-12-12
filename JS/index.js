function togglePassword() {
    if (password.type === "password") {
        password.type = "text";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    } else {
        password.type = "password";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    }
}

const path = "usersData.json";




function login(user , password) {
    if (user.value === '' || password.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        return;
    }

    
    fetch(path)
        .then(res => res.json())
        .then(data => {

            let found = data.users.find(u =>
                u.username === user.value && u.password === password.value
            );

            if (found) {
                alert("Welcome " + user.value + "\nLogin Successfully");

                user.value = '';
                password.value = '';

                window.location.href = "../pages/Admin_Dashboard.html";
            }
            else {
                msg.classList.add('error');
                msg.innerHTML = 'Invalid username or password';
            }

        })
        .catch(err => {
            console.log("Error: ", err);
        });
}

var user = document.querySelector('#user');
var password = document.getElementById("passwordInput");
var toggleIcon = document.getElementById("toggleIcon");
var btn = document.querySelector(".login-btn");
var msg = document.querySelector('#msg');

toggleIcon.addEventListener("click", togglePassword);

btn.addEventListener("click", ()=>login(user,password));
