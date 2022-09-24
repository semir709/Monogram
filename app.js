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

    nav_item.classList.add('show_menu');
    filter.classList.add('filter_show');

});

const close_btn = document.querySelector('#close-btn');

close_btn.addEventListener('click', (e) => {

    nav_item.classList.remove('show_menu');
    filter.classList.remove('filter_show');

});

filter.addEventListener('click', (e) => {

    nav_item.classList.remove('show_menu');
    filter.classList.remove('filter_show');
});


/*bag shop event*/

const shop_menu_holder = document.querySelector('#shop-menu-holder');
const bag_shop = document.querySelector('#bag-shop');
const close_btn_shop = document.querySelector('#shop-head-close');

bag_shop.addEventListener('click', (e) => {

    shop_menu_holder.classList.add('show_menu');
    filter.classList.add('filter_show');

});

close_btn_shop.addEventListener('click', (e) => {

    shop_menu_holder.classList.remove('show_menu');
    filter.classList.remove('filter_show');
    
});

const gift_card = document.querySelector('#gift-card');
const gift_btn = document.querySelector('#gift-buttons');

const chekout_btn = document.querySelector('#chekout-btn');
const checkout_input = document.querySelector('#chekout-input');

const gift_cancle = gift_btn.querySelector('a:last-child');

gift_card.addEventListener('click', (e) => {

    gift_btn.style.display = 'flex';
    e.target.style.display = 'none';

    checkout_input.style.display = 'block';
    chekout_btn.style.display = 'none';

});

gift_cancle.addEventListener('click', (e) => {

    gift_btn.style.display = 'none';
    gift_card.style.display = 'block';

    checkout_input.style.display = 'none';
    chekout_btn.style.display = 'block';

});
