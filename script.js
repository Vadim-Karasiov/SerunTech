'use strict'

const main = document.querySelector('main');
const sendwichBtn = document.querySelector('.sendwichBtn');
const sendwich = document.querySelector('.sendwich');
const tableMain = document.querySelector('.table-main');
const washBtn = document.querySelector('.wash');
const boilBtn = document.querySelector('.boil');
const pumpBtn = document.querySelector('.pump');

sendwichBtn.addEventListener('click', () => {
    if (!sendwich.classList.contains ('sendwichOn')) {
        sendwich.classList.add('sendwichOn');
        sendwich.classList.remove('sendwichOff');
    } else {
        sendwich.classList.remove('sendwichOn');
        sendwich.classList.add('sendwichOff');
    }
});

main.addEventListener('click', () => {
    sendwich.classList.remove('sendwichOn');
    sendwich.classList.add('sendwichOff');
});

washBtn.addEventListener('click', () => {
    washBtn.classList.add('active');
    boilBtn.classList.remove('active');
    pumpBtn.classList.remove('active');
    tableMain.innerHTML = `<div class="table-1_collumn">Подключение к электросети</div>
    <div class="table-2_collumn">200</div>
    <div class="table-3_collumn">Зависит от электросети</div>

    <div class="table-1_collumn blue-row">Подключение к электросети</div>
    <div class="table-2_collumn blue-row">200</div>
    <div class="table-3_collumn blue-row">Зависит от электросети</div>

    <div class="table-1_collumn">Подключение к электросети</div>
    <div class="table-2_collumn">200</div>
    <div class="table-3_collumn">Зависит от электросети</div>

    <div class="table-1_collumn blue-row">Подключение к электросети</div>
    <div class="table-2_collumn blue-row">200</div>
    <div class="table-3_collumn blue-row">Зависит от электросети</div>
    
    <div class="table-1_collumn">Подключение к электросети</div>
    <div class="table-2_collumn">200</div>
    <div class="table-3_collumn">Зависит от электросети</div>
    
    <div class="table-1_collumn blue-row">Подключение к электросети</div>
    <div class="table-2_collumn blue-row">200</div>
    <div class="table-3_collumn blue-row">Зависит от электросети</div>`;
});

boilBtn.addEventListener('click', () => {
    washBtn.classList.remove('active');
    boilBtn.classList.add('active');
    pumpBtn.classList.remove('active');
    tableMain.innerHTML = `<div class="table-1_collumn">Нагреть водонагреватель</div> <div class="table-2_collumn">200</div> <div class="table-3_collumn">Зависит от воды</div> <div class="table-1_collumn blue-row">Подключение к электросети</div> <div class="table-2_collumn blue-row">200</div> <div class="table-3_collumn blue-row">Зависит от электросети</div>`;
});

pumpBtn.addEventListener('click', () => {
    washBtn.classList.remove('active');
    boilBtn.classList.remove('active');
    pumpBtn.classList.add('active');
    tableMain.innerHTML = `<div class="table-1_collumn">Насосать на станцию</div> <div class="table-2_collumn">100500</div> <div class="table-3_collumn">Зависит от воды</div> <div class="table-1_collumn blue-row">Подключение к электросети</div> <div class="table-2_collumn blue-row">200</div> <div class="table-3_collumn blue-row">Зависит от электросети</div>`;
});
