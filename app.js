import fetchData from "./src/fetchData.js";
import displayAllNews from "./src/displayAllNews.js";
import setupPaginationButtons from "./src/setupPaginationButtons.js";
import updateSlider from "./src/slider.js";
import { domFirstLoad, displaySingleNews } from "./src/displaySingleNews.js";
import setStorage from "./src/setStorage.js";


window.addEventListener("DOMContentLoaded", async () => {
    const news = await fetchData();
    domFirstLoad(news);
    displaySingleNews(news);
    displayAllNews(news.slice(0, 9));
    setupPaginationButtons(news.length, news);
    setStorage(news, setupPaginationButtons)

    let currentIndex = 0;
    updateSlider(news[currentIndex]);
    setInterval(() => {
        currentIndex = (currentIndex + 1) % 10;
        updateSlider(news[currentIndex]);
    }, 3000);
    setStorage(news)

});

const modalClose = document.querySelector(".close")
const modalContainer = document.querySelector(".modal-container")


modalClose.addEventListener("click", () => {
    modalContainer.style.display = "none"
    localStorage.removeItem("data-id");

})


