var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
];

window.onload = function () {
    //ваш код будет здесь
    var body = document.getElementsByTagName('body')[0];
    body.onclick = function(event) {
        var target = event.target;
        var randomizeColor = rand(colors);
        while (target != this) {
            if (target.className == 'el1') {
                recolor(target, randomizeColor);
                valid();
                return;
            } else if (target.className == 'el2') {
                recolor(target, randomizeColor);
                valid();
                return;
            } else if (target.className == 'el3') {
                recolor(target, randomizeColor);
                valid();
                return;
            }
            target = target.parentNode;

        }

    }


    function rand (mass){
        var rand = Math.floor(Math.random() * mass.length);
        return mass[rand];
    }

    function recolor (elem, color){
        elem.style.backgroundColor = color;
    }

    function valid (){

        var collectionEl = document.querySelectorAll('div[class^=\'el\']');
        var arrColors = [];
        for(i=0; i<collectionEl.length;i++){
            arrColors.push(collectionEl[i].style.backgroundColor);
        }

            function foo(a) {
                return !a.some(function(b) {
                    return b !== a[0]
                })
            };

        if (foo(arrColors) == true){
            console.log('done');
        }
    }
};