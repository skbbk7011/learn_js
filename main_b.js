
function ready() {
    var next = document.querySelector('.selector-next');
    var prev = document.querySelector('.selector-prev');
    document.querySelector('.selector-find').onclick = function () {
        var findSelector = document.querySelector('.selector').value;
        var findBlock = document.getElementsByClassName(findSelector);
        if (findBlock.length > 1) { next.disabled=false; prev.disabled=false; }
        select (findBlock[0]);
    };

    function select (el) {
        el.style="outline:solid red 5px;background-color:lightblue;";
        el.setAttribute('data_state','_active');
    }


    next.onclick = function (el) {
    };


    function prev () {
        console.log('prev');
    }


//tree navigation

    function parent () {
        console.log('parent');
    }
    function firstChild () {
        console.log('firstChild');
    }
    function prevSim () {
        console.log('prevSim');
    }
    function nextSim () {
        console.log('nextSim');
    }
}


document.addEventListener("DOMContentLoaded", ready);

