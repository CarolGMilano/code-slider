let prev = document.querySelector('[data-prev]');
let next = document.querySelector('[data-next]');

let card =  document.querySelectorAll('[data-card]');
let cardAtual = 0;

function esconderCard () {
    let cardSelecionado = document.querySelector('[data-flex]');
    
    cardSelecionado.removeAttribute('data-fadein', '');
    cardSelecionado.setAttribute('data-fadeout', '');
    
    setTimeout(() => {
        cardSelecionado.removeAttribute('data-flex', '');
        cardSelecionado.setAttribute('data-none', '');
    }, 300)
}

function aparecerCard (indice) {
    card[indice].setAttribute('data-flex', '');
    card[indice].removeAttribute('data-none', '');
    
    setTimeout(() => {
        card[indice].setAttribute('data-fadein', '');
        card[indice].removeAttribute('data-fadeout', '');
    }, 300) 
    
}

prev.addEventListener('click', function () {
    if (cardAtual === 0) {
        esconderCard();
        cardAtual = card.length - 1;
        setTimeout(aparecerCard, 300, cardAtual);
    } else {
        esconderCard();
        cardAtual--;
        setTimeout(aparecerCard, 300, cardAtual);
    }
}) 

next.addEventListener('click', function () {
    if (cardAtual === card.length - 1) {
        esconderCard();
        cardAtual = 0;
        setTimeout(aparecerCard, 300, cardAtual);
    } else {
        esconderCard();
        cardAtual++;
        setTimeout(aparecerCard, 300, cardAtual);
    }
})