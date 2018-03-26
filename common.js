function ready() {

    var canvas = document.getElementById('borders');
    var canvasW = document.getElementById('borders').clientWidth;
    var canvasH = document.getElementById('borders').clientHeight;
    var elem = document.getElementById('flyer');
    var stepLeft = elem.getBoundingClientRect().left;
    var stepDown = elem.getBoundingClientRect().top;
    var dx = 2;
    var dy = 2;

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
    draw ();

}



document.addEventListener('DOMContentLoaded', ready);