import { main } from './main.js'
const continentSelect = document.querySelector('.continent__select');
continentSelect.addEventListener('change', ()=>{
    document.querySelectorAll('.card').forEach(element =>{
        element.parentNode.removeChild(element);
    })
    main();
}, false);
main();
