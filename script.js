var addEvent = document.addEventListener ? function(target,type,action){
    if(target){
        target.addEventListener(type,action,false);
    }
} : function(target,type,action){
    if(target){
        target.attachEvent('on' + type,action,false);
    }
}

addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===82){

      window.open("https://www.facebook.com/stefan.miodrag");
    }

});

addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===66){

      window.open("https://dribbble.com/stefanmiodrag");
    }

});

addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===84){

      window.open("https://twitter.com/stefanmiodrag");
    }

});
