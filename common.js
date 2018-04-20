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

    return new Promise(function (succeed, fail) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.addEventListener("load", function() {
            if (request.status < 400)
                succeed(request.response);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function() {
            fail(new Error("Network error"));
        });
        request.send();
    })
}

function getPeopleInfo(data){
     document.querySelector('.name').innerText = data.name;
     document.querySelector('.birth-day').innerText = data.birth_year;
     document.querySelector('.gender').innerText = data.gender;
     var filmsTitle = [];
     var films = data.films;

     for(var i = 0; i < films.length; i++){
         getData(films[i]).then(function(response) {
             filmInfo = JSON.parse(response);
             var o = new Object();
             o.name = filmInfo.title;
              filmsTitle.push(o);
             return renderList(filmsTitle, 'films-list__ul', 'film', 'films-list');
         })
     }

}

function setData(data) {
    var nextHref = data.next;
    var prevHref = data.previous;
    var list = data.results;

    setDataBtn('prev', prevHref);
    setDataBtn('next', nextHref);
    renderList(list, 'people', "title", "list");
}

function setDataBtn(roleBtn, href) {
    if (href == undefined) {
        document.querySelector('.' + roleBtn).style.disabled = true;
        document.querySelector('.' + roleBtn).classList.add('none');
        document.querySelector('.' + roleBtn).classList.remove('inline-block');
        document.querySelector('.' + roleBtn).removeAttribute('data-href');
    } else {
        document.querySelector('.' + roleBtn).style.disabled = false;
        document.querySelector('.' + roleBtn).classList.add('inline-block');
        document.querySelector('.' + roleBtn).classList.remove('none');
        document.querySelector('.' + roleBtn).setAttribute('data-href', href);
    }
}

function renderList(data, nameClassList, nameClassItem, pasteIn) {
    var oldList = document.querySelector('.' + nameClassList);
    if(oldList){
        oldList.remove();
    }
    var ul = document.createElement('ul');
    ul.className = nameClassList;
    document.querySelector('.' + pasteIn).appendChild(ul);
    for (var i = 0; i < data.length; i++) {
        var newLi = document.createElement('li');
        newLi.className = nameClassItem;
        newLi.id = i;
        newLi.innerText = data[i].name;
        document.querySelector('.' + nameClassList).appendChild(newLi);
    }
}

function ready() {

    if(localStorage.getItem('href')){
        document.getElementById('saveData').checked = true;
        var mainTitle = document.createElement('h2');
        document.querySelector('.getPeople').style.display = 'none';
        mainTitle.innerText = 'Actors:';
        document.getElementById('saveData').value = localStorage.getItem('href');
        getData(localStorage.getItem('href')).then(function(response) {
            document.querySelector('.list').appendChild(mainTitle);
            arr = JSON.parse(response);
            return setData(arr);
        })
        console.log(localStorage.getItem('href'));
    }

    document.querySelector('.getPeople').addEventListener('click', function () {
        var mainTitle = document.createElement('h2');
        this.style.display = 'none';
        mainTitle.innerText = 'Actors:';
        document.getElementById('saveData').value = 'https://swapi.co/api/people/?limit=10';
        getData("https://swapi.co/api/people/?limit=10").then(function(response) {
            document.querySelector('.list').appendChild(mainTitle);
            arr = JSON.parse(response);
            return setData(arr);
        })

    });


    document.addEventListener('click', function (e) {
        var items = e.target.classList;
        var id = e.target.id;
        var block = document.querySelector('.info');

        for (var i = 0; i < items.length; i++) {
            switch (items[i]) {
                case 'save':
                    if(document.getElementById('saveData').checked == true){
                        var url = document.getElementById('saveData').value;
                        localStorage.setItem('href', url);
                    } else {
                        localStorage.removeItem('href');
                    }
                    break;
                case 'navigation':
                    document.getElementById('saveData').value = e.target.dataset.href;
                    getData(e.target.dataset.href).then(function(response) {
                        arr = JSON.parse(response);
                        return setData(arr);
                    })
                    break;
                case 'title':
                    getPeopleInfo(arr.results[id]);
                    block.classList.add('_active');
                    break;
                case 'close':
                    block.classList.remove('_active');
                    break;
            }

            if((items[i] == 'navigation' || items[i] == 'getPeople') && document.getElementById('saveData').checked == true){
                var url = document.getElementById('saveData').value;
                localStorage.setItem('href', url);
            }


        }
    })
}


document.addEventListener('DOMContentLoaded', ready);



