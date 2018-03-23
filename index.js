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
    var dataReq = {};
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
        dataReq = event.data;
    };
    socket.onerror = function(error) {
        alert("Ошибка " + error.message);
    };

    var amount = 0;

    document.querySelector('button').addEventListener('click', function () {
        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function() {
            var jsonAnswer = JSON.parse(this.response);
            var error = 'sell was ' + jsonAnswer.success+ ', becouse ' + jsonAnswer.reason;
            if (this.status == 200 && this.readyState == 4){
                if (aa.success == true){
                    amount += jsonAnswer.lag;
                    document.querySelector('.sellAmount').textContent = amount;
                }
            } else if ((this.status == 400 && this.readyState == 4) || (this.status == 404 && this.readyState == 4)){
                alert(error);
            } else if (this.status == 403 && this.readyState == 4){
                alert(error + ' = ' + jsonAnswer.sellLimit);
            }
        };
        xhttp2.open("POST", "http://127.0.0.1:3000/sell", true);
        xhttp2.send(dataReq);

    })

}


document.addEventListener("DOMContentLoaded", send);

