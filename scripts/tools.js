function centerToSelf(className) {
    var elements = document.getElementsByClassName(className);
    for(var i = 0; i < elements.length; i++){
        elements[i].style.margin = String(elements[i].offsetHeight/-2.0) + " 0% 0% " + String(elements[i].offsetWidth/-2.0);
    }
}