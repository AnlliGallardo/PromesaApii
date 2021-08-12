const API_URL = "https://rickandmortyapi.com/api/character"
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const getCards = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
    showCards(data.results)
}

function showCards (cards){
    main.innerHTML = ''
    cards.forEach((cards) =>{
        const {image, name, species} = cards
        const cardsElement = document.createElement('div')
        cardsElement.classList.add('cards')
        cardsElement.innerHTML = `
        <img src="${image}" alt=""/>
        <div class="cards-info">
            <h3>${name}</h3>
           <h3>${species}</h3>
        `
        main.appendChild(cardsElement)
    }) 
}


getCards(API_URL)