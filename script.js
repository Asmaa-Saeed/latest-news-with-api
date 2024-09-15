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
    articles.forEach((articles) => {
        console.log(articles);
    });
}

window.onload = fetchNews;