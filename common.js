function ready() {

     var count = prompt();
     if (count >= 5){
         alert('count < 5');
         var count = prompt();
     }
    create(count);
    function create(c) {
        var color = [
            red,
            grey,
            yellow,
            green,
            pink
        ];
        console.log(c);
        //width: 40px;height: 40px;background-color: blue;border-radius: 20px;left: 40px;top: 200px;

    }

    var fly = function(el){
        var canvas = document.getElementById('borders');
        var canvasW = canvas.clientWidth;
        var canvasH = canvas.clientHeight;

        var dx = 2;
        var dy = 2;


        this.init = function (el) {
            var elem = document.getElementById(el);
            var stepLeft = elem.getBoundingClientRect().left;
            var stepDown = elem.getBoundingClientRect().top;
            draw();
        };

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

    var fly1 = new fly('flyer1');
    fly1.init();

    var fly2 = new fly('flyer2');
    fly2.init();

}



document.addEventListener('DOMContentLoaded', ready);