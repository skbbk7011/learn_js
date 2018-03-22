function send() {
    var socket = new WebSocket("ws://127.0.0.1:3000/ws");
    socket.onopen = function() {
        alert("Соединение установлено.");
    };

    socket.onclose = function(event) {
        if (event.wasClean) {
            alert('Соединение закрыто чисто');
        } else {
            alert('Обрыв соединения'); // например, "убит" процесс сервера
        }
        alert('Код: ' + event.code + ' причина: ' + event.reason);
    };

    socket.onmessage = function(event) {
        alert("Получены данные " + event.data);
    };

    socket.onerror = function(error) {
        alert("Ошибка " + error.message);
    };
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


