import changePage from "./changePage.js";

const setupPaginationButtons = (totalItems, news) => {
    let newsPerPage = 9;
    const paginationButtons = document.querySelector(".pagination-container");

    const totalPages = Math.ceil(totalItems / newsPerPage);
    console.log(totalPages)
    let newContent = "";
    for (let i = 1; i <= totalPages; i++) {
        newContent += `<button class="btn" data-page="${i}">${i}</button>`;
    }
    paginationButtons.innerHTML = newContent;

    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener("click", e => {
            const pageNumber = parseInt(e.target.dataset.page);
            changePage(pageNumber, news);

            Object.entries(btns).forEach(([key, value]) => {
                if (value.textContent != pageNumber) {
                    value.classList.remove("active");
                }
                else {
                    value.classList.add("active");
                }
            })
        });
    });
    if (btns.length >= 2) {
        btns[0].classList.add("active");
        changePage(1, news);
    }
};

export default setupPaginationButtons;
