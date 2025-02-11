const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.addEventListener('click', filterBooks));

function filterBooks() {
    const elementBtn = document.getElementById(this.id);
    const category = elementBtn.value;

    let filteredBooks = category == 'disponivel' ? filterByAvailability() : filterByCategory(category);

    displayOnScreen(filteredBooks);

    if(category == 'disponivel') {
        const totalValue = calculateTotalValue(filteredBooks).toFixed(2);
        displayTotalPriceBooks(totalValue);
    }
}

function filterByCategory(category) {
    return books.filter(book => book.categoria == category);
}

function filterByAvailability() {
    return books.filter(book => book.quantidade > 0);
}

function displayTotalPriceBooks(totalValue) {
    totalValueBooksElement.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
        </div>
    `;
}

function calculateTotalValue(books) {
    return books.reduce((acc, book) => acc + book.preco, 0);
}











































function filterByAvailability() {
    return books.filter(book => book.quantidade > 0);
}

