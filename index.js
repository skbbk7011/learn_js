var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
];

window.onload = function () {
    //var body = document.getElementsByTagName('body')[0];
    // body.onclick = function(event) {
    //     var target = event.target;
    //     var randomizeColor = rand(colors);
    //     while (target != this) {
    //         if (target.className == 'el1') {
    //             recolor(target, randomizeColor);
    //             valid();
    //             return;
    //         } else if (target.className == 'el2') {
    //             recolor(target, randomizeColor);
    //             valid();
    //             return;
    //         } else if (target.className == 'el3') {
    //             recolor(target, randomizeColor);
    //             valid();
    //             return;
    //         }
    //         target = target.parentNode;
    //
    //     }
    //
    // }


    var count = prompt()*1;
    generate(count);

    var css = generateCss(count),
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);

    function generateCss(count){
        var size = 50;
        var css = '';
        for (i=count; i > -1; i--){
            css += '.el' + i + '{width:' + size + 'px; height:' + size +'px;}';
            size += 20;
        }
        return css;
    }

    function generate (count) {
        for(i=1; i < count+1; i++){
            var color = rand(colors);
            if (i == 1){
                document.getElementById('generate').innerHTML='<div class="el'+ i +'" ></div>';
            } else {
                var j = i-1;
                document.querySelector('.el' + j).innerHTML= '<div class="el' + i + '" ></div>';
            }
            document.querySelector('.el' + i).style.backgroundColor = color;
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