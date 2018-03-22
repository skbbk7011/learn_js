function send() {
    //GET
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.get').textContent = 'OK';
            document.querySelector('.get').style = "color:green;font-weight:bold";
        } else if (this.status != 200){
            document.querySelector('.get').textContent = 'Failed';
            document.querySelector('.get').style = "color:red;font-weight:bold";
        }

    };
    xhttp.open("GET", "https://cors-test.appspot.com/test", true);
    xhttp.send();

    //POST
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.post').textContent = 'OK';
            document.querySelector('.post').style = "color:green;font-weight:bold";
        } else if (this.status != 200){
            document.querySelector('.post').textContent = 'filed';
            document.querySelector('.post').style = "color:red;font-weight:bold";
        }
    };
    xhttp2.open("POST", "https://cors-test.appspot.com/test", true);
    xhttp2.send();

    //POST
    var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.weird').textContent = 'OK';
            document.querySelector('.weird').style = "color:green;font-weight:bold";
        } else if (this.status != 200){
            document.querySelector('.weird').textContent = 'filed';
            document.querySelector('.weird').style = "color:red;font-weight:bold";
        }
    };
    xhttp3.open("WEIRD", "https://cors-test.appspot.com/test", true);
    xhttp3.send();
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


