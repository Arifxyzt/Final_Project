const planetsData = [
    { name: 'Kepler-186f', info: 'İlk potansiyel yaşam barındıran gezegen.' },
    { name: 'Proxima Centauri b', info: 'Yıldızına en yakın gezegen.' },
    { name: 'TRAPPIST-1e', info: 'Su bulma ihtimali yüksek gezegen.' },
    { name: 'LHS 1140 b', info: 'Taşınabilir bir atmosfere sahip olabilir.' },
    { name: 'HD 209458 b', info: 'Hava koşulları oldukça ilginç.' }
];

// Kartların iki kopyasını oluşturalım ve karıştıralım
let cards = [...planetsData, ...planetsData]; // Her karttan iki tane
let timeLeft = 60;
let score = 0;
let flippedCards = [];
let matchedPairs = 0;

const planetsContainer = document.getElementById('planets');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');
const resultDisplay = document.getElementById('result');
const startButton = document.getElementById('start-button');

// Kartları karıştırmak için
function shuffleCards(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createPlanets() {
    planetsContainer.innerHTML = '';
    shuffledCards = shuffleCards(cards);
    
    shuffledCards.forEach((planet, index) => {
        const planetDiv = document.createElement('div');
        planetDiv.className = 'planet';
        planetDiv.dataset.name = planet.name;
        planetDiv.dataset.index = index;
        planetDiv.addEventListener('click', () => flipCard(planet, planetDiv));
        planetsContainer.appendChild(planetDiv);
    });
}

function flipCard(planet, planetDiv) {
    if (flippedCards.length < 2 && !planetDiv.classList.contains('flipped')) {
        planetDiv.classList.add('flipped');
        planetDiv.innerText = planet.name;
        flippedCards.push({ planet, element: planetDiv });
        
        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.planet.name === card2.planet.name) {
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');
        score += 10;
        matchedPairs++;
        
        // Oyuncu tüm eşleşmeleri bulduysa oyunu bitir
        if (matchedPairs === planetsData.length) {
            endGame(true);
        }
    } else {
        setTimeout(() => {
            card1.element.classList.remove('flipped');
            card2.element.classList.remove('flipped');
            card1.element.innerText = '';
            card2.element.innerText = '';
        }, 1000);
    }
    
    scoreDisplay.innerText = score;
    flippedCards = [];
}

function startGame() {
    createPlanets();
    score = 0;
    matchedPairs = 0;
    scoreDisplay.innerText = score;
    timeLeft = 60;
    timeDisplay.innerText = timeLeft;
    resultDisplay.innerText = '';

    const countdown = setInterval(() => {
        timeLeft--;
        timeDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            endGame(false);
        }
    }, 1000);
}

function endGame(won) {
    planetsContainer.innerHTML = '';
    resultDisplay.innerText = won
        ? `Tebrikler! Tüm eşleşmeleri buldunuz. Puanınız: ${score}`
        : `Oyun Bitti! Puanınız: ${score}`;
}

startButton.addEventListener('click', startGame);
