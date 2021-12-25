import { Ui } from "./Ui.js";
import { CountryHandling } from './CountryHandling.js';
export async function main() {
    let score = 0;
    let countOfCountry = 0;
    const ui = new Ui();
    const container = document.querySelector('.container');
    let selectedFilter = document.querySelector(
        '.continent__select>option:checked'
    ).value;
    const countryHandling = new CountryHandling();
    const nextBtn = document.querySelector('.next');
    if(selectedFilter !== 'all'){
        selectedFilter = `region/${selectedFilter}`
    }
    countryHandling
        .returnRequest(`https://restcountries.com/v3.1/${selectedFilter}`)
        .then((result) => {
            const firstLength = result.length;
            countOfCountry = result.length;
            console.log(countOfCountry);
            for (let i = result.length; i > 0; i--) {
                const randNumber = Math.floor(Math.random() * i);
                const card = ui.createCard(
                    container,
                    document.querySelector('.next')
                );
                ui.insertFlag(card.children[0], result[randNumber]);
                result.splice(randNumber, 1);
                if (firstLength - i > 0) {
                    card.classList.add('d-none');
                }
                else{
                    card.classList.add('active');
                }
            }
            nextBtn.parentNode.removeChild(nextBtn);
            const copyNextBtn = document.createElement('div');
            copyNextBtn.classList.add('next');
            copyNextBtn.innerHTML = '<button>Next</button>';
            document.querySelector('.container').appendChild(copyNextBtn);
            copyNextBtn.addEventListener('click', () => {
                //kolejna flaga
                if(document.querySelector('.card__answers__input').value.length > 0){
                    console.log(countOfCountry);
                    const active = document.querySelector('.active');
                    if(document.querySelector('.card__answers__input').value.toLowerCase() === document.querySelector('.active > .card__flag > img').alt){
                        document.querySelector('.score').textContent = `${score += 1}/${countOfCountry}`;
                    }
                    active.parentNode.removeChild(active);
                    const next = document.querySelector('.card');
                    next.classList.remove('d-none');
                    next.classList.add('active');
                }
            }, false);
        });
}