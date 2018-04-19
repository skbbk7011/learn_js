/*
* - создайте кнопку load more которая загружает следующий список покемонов (выводите его картинку и название).
* в объекте который к вам прийдет есть поле next. в нем хранится url для следующих покемонов.
* первый раз запрос делаем по адресу http://pokeapi.co/api/v1/pokemon/?limit=12
* - по клику на покемона справа открывается более подробное его описание > height, abilities ....
* по клику на покемона нужно чтоб открывался попап. в нем есть кнопки next prev.
* по клику по ним должны листаться картинки этого покемона (когда открываем попап нужно делать запрос чтоб загрузить их)
* - вверху создаем инпут - save data. если инпут зачекан - когда прогружаем список покемонов храним в localstorage
* в каком то ключе ссылку на список покемонов. при обновлении страницы нужно чтоб покемоны загрузились сразу же
* а не по кнопке!!!!!
* */
var arr = {};

function getData(url) {
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            arr = JSON.parse(xhttp2.response);
            return setData(arr);
        }
    };
    xhttp2.open("GET", url, true);
    xhttp2.send();
}

function setData(data) {
    var nextHref = data.next;
    var prevHref = data.previous;
    var list = data.results;
    setDataBtn('prev', prevHref);
    setDataBtn('next', nextHref);
    renderList(list);
    console.log(data);
}

function setDataBtn(roleBtn, href) {
    if (href == undefined) {
        document.querySelector('.' + roleBtn).style.disabled = true;
        document.querySelector('.' + roleBtn).removeAttribute('data-href');
    } else {
        document.querySelector('.' + roleBtn).style.disabled = false;
        document.querySelector('.' + roleBtn).setAttribute('data-href', href);
    }
}

function renderList(data) {
    var oldList = document.querySelector('.people');
    if(oldList){
        oldList.remove();
    }
    var ul = document.createElement('ul');
    ul.className = "people";
    document.querySelector('.list').appendChild(ul);
    for (var i = 0; i < data.length; i++) {
        var newLi = document.createElement('li');
        newLi.className = "title";
        newLi.innerText = data[i].name;
        document.querySelector('.people').appendChild(newLi);
    }
}

function ready() {
    document.querySelector('.getPeople').addEventListener('click', function () {
        return getData('https://swapi.co/api/people/?limit=10');
    });

    document.addEventListener('click', function (e) {
        e.preventDefault();
        var items = e.target.classList;
        for (var i = 0; i < items.length; i++) {
            switch (items[i]) {
                case 'navigation':
                    getData(e.target.dataset.href);
                    console.log( 'navigation' );
                    break;
                case 'title':
                    console.log( 'title' );
                    break;
            }
        }
    })
}


document.addEventListener('DOMContentLoaded', ready);



