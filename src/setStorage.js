import modalCase from "./modal.js"
const setStorage = (news) => {
    const buttons = document.querySelectorAll(".readmore-btn")
    buttons.forEach(btn => {
        btn.addEventListener("click", e => {
            const targetBtn = e.currentTarget.dataset.id

            localStorage.setItem("data-id", targetBtn)


            const modalContainer = document.querySelector(".modal-container")
            const sectionContainer = document.querySelector(".section-center")

            modalContainer.style.display = "block"
            modalCase(news)
        })
    })
}

export default setStorage;