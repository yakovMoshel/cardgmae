// הגדרת המשתנים והקריאה לפונקציות:
let one= 'url(https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg?auto=compress&cs=tinysrgb&w=600)'
let two='url(https://images.pexels.com/photos/13437259/pexels-photo-13437259.jpeg?auto=compress&cs=tinysrgb&w=600)'
let three='url(https://images.pexels.com/photos/111766/pexels-photo-111766.jpeg?auto=compress&cs=tinysrgb&w=800)'
let Four='url(https://media.istockphoto.com/id/622518394/photo/control-the-car.jpg?b=1&s=612x612&w=0&k=20&c=V42dabaNi9i-qhhQo1RvP3lOq0A8vLhgGFLGiPQ9uSI=)'
let five='url(https://images.pexels.com/photos/1987102/pexels-photo-1987102.jpeg?auto=compress&cs=tinysrgb&w=300)'

let playingcards = [one, two, three, Four, five];

let game = playingcards.concat(playingcards);

// mixing1 - ערבוב רנדומלי:
function mixing1(arryToMix) {
    const result = arryToMix.sort(() => 0.5 - Math.random());
    return result;
}
let afterRandom = mixing1(game);
console.log(afterRandom);

// createCards - יצירת קלפים ב-HTML:

let openedCards = [];
function createCards() {
    let boardelement = document.getElementsByClassName("board-card")[0];

    afterRandom.forEach((cardValue) => {
        let cardelement = document.createElement("div");
        cardelement.classList.add('card');
        boardelement.appendChild(cardelement)
        cardelement.value = cardValue;
        cardelement.innerHTML = ` `;
        
        cardelement.onclick = (e) => {
            if (openedCards.length < 2) {
                e.target.innerHTML = cardValue;
                openedCards.push(e.target)
            }
            
            if(openedCards.length === 2) {
                if (openedCards[0].value == openedCards[1].value) {
                    alert("עבודה יפה");
                    openedCards = [];
                }
                
                else{
                    setTimeout(() => {
                        openedCards.forEach(card => {
                            card.innerText = '';
                        });
                    }, 1000);
                    
                    alert("נחש אותי נחש");
                    openedCards = []
                }
            }
        };
        boardelement.appendChild(cardelement);
    });
}

// init - רץ את המשחק:
function init() {
    createCards()
}

init();






// stars = cardsToSwitchToStars(afterRandom);
// getIndex - בקשה למספר מהמשתמש:
// function getIndex() {
//     return Number(prompt("Please choose a number between 1-10")) - 1;
// }

// checkIfEqual - בדיקה אם ערכים שווים:
// function checkIfEqual(valueA, valueB) {
//     return valueA === valueB;
// }

// cardsToSwitchToStars - יצירת מערך כוכביות:
// function cardsToSwitchToStars(arrToSwitch) {
//     return '*'.repeat(arrToSwitch.length).split('');
// }

// function backcard(cardValue) {
    // afterRandom.forEach((cardValue)=>{
        // let backCard=document.createElement("div");
        // backCard.id=('backcard')
        // boardelement.appendChild(backCard)
        // backCard.innerHTML = ` `;
//     })
    
// }

// let stars = cardsToSwitchToStars(afterRandom);

// while (!checkIfEqual(stars.toString(), afterRandom.toString())) {
    //     let card1 = getIndex();
    //     stars[card1] = afterRandom[card1];
    
    //     let card2 = getIndex();
    //     stars[card2] = afterRandom[card2];
    
    //     const isEqual = checkIfEqual(afterRandom[card1], afterRandom[card2]);
    
    //     if (!isEqual) {
        //         stars[card1] = "*";
        //         stars[card2] = "*";
        //     } else {
            //         console.log(stars);
            //     }
            // }