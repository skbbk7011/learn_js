var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
];

window.onload = function () {
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
        var relative = 'position:relative;';
        var absolute = 'position:absolute; top:10px; left:10;';
        for (i=count; i > -1; i--){
            if(i==1){
                css += '.el' + i + '{' + relative + ' width:' + size + 'px; height:' + size +'px;}';
            }else{
                css += '.el' + i + '{' + absolute + ' width:' + size + 'px; height:' + size +'px;}';
            }
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
        randRecolor();
    }
    function rand (mass){
        var rand = Math.floor(Math.random() * mass.length);
        return mass[rand];
    }
    function recolor (elem, color){
        elem.style.backgroundColor = color;
    }
    function randRecolor(){
        var color = rand(colors);
        var arrBlock = [];
        var elArr = document.querySelectorAll('div[class^="el"]');
        for (i=0; i< elArr.length; i++){
            arrBlock.push(elArr[i]);
        }
        recolor(rand(arrBlock), color);
        valid();
    };
    function valid(){
        var collectionEl = document.querySelectorAll('div[class^=\'el\']');
        var arrColors = [];

        for(i=0; i<collectionEl.length;i++){
            arrColors.push(collectionEl[i].style.backgroundColor);
        }

        console.log(foo(arrColors));
    }
    function foo(a) {
        return !a.some(function(b) {
            return b !== a[0]
        })
    }
};