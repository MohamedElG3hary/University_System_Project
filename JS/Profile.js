// ../JS/Profile.js
document.addEventListener("DOMContentLoaded", () => {
    // =========================
    // 1) Sidebar Active Auto
    // =========================
    const links = document.querySelectorAll(".sidebar nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach((link) => {
        const li = link.parentElement;
        const href = link.getAttribute("href");

        if (href === currentPage) li.classList.add("active");
        else li.classList.remove("active");
    });

    // =========================
    // 2) Show registered courses count (from localStorage)
    // =========================
    const STORAGE_KEY = "registeredCourses"; // نفس المفتاح بتاع Course Registration
    const countEl = document.getElementById("registeredCount");

    function getRegisteredCourses() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    }

    if (countEl) {
        const registered = getRegisteredCourses();

        if (registered.length === 0) {
            countEl.textContent = "No registered courses yet.";
        } else if (registered.length === 1) {
            countEl.textContent = "You have 1 registered course.";
        } else {
            countEl.textContent = `You have ${registered.length} registered courses.`;
        }
    }
});
