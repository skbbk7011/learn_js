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

    function create(c) {
        var colors = [
            'red',
            'grey',
            'yellow',
            'green',
            'pink'
        ];

        for (i=0;i<count;i++){

            var el = document.createElement('div');
            el.id = 'flyer'+i;
            el.style = 'width: 40px;' +
                'height: 40px;' +
                'background-color: '+ rand(colors) +';' +
                'border-radius: 20px;' +
                'left: '+randomInteger(30, canvasW-30)+'px;' +
                'top: '+randomInteger(30, canvasH-30)+'px;';
            document.getElementById('borders').appendChild(el);
            var nameVar = 'fly'+i;
            var name = 'flyer'+i;
            eval('var nameVar = new fly(name)') ;
           // eval('nameVar.init()');

        }

    }

    var fly = function(el){


        var dx = 2;
        var dy = 2;


       // this.init = function (el) {
            var elem = document.getElementById(el);
            var stepLeft = elem.getBoundingClientRect().left;
            var stepDown = elem.getBoundingClientRect().top;
            draw();
      //  };

        this.create = function () {

        };


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

    var count = prompt();
    if (count > 0 && count <= 5){
        create(count);
    } else {
        alert('0 < count < 5');
        var count = prompt();
    }
}



document.addEventListener('DOMContentLoaded', ready);