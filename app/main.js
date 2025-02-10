let books = [];

const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
fetchData()

async function fetchData() {
    const res = await fetch(url);
    books = await res.json();
    let discountOnBooks = applyDiscount(books)
    displayOnScreen(discountOnBooks);
}










