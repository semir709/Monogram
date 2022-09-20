const dropdown_btn = document.querySelectorAll('.dropdown-button');


dropdown_btn.forEach(el => {

    el.addEventListener('click', (e) => {

        const item_list = e.target.closest('.dropdown-holder').querySelector('.item-list');
        const item_selected = e.target.closest('.dropdown-holder').querySelector('.dropdown-button');

        item_selected.classList.toggle('focus');
        item_list.classList.toggle('dropDown_show');

    });

});

const currency_dropdown = document.querySelector('.currency-dropdown');
const allcurrencyList = currency_dropdown.querySelectorAll('li');
const currency_show = document.querySelector('#currency');

currency_dropdown.addEventListener('click', (e) => {

    allcurrencyList.forEach(el => {
        el.classList.remove('active');
    });

    const list = e.target.closest('li');

    list.classList.add('active');

    currency_show.innerHTML = list.querySelector('a').innerHTML;

});