/*
* TodoList:
* -Шарики должны сталкиваться
* -при клике для начала игры в точке клика создается шарик другого цвета (допустим зеленого) с радиусом в 50 пикселей.
* -Этот шарик двигается за курсором так, что его центр всегда совпадает с курсором мыши, пока та находится внутри дива
* -при столкновении зеленого шарика с одной из стенок дива либо с одним из шариков внутри выводится
* -алерт "Вы продержались X секунд против Y шариков",
* где Х - количество секунд (округленное до целого) с момента начала игры,
*     Y - количество шариков введенное пользователем
*/

function ready() {
   /* var aBalls;
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

    function onmouseup(/!*MouseEvent*!/ e){
        for(i=0;i<document.title;i++){
            init(i);
        }
        document.getElementById('borders').addEventListener("mouseover", mouseover, true);
        document.getElementById('borders').addEventListener("mouseout", mouseout, true);
    }
    function mouseover(/!*MouseEvent*!/ e){
        flag = true;
        for(i=0;i<document.title;i++){
            var nameVar = 'fly'+i;
            var name = 'flyer'+i;
            eval('var nameVar = new fly(name)') ;
        }
    }
    function mouseout(/!*MouseEvent*!/ e){
                flag = false;
    }
*/

    var aBalls;
    var ball = new Array(); // в этом массиве будут храниться все объекты
    var canvas = document.getElementById('borders');
    var canvasW = canvas.clientWidth;
    var canvasH = canvas.clientHeight;
    var flag = true;
    var colors = ['red', 'grey', 'lightyellow', 'yellow', 'green', 'lightgreen', 'lightpink', 'pink', 'orange', 'purple', 'blue', 'lightblue', 'lightred'];
    var dx = 2;
    var dy = 2;


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
        const sizeDefoult = 40;
        const _size = randomFloat(0.5, 1.5);
        const size = sizeDefoult*_size;

        this.name = 'flyer'+randomInteger(0, 10);
        this.x = randomInteger(30, 400);
        this.y = randomInteger(30, 400);
        this.vx = 0;
        this.vy = 0;
        this.r = size/2; // Radius

        this.create = function (){
            var el = document.createElement('div');
            el.id = this.name;
            el.style = 'width: '+size+'px;' +
                'height: '+size+'px;' +
                'background-color: '+ rand(colors) +';' +
                'border-radius: '+this.r+'px;' +
                'left: '+this.x+'px;' +
                'top: '+this.y+'px;';
            document.getElementById('borders').appendChild(el);
        };

        this.draw = function (name,x,y,r){
            x += dx;
            y += dy;
            if (x+r*2 > canvasW){
                dx = -2;
            } else if (x < 0){
                dx = 2;
            }
            if(y+r*2 > canvasH){
                dy = -2;
            } else if (y < 0){
                dy = 2;
            }
            var _self = this;
            document.getElementById(name).style.left = x+'px';
            document.getElementById(name).style.top = y+'px';
            requestAnimationFrame(this.draw.bind(this));
        };
        this.collision = function(){

        };
        this.start = function (){

            this.draw(this.name, this.x, this.y, this.r);
        };
        this.stop = function () {

        }
    }


    var aBall = new Ball();
    aBall.create();
    aBall.start();
    ball.push(aBall);

    var aBall2 = new Ball();
    aBall2.create();
    aBall2.start();
    ball.push(aBall2);

    console.log(ball);


   /* function create(count,size) {


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
    }*/





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
        flag = false;
    }

    document.addEventListener("mouseup", onmouseup, true);
}

document.addEventListener('DOMContentLoaded', ready);