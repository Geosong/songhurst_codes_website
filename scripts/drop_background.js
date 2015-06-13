//## Global Variables ################################################

var isWebkit = 'WebkitAppearance' in document.documentElement.style;

//## Functions ################################################

function randEle(e){
    var radius = Math.random()*170;
    e.style.borderColor = "hsl( " + String(Math.random()*360) + ", 45%, 30%)";
    e.style.height = radius;
    e.style.width = radius;
    if (isWebkit == true){
        e.style.left = Math.random()*(window.innerWidth-e.offsetWidth);
        e.style.top = Math.random()*(window.innerHeight-e.offsetHeight);
    } else {
        e.style.left = Math.random()*(document.body.clientWidth-e.offsetWidth);
        e.style.top = Math.random()*(document.body.clientHeight-e.offsetHeight);
    }
}

function init_background(dropCount){
    for(var i = 0; i < dropCount; i++) {
        var drop = document.createElement('div');
        drop.setAttribute('class', 'drop');
        document.body.appendChild(drop);
        var rand = String((Math.random()*5)+1)+'s'
        if (isWebkit == true){
            drop.style.webkitAnimationDuration = rand;
            drop.addEventListener('webkitAnimationStart', function(e){randEle(this);}, false);
            drop.addEventListener('webkitAnimationIteration', function(e){randEle(this);}, false);
        } else {
            drop.style.animationDuration = rand;
            drop.addEventListener('animationstart', function(e){randEle(this);}, false);
            drop.addEventListener('animationiteration', function(e){randEle(this);}, false);
        }
    }
}