function finder() {
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
            initNextBtn();
            initPrevBtn();
        }
        clearSelect ();
        select (findBlock[0]);
        initBtn(findBlock[0]);

        console.log(findBlock);

    };

    function initNextBtn(){
        next.disabled=false;
        next.addEventListener("click", nextf);
    }

    function initPrevBtn(){
        prev.disabled=false;
        prev.addEventListener("click", prevf);
    }

    function disabledTopBtn(){
        prev.disabled=enabled;
        next.disabled=enabled;
        next.removeEventListener("click", nextf);
        prev.removeEventListener("click", prevf);
    }

    function initBtn (elem){
        if (elem.parentElement){
            top.disabled=false;
            top.addEventListener("click", topf);
        }
        if(elem.firstElementChild){
            bottom.disabled=false;
            bottom.addEventListener("click", bottomf);
        }
        if(elem.previousElementSibling){
            left.disabled=false;
            left.addEventListener("click", leftf);
        }
        if(elem.nextElementSibling){
            right.disabled=false;
            right.addEventListener("click", rightf);
        }
    }

    function select (el) {
        el.style="outline:solid red 5px;background-color:lightblue;";
        el.classList.add('_active');
    }
    function clearSelect () {
        var findBlock = ff();
        for (i=0; i<findBlock.length; i++){
            findBlock[i].removeAttribute('style');
            findBlock[i].classList.remove('_active');
        }
    }


// top navigation

    var count = 0;
    function nextf () {
        var findBlock = ff();

            count++;
            clearSelect ();
            if (count >= 0 && count <= findBlock.length-1){
                select(findBlock[count]);
            } else if (count < 0) {
                var pCount = count*-1;
                select(findBlock[pCount]);
            } else if (count > findBlock.length-1){
                count = 0;
                select(findBlock[count]);
            }
            initBtn(findBlock[count]);

    }
    function prevf () {
        var findBlock = ff();
        count--;
        clearSelect ();
        if (count >= 0){
            select(findBlock[count]);
        } else if (count < 0 && count >= -(findBlock.length-1)) {
            var pCount = count*-1;
            select(findBlock[pCount]);
        } else if (count <= -(findBlock.length-1)){
            count = 0;
            select(findBlock[count]);
        }
        initBtn(findBlock[count]);
    }

//tree navigation

    function selectTree (el) {
        el.style="outline:solid red 5px;background-color:lightblue;";
        el.classList.add('_sel');
    }
    function clearSelectTree () {
        if(document.querySelector('._active')){
            var findBlock = ff();
            for (i=0; i<findBlock.length; i++){
                findBlock[i].removeAttribute('style');
            }
        }
        if(document.querySelector('._sel')){
            document.querySelector('._sel').removeAttribute('style');
            document.querySelector('._sel').classList.remove('._sel');
        }
    }

    function topf () {
        disabledTopBtn()
        clearSelectTree();
        var elemWork = document.querySelector('._active');
        selectTree(elemWork.parentElement);
    }
    function bottomf () {
        disabledTopBtn()
        clearSelectTree();
        var elemWork = document.querySelector('._active');
        selectTree(elemWork.firstElementChild);
        console.log(elemWork.firstElementChild);
    }
    function leftf () {
        disabledTopBtn()
        clearSelectTree();
        var elemWork = document.querySelector('._active');
        selectTree(elemWork.previousElementSibling);
    }
    function rightf () {
        disabledTopBtn()
        clearSelectTree();
        var elemWork = document.querySelector('._active');
        selectTree(elemWork.nextElementSibling);
    }
}


document.addEventListener("DOMContentLoaded", finder);

