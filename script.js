'use strict'

const tableMain = document.querySelector('.table-main');

const washBtn = document.querySelector('.wash');
const boilBtn = document.querySelector('.boil');
const pumpBtn = document.querySelector('.pump');

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
})

boilBtn.addEventListener('click', () => {
    washBtn.classList.remove('active');
    boilBtn.classList.add('active');
    pumpBtn.classList.remove('active');
    tableMain.innerHTML = `<div class="table-1_collumn">Нагреть водонагреватель</div> <div class="table-2_collumn">200</div> <div class="table-3_collumn">Зависит от воды</div> <div class="table-1_collumn blue-row">Подключение к электросети</div> <div class="table-2_collumn blue-row">200</div> <div class="table-3_collumn blue-row">Зависит от электросети</div>`;
})

pumpBtn.addEventListener('click', () => {
    washBtn.classList.remove('active');
    boilBtn.classList.remove('active');
    pumpBtn.classList.add('active');
    tableMain.innerHTML = `<div class="table-1_collumn">Насосать на станцию</div> <div class="table-2_collumn">100500</div> <div class="table-3_collumn">Зависит от воды</div> <div class="table-1_collumn blue-row">Подключение к электросети</div> <div class="table-2_collumn blue-row">200</div> <div class="table-3_collumn blue-row">Зависит от электросети</div>`;
})


// const closestElement = tableMain.closest('.table-main'); //null – ни элемент ни родители не подходят 
// const closestElement2 = tableMain.closest('#table-main'); //<li id="li-item">item-2</li> - совпал
// const closestElement3 = tableMain.closest('div'); //<ul>…</ul> - родитель подошел

// console.log('[closestElement]', closestElement);
// console.log('[closestElement2]', closestElement2);
// console.log('[closestElement3]', closestElement3);

// console.log('[clickedItem.nodeType]', clickedItem.nodeType);
// console.log('[clickedItem.nodeName]', clickedItem.nodeName);
// console.log('[clickedItem.tagName]', clickedItem.tagName);




// const boilers = document.createElement('div');
// boilers.setAttribute('class', 'table-main');
// boilers.innerHTML = `<div class="table-1_collumn">Нагреть водонагреватель</div> <div class="table-2_collumn">200</div> <div class="table-3_collumn">Зависит от воды</div> <div class="table-1_collumn blue-row">Подключение к электросети</div> <div class="table-2_collumn blue-row">200</div> <div class="table-3_collumn blue-row">Зависит от электросети</div>`;

// const pump = document.createElement('div');
// pump.setAttribute('class', 'table-main');
// pump.innerHTML = `<div class="table-1_collumn">Насосать на станцию</div> <div class="table-2_collumn">100500</div> <div class="table-3_collumn">Зависит от воды</div> <div class="table-1_collumn blue-row">Подключение к электросети</div> <div class="table-2_collumn blue-row">200</div> <div class="table-3_collumn blue-row">Зависит от электросети</div>`;

