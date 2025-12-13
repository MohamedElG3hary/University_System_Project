// ../JS/Student_Dashboard.js

document.addEventListener("DOMContentLoaded", function () {
    // 1) زرار "View Full Profile" يفتح صفحة البروفايل
    const viewProfileBtn = document.querySelector(".btn-full-profile");
    if (viewProfileBtn) {
        viewProfileBtn.addEventListener("click", function () {
            // غيري اسم الملف لو مختلف
            window.location.href = "Profile.html";
        });
    }

    // 2) زرار "Register for Courses" يفتح صفحة الكورس ريجستريشن
    const registerCoursesBtn = document.querySelector(".btn-register");
    if (registerCoursesBtn) {
        registerCoursesBtn.addEventListener("click", function () {
            // غيري اسم الملف لو مختلف
            window.location.href = "Course_Registration.html";
        });
    }

    // 3) تفعيل العنصر الـ active في الـ sidebar حسب الصفحة الحالية
    const navItems = document.querySelectorAll(".sidebar nav ul li");
    const currentPage = window.location.pathname.split("/").pop() || "Student_Dashboard.html";

    navItems.forEach(function (li) {
        const link = li.querySelector("a");
        if (!link) return;

        const href = link.getAttribute("href");

        // لو اللينك فاضي أو مجرد # مش هنعتبره صفحة
        if (!href || href === "#") return;

        // لو اسم الصفحة في اللينك هو نفس اسم الصفحة الحالية
        if (href === currentPage) {
            li.classList.add("active");
        } else {
            li.classList.remove("active");
        }
    });
});
