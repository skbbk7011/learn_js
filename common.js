//svetofor
/*** Сервисный код. Пока в нем можно не разбираться ***/
document.addEventListener('click', function (evt) {
    if (evt.target.nodeName.toLowerCase() === 'button') {
        processButtonClick(evt.target);
    }
});

function closest(el, selector) {
    var first = selector.charAt(0);
    // Traverse the DOM tree using parentNode
    for ( ; el && el !== document && el.nodeType === 1; el = el.parentNode ) {
        // Selector is a class
        if ( first === '.' && el.classList.contains( selector.substr(1) ) ) {
            return el;
        }
        // Selector is a tagName
        if ( el.tagName.toLowerCase() === selector ) {
            return el;
        }
    }
    return null;
};



function processButtonClick (el) {
    var closestElem = closest(el, '.inputzone');
    var colorBlock = closestElem.getElementsByClassName('light');
    colorBlock[0].style.backgroundColor = 'blue';
    closestElem.classList.add("done");
    inspectLamp(el);
}

function inspectLamp (el){
    var newChild = '<p style="color:green">Done</p>'
    var parentOb = closest(el, '.border');
    var itemCollectionLenght = parentOb.getElementsByClassName('inputzone').length;
    var itemCollectionDone = parentOb.getElementsByClassName('done').length;
    if (itemCollectionDone == itemCollectionLenght){
        parentOb.insertAdjacentHTML('beforeend', newChild);
    }
}