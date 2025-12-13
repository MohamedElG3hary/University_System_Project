// ../JS/History.js
document.addEventListener("DOMContentLoaded", () => {

    // ===== Sidebar Active =====
    const links = document.querySelectorAll(".sidebar nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const li = link.parentElement;
        const href = link.getAttribute("href");

        if (href === currentPage) {
            li.classList.add("active");
        } else {
            li.classList.remove("active");
        }
    });

});
