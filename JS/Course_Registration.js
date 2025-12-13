// ../JS/Course_Registration.js
document.addEventListener("DOMContentLoaded", () => {
    // ====== Config (جاهز للتغيير لما يبقى في Backend) ======
    const STORAGE_KEY = "registeredCourses"; // لاحقًا هنستبدله بـ API

    // ====== Elements ======
    const coursesList = document.querySelector(".courses-list");
    const searchInput = document.getElementById("searchInput");
    const courseCards = Array.from(document.querySelectorAll(".course-card"));

    // Safety checks
    if (!coursesList) return;

    // ====== Storage Layer (دلوقتي LocalStorage - لاحقًا API) ======
    function getRegisteredSet() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const arr = raw ? JSON.parse(raw) : [];
            return new Set(arr);
        } catch {
            return new Set();
        }
    }

    function saveRegisteredSet(set) {
        const arr = Array.from(set);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    }

    // ====== UI Builders ======
    function registeredStateHTML() {
        return `
      <div class="action-group">
        <span class="badge-registered"><i class="fa-solid fa-check"></i> Registered</span>
        <button class="btn-unregister" type="button">&minus; Unregister</button>
      </div>
    `;
    }

    function registerButtonHTML() {
        return `
      <button class="btn-register" type="button">
        <i class="fa-solid fa-plus"></i> Register
      </button>
    `;
    }

    function setCardRegistered(card, isRegistered) {
        // يمين الكارت (زرار/حالة)
        const existingRegisterBtn = card.querySelector(".btn-register");
        const existingActionGroup = card.querySelector(".action-group");

        if (isRegistered) {
            if (existingRegisterBtn) existingRegisterBtn.outerHTML = registeredStateHTML();
            // لو كان already action-group مش محتاجين نعمل حاجة
        } else {
            if (existingActionGroup) existingActionGroup.outerHTML = registerButtonHTML();
            // لو كان already btn-register مش محتاجين نعمل حاجة
        }
    }

    function getCourseId(card) {
        return (card.dataset.courseId || "").trim();
    }

    // ====== 1) Restore saved state on load ======
    const registeredSet = getRegisteredSet();

    courseCards.forEach((card) => {
        const id = getCourseId(card);
        if (!id) return; // لازم data-course-id
        setCardRegistered(card, registeredSet.has(id));
    });

    // ====== 2) Register / Unregister (Event Delegation) ======
    coursesList.addEventListener("click", (e) => {
        const registerBtn = e.target.closest(".btn-register");
        const unregisterBtn = e.target.closest(".btn-unregister");

        // لو الضغط خارج الأزرار -> تجاهل
        if (!registerBtn && !unregisterBtn) return;

        const card = e.target.closest(".course-card");
        if (!card) return;

        const courseId = getCourseId(card);
        if (!courseId) return;

        // Register
        if (registerBtn) {
            registeredSet.add(courseId);
            saveRegisteredSet(registeredSet);
            setCardRegistered(card, true);
            return;
        }

        // Unregister
        if (unregisterBtn) {
            registeredSet.delete(courseId);
            saveRegisteredSet(registeredSet);
            setCardRegistered(card, false);
            return;
        }
    });

    // ====== 3) Search (اسم/ID/أي نص داخل الكارت) ======
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const q = searchInput.value.trim().toLowerCase();

            courseCards.forEach((card) => {
                const text = card.innerText.toLowerCase();
                // لو فاضي -> اعرض الكل
                const match = q === "" ? true : text.includes(q);
                card.style.display = match ? "flex" : "none";
            });
        });
    }
});
