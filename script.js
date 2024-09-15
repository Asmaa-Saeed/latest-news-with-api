const apiKey  = "153e7a87a2794f2a91e09e2cd8da0abc";

const pageSize = 50;


function fetchNews () {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${pageSize}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
    // console.log(data);
    // console.log(data.articles);
    displayNews(data.articles);
    })
    .catch(error => console.log(error));
}

function displayNews(articles) {
    const newsList = document.querySelector(".news-list");
    newsList.innerHTML = "";
    articles.forEach((article) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <div class="info">
        <div class="author">
        <span>Authgtior: </span>
        ${article.author || "Unknown"}
        </div>
        <div class="published-at">${new Date(article.publishedAt).toLocaleDateString()}</div>
        </div>
        <img src="${article.urlToImage}" alt="${article.title}">
        <a class="title" href="${article.url}" target="_blank">${article.title}</a>
        <p class="description">${article.description} || "No Description"</p>
        <div class="source">
        <span>[source]</span>
        ${article.source.name}</div>`;
        newsList.appendChild(listItem);
    });
}

window.onload = fetchNews;