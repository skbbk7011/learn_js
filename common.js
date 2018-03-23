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
    for (; el && el !== document && el.nodeType === 1; el = el.parentNode) {
        // Selector is a class
        if (first === '.' && el.classList.contains(selector.substr(1))) {
            return el;
        }
        // Selector is a tagName
        if (el.tagName.toLowerCase() === selector) {
            return el;
        }
    }
    return null;
};
function processButtonClick(el) {
    var closestElem = closest(el, '.inputzone');
    var colorBlock = closestElem.getElementsByClassName('light');
    colorBlock[0].style.backgroundColor = 'blue';
    closestElem.classList.add("done");
    inspectLamp(el);
}
function inspectLamp(el) {
    var newChild = '<p style="color:green">Done</p>'
    var parentOb = closest(el, '.border');
    var itemCollectionLenght = parentOb.getElementsByClassName('inputzone').length;
    var itemCollectionDone = parentOb.getElementsByClassName('done').length;
    if (itemCollectionDone == itemCollectionLenght) {
        parentOb.insertAdjacentHTML('beforeend', newChild);
    }
}

function task11925_1(){
    function printResultToDiv(value, target) {
        document.querySelector('#' + target).textContent = value;
    }

    function printArrayToDiv(array, target) {
        printResultToDiv('[' + array.join(', ') + ']', target);
    }

    function cleanArray (arr) {
        var result = [];
        for(i=0; i<arr.length-1; i++){
            if(typeof(1) === typeof(arr[i])){
                result.push(arr[i]);
            }
        }
        return result;
    }

    function average (arr) {
        var result = 1;
        for (i=0;i<arr.length;i++){
            result = result * arr[i];
        }
        result = Math.pow(result,1/arr.length);
        return result;
    }

    var sourceArray = [1, "37", 45, "котик", undefined, null, "44", "22.3"];
    printArrayToDiv(sourceArray, 'source');

    var cleanedArray = cleanArray(sourceArray);
    printArrayToDiv(cleanedArray, 'result');

    printResultToDiv(average(cleanedArray), 'avg');

}
document.addEventListener('DOMContentLoaded', task11925_1);


function task11925_2(){
    function linearize (inArr) {
        console.log(inArr);
        var outArr = [];

        for (f=0;f<inArr.length; f++){
            for (j=0;j<inArr[f].length; j++){
                outArr.push(inArr[f][j]);
            }
        }
        print(inArr, outArr);
    }

    function print(defMass, linearize){
        console.log(linearize);
        console.log(defMass + ' --> ' + linearize);
    }

    linearize([[1],[2], [3, 4, 5]]);
    linearize([[1, 2], [3], [4], [5]]);
    linearize([[1, 2], [3,[[6],[7]]], [4], [5]]);


}
document.addEventListener('DOMContentLoaded', task11925_2);