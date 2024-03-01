const accessKey = "uYN4avswUHVppieacekj95LqYY7dKU205Fkisk5GB5s";
const searchForm = document.getElementById('search');
const searchBar = document.getElementById('search-bar');
const searchResult = document.getElementById('result');
const showmoreBtn = document.getElementById('more');

let keyword = "";
let page = 1;
async function searchImage() {
    keyword = searchBar.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=15`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }


    const results = data.results;
    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.regular;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.self;
        imageLink.traget = '_blank';
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showmoreBtn.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})
showmoreBtn.addEventListener('click', () => {
    page++;
    searchImage();
})