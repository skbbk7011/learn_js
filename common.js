function ready() {

    var canvas = document.getElementById('borders');
    var canvasW = canvas.clientWidth;
    var canvasH = canvas.clientHeight;

    function rand (mass){
        var rand = Math.floor(Math.random() * mass.length);
        return mass[rand];
    }

    function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }
    function randomFloat(min, max) {
        return min + Math.random() * (max - min);
    }

    function create(c, size) {
        var colors = [
            'red',
            'grey',
            'lightyellow',
            'yellow',
            'green',
            'lightgreen',
            'lightpink',
            'pink',
            'orange',
            'purple',
            'blue',
            'lightblue',
            'lightred'
        ];

        for (i=0;i<count;i++){

            var _size = randomFloat(0.5, 1.5);
            var el = document.createElement('div');
            el.id = 'flyer'+i;
            el.style = 'width: '+size*_size+'px;' +
                'height: '+size*_size+'px;' +
                'background-color: '+ rand(colors) +';' +
                'border-radius: '+size*_size/2+'px;' +
                'left: '+randomInteger(30, canvasW-30)+'px;' +
                'top: '+randomInteger(30, canvasH-30)+'px;';
            document.getElementById('borders').appendChild(el);
            var nameVar = 'fly'+i;
            var name = 'flyer'+i;
            eval('var nameVar = new fly(name)') ;
           // eval('nameVar.init()');

        }

    }

    function init(){

        for (i=0;i<count;i++){

            var nameVar = 'fly'+i;
            var name = 'flyer'+i;
            eval('nameVar.init();') ;
            // eval('nameVar.init()');

        }
    }

    var fly = function(el){
        var dx = 2;
        var dy = 2;

        this.init = function () {

        }
        var elem = document.getElementById(el);
        var stepLeft = elem.getBoundingClientRect().left;
        var stepDown = elem.getBoundingClientRect().top;

        draw();

        function draw (){
            stepLeft += dx;
            stepDown += dy;
            if (stepLeft+elem.clientWidth > canvasW){
                dx = -2;
            } else if (stepLeft < 0){
                dx = 2;
            }
            if(stepDown+elem.clientHeight > canvasH){
                dy = -2;
            } else if (stepDown < 0){
                dy = 2;
            }

            elem.style.left = stepLeft+'px';
            elem.style.top = stepDown+'px';

            requestAnimationFrame(draw);
        }

    };

    alert('0 < count < 5 && max size = 40px');
    var count = prompt();
    if (count > 0 && count <= 5){
        create(count, 40);
    } else {
        alert('0 < count < 5');
        var count = prompt();
    }


    document.getElementById('borders').addEventListener('click',init);

}



document.addEventListener('DOMContentLoaded', ready);