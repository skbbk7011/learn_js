/*
* ссылка, для генерации букмарклета (вставить код ниже)
* https://compendiumdev.co.uk/apps/eviltester/bookmarklets.html
*
*
* он сгенерирует ссылку
* <a id="bookmarklet" href="javascript:(function(){ <!--вставленный код--> })()"></a>
*
* сама не запхнула свой код в этот шаблон, потому, что запуталась расставлять правильно кавычки и в одну строку все сводить, рознервничалась и закрыла.
* будет время ручками сделаю, автоформат все только портит
*
* проверила, у меня все впорядке...работает на любой странице, висит сохраненный букмарклет в закладках
* */



var newDiv = document.createElement('div');
document.body.append(newDiv);
newDiv.innerHTML = "Введите селектор:<br/><input id='counter2' class='selector' type='text' /><br/><button class=\'selector-find\'>Найти</button><button class=\'selector-next\' disabled=\'disabled\'>Следующий</button><button class=\'selector-prev\' disabled=\'disabled\'>Предыдущий</button><br/><hr/><br/>Навигация по дереву:<br/><button class=\'nav-top\' disabled=\'disabled\'>Родитель</button><br/><button class=\'nav-bottom\' disabled=\'disabled\'>Первый ребенок</button><br/><button class=\'nav-left\' disabled=\'disabled\'>Предыдущий сосед</button><br/><button class=\'nav-right\' disabled=\'disabled\'>Следующий сосед</button><br/>";
newDiv.classList.add('jsbursa-panel');
newDiv.setAttribute( 'style','z-index: 1000;position:fixed;right:25px; top:25px; width:300px;border:solid red 2px;background-color:white;padding:10px;');
var next = document.querySelector('.selector-next');
var prev = document.querySelector('.selector-prev');
var top = document.querySelector('.nav-top');
var bottom = document.querySelector('.nav-bottom');
var left = document.querySelector('.nav-left');
var right = document.querySelector('.nav-right');
function ff(){
    var findSelector = document.querySelector('.selector').value;
    return  document.getElementsByClassName(findSelector);
}
document.querySelector('.selector-find').onclick = function () {
    if(document.querySelector('._sel')){
        document.querySelector('._sel').removeAttribute('style');
        document.querySelector('._sel').classList.remove('._sel');
    }
    var findBlock = ff();
    if (findBlock.length > 1) {
        initNextBtn();
        initPrevBtn();
    }
    clearSelect ();
    select (findBlock[0]);
    initBtn(findBlock[0]);
};
function initNextBtn(){
    next.disabled=false;
    next.addEventListener('click', nextf);
}
function initPrevBtn(){
    prev.disabled=false;
    prev.addEventListener('click', prevf);
}
function disabledTopBtn(){
    prev.disabled=true;
    next.disabled=true;
    next.removeEventListener('click', nextf);
    prev.removeEventListener('click', prevf);
}
function initBtn (elem){
    if (elem.parentElement){
        top.disabled=false;
        top.addEventListener('click', topf);
    }
    if(elem.firstElementChild){
        bottom.disabled=false;
        bottom.addEventListener('click', bottomf);
    }
    if(elem.previousElementSibling){
        left.disabled=false;
        left.addEventListener('click', leftf);
    }
    if(elem.nextElementSibling){
        right.disabled=false;
        right.addEventListener('click', rightf);
    }
}
function select (el) {
    el.style='outline:solid red 5px;background-color:lightblue;';
    el.classList.add('_active');
}
function clearSelect () {
    var findBlock = ff();
    for (i=0; i<findBlock.length; i++){
        findBlock[i].removeAttribute('style');
        findBlock[i].classList.remove('_active');
    }
}

// top navigation
var count = 0;
function nextf () {
    var findBlock = ff();
    count++;
    clearSelect ();
    if (count >= 0 && count <= findBlock.length-1){
        select(findBlock[count]);
    } else if (count < 0) {
        var pCount = count*-1;
        select(findBlock[pCount]);
    } else if (count > findBlock.length-1){
        count = 0;
        select(findBlock[count]);
    }
    initBtn(findBlock[count]);
}
function prevf () {
    var findBlock = ff();
    count--;
    clearSelect ();
    if (count >= 0){
        select(findBlock[count]);
    } else if (count < 0 && count >= -(findBlock.length-1)) {
        var pCount = count*-1;
        select(findBlock[pCount]);
    } else if (count <= -(findBlock.length-1)){
        count = 0;
        select(findBlock[count]);
    }
    initBtn(findBlock[count]);
}
//tree navigation
function selectTree (el) {
    el.style='outline:solid red 5px;background-color:lightblue;';
    el.classList.add('_sel');
}
function clearSelectTree () {
    if(document.querySelector('._active')){
        var findBlock = ff();
        for (i=0; i<findBlock.length; i++){
            findBlock[i].removeAttribute('style');
        }
    }
    if(document.querySelector('._sel')){
        document.querySelector('._sel').removeAttribute('style');
        document.querySelector('._sel').classList.remove('._sel');
    }
}
function topf () {
    disabledTopBtn();
    clearSelectTree();
    var elemWork = document.querySelector('._active');
    selectTree(elemWork.parentElement);
}
function bottomf () {
    disabledTopBtn();
    clearSelectTree();
    var elemWork = document.querySelector('._active');
    selectTree(elemWork.firstElementChild);
}
function leftf () {
    disabledTopBtn();
    clearSelectTree();
    var elemWork = document.querySelector('._active');
    selectTree(elemWork.previousElementSibling);
}
function rightf () {
    disabledTopBtn();
    clearSelectTree();
    var elemWork = document.querySelector('._active');
    selectTree(elemWork.nextElementSibling);
}
