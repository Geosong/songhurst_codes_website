function circleRadiusForElement(elWidth, elHeight) {
    return Math.sqrt(Math.pow((elWidth/2.0),2) + Math.pow((elHeight/2.0),2));
}

function createBorder(className) {
    var elements = document.getElementsByClassName(className);
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];
        var elePosRect = element.getBoundingClientRect();
        var parent = element.parentNode;
        var border = document.createElement('div');
        border.className += 'circleBorder';
        if(element.className.split(' ').indexOf('link') != -1){
            border.className += ' link';
            border.id = element.innerHTML;
            element.classList.remove('link');
        }
        circleRadius = circleRadiusForElement(element.offsetWidth, element.offsetHeight);
        border.style.height = circleRadius*2;
        border.style.width = circleRadius*2;
        parent.replaceChild(border, element);
        border.appendChild(element);
        border.style.left = elePosRect.left - circleRadius + element.offsetWidth/2.0;
        border.style.top = elePosRect.top - circleRadius + element.offsetHeight/2.0;
        var borderPosRect = border.getBoundingClientRect();
        element.style.left = borderPosRect.left + border.offsetWidth/2.0;
        element.style.top = borderPosRect.top + border.offsetHeight/2.0;
        element.style.margin = String(element.offsetHeight*-0.5) + ' 0% 0% ' + String(element.offsetWidth*-0.5);
    }
}