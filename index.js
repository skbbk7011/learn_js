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
    if (count < 2){
        var count = prompt()*1;
    }
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
    }

    var arrBlock = Array.prototype.slice.call(document.querySelectorAll('div[class^="el"]'));

    function rand (mass){
        var rand = Math.floor(Math.random() * mass.length);
        return mass[rand];
    }

    function valid(arrBlock){
        var resu = false;
        var arrColors = [];
        for(i=0; i<arrBlock.length;i++){
            arrColors.push(arrBlock[i].style.backgroundColor);
        }
        function www (){
            if(foo(arrColors)==true){
                return true;
            } else {
                return false;
            }
        }
        return www();
    }
    function foo(a) {
        return !a.some(function(b) {
            return b !== a[0]
        })
    }
     var buffer2 = valid(arrBlock);
     var idIntervals;
    var idIntervals = setInterval(function () {
        if  (valid(arrBlock) == false) {
            rand(arrBlock).style.backgroundColor = rand(colors);
            valid(arrBlock);
        }
    }, 2000);













};