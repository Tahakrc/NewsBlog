import displayAllNews from "./displayAllNews.js";
import setStorage from "./setStorage.js";

const changePage = (pageNumber, news) => {
    let newsPerPage = 9;
    const start = (pageNumber - 1) * newsPerPage;
    const end = start + newsPerPage;
    const newsToShow = news.slice(start, end);

    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    displayAllNews(newsToShow);
    setStorage(newsToShow)

};;

export default changePage;
