function ready() {
    var aBalls;
    var ball = new Array(); // в этом массиве будут храниться все объекты
    var canvas = document.getElementById('borders');
    var canvasW = canvas.clientWidth;
    var canvasH = canvas.clientHeight;
    var flag = true;

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

    function Ball(){
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.r = 2; // Radius
    }
    function create(count,size) {
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


            var elem = document.getElementById('flyer'+i);
            aBall = new Ball();
            aBall.x = elem.style.left;
            aBall.y = elem.style.top;
            aBall.r = elem.style.borderRadius;
            ball.push(aBall);

        document.title = ball.length;

    }
    function init(j){
             var nameVar = 'fly'+j;
             var name = 'flyer'+j;
             eval('var nameVar = new fly(name)') ;
    }
    var fly = function(el){
        var dx = 2;
        var dy = 2;

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

            if(flag == true){
                requestAnimationFrame(draw);
            }
        }
    };



    var count = prompt();
    if (count > 0 && count <= 5){
            for(var i = 0; i < count; i++){
                create(i,40);
            }
        } else {
            alert('0 < count < 5');
            var count = prompt();
        }

    function onmouseup(/*MouseEvent*/ e){
        for(i=0;i<document.title;i++){
            init(i);
        }
        document.getElementById('borders').addEventListener("mouseover", mouseover, true);
        document.getElementById('borders').addEventListener("mouseout", mouseout, true);
    }
    function mouseover(/*MouseEvent*/ e){
        flag = true;
        for(i=0;i<document.title;i++){
            var nameVar = 'fly'+i;
            var name = 'flyer'+i;
            eval('var nameVar = new fly(name)') ;
        }
    }
    function mouseout(/*MouseEvent*/ e){
        console.log(e.target);
        console.log(e);
        flag = false;
    }
    document.getElementById('borders').addEventListener("mouseup", onmouseup, true);

}

document.addEventListener('DOMContentLoaded', ready);