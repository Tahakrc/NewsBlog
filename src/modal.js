import setStorage from "./setStorage.js"


const modalCase = (news) => {

    setStorage()
    const storageId = localStorage.getItem("data-id")

    const modalHeader = document.querySelector(".modal-header")
    const modalImg = document.querySelector(".modal-img")
    const modalContent = document.querySelector(".modal-content p")
    const modalCenter = document.querySelector(".modal-center")
    const matchingStorage = news.find(news => news.id === storageId)
    console.log(matchingStorage)


    let newContent = ""
    if (matchingStorage) {
        newContent += `<h1 class="modal-header">${matchingStorage.header}</h1>
         <div class="modal-content">
             <img class="modal-img" src="${matchingStorage.image}" alt="">
             <p>${matchingStorage.description} </p>
             </p>
         </div>

         `

    }
    modalCenter.innerHTML = newContent;


}
export default modalCase