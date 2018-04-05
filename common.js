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


function ready() {



    document.querySelector('button').addEventListener('click', function () {
        var xhttp2 = new XMLHttpRequest();

        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://pokeapi.co/api/v1/pokemon/?limit=12&callback=callBackResp";

        document.getElementsByTagName('head')[0].appendChild(script);

        callBackResp = function(data){
            var itemsCollection= data.objects;
            for(i=0; i< itemsCollection; i++){
                var itemImg = itemsCollection[i].resource_uri;
                var itemName = itemsCollection[i].name;
                console.log(itemImg + itemName);
                document.querySelector('list').innerHTML = '<div class="item">'+ itemImg + itemName +'</div>';
            }

        };


    })
}



document.addEventListener('DOMContentLoaded', ready);



