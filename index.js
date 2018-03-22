function send() {
    //GET
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.get').textContent = 'OK';
        } else {
            document.querySelector('.get').textContent = 'Failed';
        }

    };
    xhttp.open("GET", "https://cors-test.appspot.com/test", true);
    xhttp.send();

    //POST
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.post').textContent = 'OK';
        } else {
            document.querySelector('.post').textContent = 'Failed';
        }
    };
    xhttp2.open("POST", "https://cors-test.appspot.com/test", true);
    xhttp2.send();

    //POST
    var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.weird').textContent = 'OK';
        } else {
            document.querySelector('.weird').textContent = 'Failed';
        }
    };
    xhttp3.open("WEIRD", "https://cors-test.appspot.com/test", true);
    xhttp3.send();
}


document.addEventListener("DOMContentLoaded", send);
