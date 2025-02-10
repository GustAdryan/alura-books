let orderByPriceBtn = document.getElementById('btnOrdenarPorPreco');

orderByPriceBtn.addEventListener('click', orderByPrice);

function orderByPrice() {
    let orderedBooks = books.sort((a, b) => a.preco - b.preco)

    displayOnScreen(orderedBooks)
}




















