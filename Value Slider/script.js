var slider=document.getElementById("rangeValue");
var btn=document.getElementById("result");
btn.innerHTML=slider.value;
slider.oninput=function(){
    btn.innerHTML=this.value;
}