let livros = [];

const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
searchData()
const containerBooks = document.querySelector('#livros');

async function searchData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    displayOnScreen(data);
}

function displayOnScreen(bookLis) {
    bookLis.forEach(book => {
        containerBooks.innerHTML += `
            <div class="livro">
                <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="livro__titulo">
                    ${book.titulo}
                </h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">R$${book.preco}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        
        `
    });
}









