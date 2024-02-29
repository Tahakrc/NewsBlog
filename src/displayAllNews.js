import fetchData from "./fetchData.js";


const displayAllNews = (news) => {
    console.log(news);
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = ""

    let newContent = ""
    news.forEach(item => {
        newContent += `
    <div class="card">
    <div class="card-images">
        <img src="${item.image}" alt="" data-id = "${item.id}">
    </div>
    <h4 class="card-header">
      ${item.header}
    </h4>
    <p class="card-content">
        ${item.description}
    </p>
    <button class="readmore-btn" data-id="${item.id}">
            <p data-id="${item.id}">Devamını Oku</p>
            <i class="fa fa-arrow-right" aria-hidden="true"  data-id="${item.id}"></i>
    </button>
</div>
    `
    });
    cardContainer.innerHTML = newContent;
}


export default displayAllNews;