function finder(){
    document.querySelector('button').addEventListener('click', function () {
        function toJsonContainer(data) {
            document.getElementById('content').text(data);
            console.log("Other data: " + data);
        }



        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://en.wikipedia.org/w/api.php?action=parse&page=title&prop=text&section=0&format=json&callback=toJsonContainer";

        document.getElementsByTagName('head')[0].appendChild(script);



        var url = "http://easy4web.ru/samples/jsonp/handler.php?callback=showPrice"; // Это адрес скрипта, который мы загружаем.

//А этим кодом мы динамически вставляем JavaSCript.
        var script2 = document.createElement('script');
        script2.setAttribute('src', url);

// load the script
        document.getElementsByTagName('head')[0].appendChild(script2);

        // Эта функция просто вызывает окно с данными из JSON
        function showPrice(data) {
            alert("Symbol: " + data);
        }
    })
}

document.addEventListener("DOMContentLoaded", finder);
