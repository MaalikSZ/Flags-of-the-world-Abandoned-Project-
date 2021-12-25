export class Ui{
    constructor(){

    }
    createCard(parent, before){
        const card = document.createElement('div');
        const cardFlag = document.createElement('div');
        const cardAnswers = document.createElement('div');
        const cardAnswersInput = document.createElement('input');
        card.classList.add('card');
        cardFlag.classList.add('card__flag');
        cardAnswers.classList.add('card__answers');
        cardAnswersInput.classList.add('card__answers__input');

        cardAnswers.appendChild(cardAnswersInput);
        card.appendChild(cardFlag);
        card.appendChild(cardAnswers);
        parent.insertBefore(card, before);
        return card;
    }
    insertFlag(parent, country){
        const img = document.createElement('img');
        img.src = country.flags.png;
        img.alt = country.name.common.toLowerCase();
        parent.appendChild(img);
    }
}