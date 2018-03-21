function finder(){
    document.querySelector('button').addEventListener('click', function () {

        var title = document.getElementsByTagName('input')[0].value;

        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://en.wikipedia.org/w/api.php?action=parse&page="+ title +"&prop=text&section=0&format=json&callback=toJsonContainer";

        document.getElementsByTagName('head')[0].appendChild(script);

        toJsonContainer = function(data){
            console.log(data.parse.text);
            document.getElementById('content').innerHTML = data.parse.text["*"] ;
            };
    })
}

document.addEventListener("DOMContentLoaded", finder);
