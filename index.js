function send() {
    var graph = document.querySelectorAll('.graphbar');
    var price = document.querySelector('.value');
    var socket = new WebSocket("ws://127.0.0.1:3000/ws");


    socket.onopen = function() {
        console.log("Соединение установлено.");
    };

    socket.onclose = function(event) {
        if (event.wasClean) {
            alert('Соединение закрыто чисто');
        } else {
            alert('Обрыв соединения'); // например, "убит" процесс сервера
        }
        alert('Код: ' + event.code + ' причина: ' + event.reason);
    };

    var i = 0;
    socket.onmessage = function(event) {
        var json = JSON.parse(event.data);


        i++;
        if (i > graph.length-1){
            i = 0;
        }

        if (json.price > 200){
            price.style.color = 'green';
        } else {
            price.style.color = 'red';
        }
        price.textContent = json.price.toFixed(1);

        graph[i].style.height = json.price+'px';
    };
    socket.onerror = function(error) {
        alert("Ошибка " + error.message);
    };


    document.querySelector('button').addEventListener('click', function () {

        //http://127.0.0.1:3000/sell

        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://127.0.0.1:3000/sell?action=parse&format=json&callback=toJsonContainer";

        document.getElementsByTagName('head')[0].appendChild(script);

        toJsonContainer = function(data){
            console.log(data);
            //document.getElementById('content').innerHTML = data ;
        };
    })

}


document.addEventListener("DOMContentLoaded", send);


/*
* можно сделать функцию которую потом вызывать (вместо повторяющегося кода)
* для обработки ошибок
* если нужно я доделаю, но как я поняла суть понять как обработать ошибки и успешный ответ
* я как поняла это все задание, если чего то не доделала...то могла недопонять суть задания....
* и доделаю после обьснения)))
*
* вывод: понять, что такое  readyState, status, success, async и прочие настройки,
* их много, можно найти в интернете их описание
*/

