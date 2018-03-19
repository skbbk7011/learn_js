
function ready() {
    var next = document.querySelector('.selector-next');
    var prev = document.querySelector('.selector-prev');

    var top = document.querySelector('.nav-top');
    var bottom = document.querySelector('.nav-bottom');
    var left = document.querySelector('.nav-left');
    var right = document.querySelector('.nav-right');

    function ff(){
        var findSelector = document.querySelector('.selector').value;
        return  document.getElementsByClassName(findSelector);
    }

    document.querySelector('.selector-find').onclick = function () {

        var findBlock = ff();

        if (findBlock.length > 1) {
            next.disabled=false;
            prev.disabled=false;
            next.addEventListener("click", nextf);
            prev.addEventListener("click", prevf);
        }
        clearSelect ();
        select (findBlock[0]);
    };

    function select (el) {
        el.style="outline:solid red 5px;background-color:lightblue;";
        el.setAttribute('data_state','_active');
    }
    function clearSelect () {
        var findBlock = ff();
        for (i=0; i<findBlock.length; i++){
            findBlock[i].removeAttribute('style');
            findBlock[i].removeAttribute('data_state');
        }
    }

    var count = 0;
    function nextf () {
        var findBlock = ff();
        if (count < findBlock.length-1){
            count++;
            clearSelect ();
            select(findBlock[count]);
        }
    }
    function prevf () {
        var findBlock = ff();
        if (count > 0){
            count--;
            clearSelect ();
            select(findBlock[count]);
        }
    }

//tree navigation

    function top () {
        console.log('parent');
    }
    function bottom () {
        console.log('firstChild');
    }
    function left () {
        console.log('prevSim');
    }
    function right () {
        console.log('nextSim');
    }
}


document.addEventListener("DOMContentLoaded", ready);

