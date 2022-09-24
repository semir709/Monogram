const dropdown_btn = document.querySelectorAll('.dropdown-button');



/*dropdown event*/
dropdown_btn.forEach(el => {

    el.addEventListener('click', (e) => {

        const item_list = e.target.closest('.dropdown-holder').querySelector('.item-list');
        const item_selected = e.target.closest('.dropdown-holder').querySelector('.dropdown-button');

        item_selected.classList.toggle('focus');
        item_list.classList.toggle('show');

    });

});


/*select currency*/
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




/*mobile menu event*/

const menu_btn = document.querySelector('#menu-btn');
const nav_item = document.querySelector('#nav-item');
const filter = document.querySelector('#filter');

menu_btn.addEventListener('click', (e) => {

    nav_item.classList.add('show_menu_mobile');
    filter.classList.add('filter_show');

});

const close_btn = document.querySelector('#close-btn');

close_btn.addEventListener('click', (e) => {

    nav_item.classList.remove('show_menu_mobile');
    filter.classList.remove('filter_show');

});

filter.addEventListener('click', (e) => {

    nav_item.classList.remove('show_menu_mobile');
    filter.classList.remove('filter_show');
});


/*bag shop event*/
const bag_shop = document.querySelector('#bag-shop');

bag_shop.addEventListener('click', (e) => {

    

});
