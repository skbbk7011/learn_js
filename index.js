var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
];

document.onload = function () {
    //ваш код будет здесь
    window.onclick = function(event) {
        var target = event.target;
        console.log(target);
        alert('1111');
        // цикл двигается вверх от target к родителям до table
        // while (target != this) {
        //     console.log(target);
        //     if (target.tagName == 'TD') {
        //         // нашли элемент, который нас интересует!
        //         highlight(target);
        //         return;
        //     } else if (target.tagName == 'TD') {
        //         // нашли элемент, который нас интересует!
        //         highlight(target);
        //         return;
        //     } else if (target.tagName == 'TD') {
        //         // нашли элемент, который нас интересует!
        //         highlight(target);
        //     return;
        //     }
        //     target = target.parentNode;
        // }

    }
}