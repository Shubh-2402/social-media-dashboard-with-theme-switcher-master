const toggle = document.querySelector(".toggler");
const body =document.querySelector("body");
var classValue;
toggle.addEventListener("click",function(){

    classValue = body.className;

    if(classValue==="light")
    {
        body.className="dark";
    }
    else{
        body.className="light"
    }
});


