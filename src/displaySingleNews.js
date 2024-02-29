import setupPaginationButtons from "./setupPaginationButtons.js";
import displayAllNews from "./displayAllNews.js";
import setStorage from "./setStorage.js";


const displaySingleNews = (news) => {
    let newsPerPage = 9;
    const categoriesList = [...document.querySelectorAll(".categories-item a")];
    categoriesList.forEach(category => {
        category.addEventListener("click", () => {
            const listItems = category.textContent.toLowerCase();
            const matchingCategories = news.filter(newsItem => newsItem.title.toLowerCase() === listItems);
            if (matchingCategories && matchingCategories.length > 0) {
                displayAllNews(matchingCategories.slice(0, newsPerPage));
                setupPaginationButtons(matchingCategories.length, matchingCategories);
                setStorage(matchingCategories);
            }
            else {
                displayAllNews(news.slice(0, newsPerPage));
                setupPaginationButtons(news.length, news)
            }
        });
    })
}

const domFirstLoad = (news) => {
    window.addEventListener('DOMContentLoaded', () => {
        displayAllNews(news.slice(0, newsPerPage));
        setupPaginationButtons(news.length, news)
    })
}


export { displaySingleNews, domFirstLoad } 
