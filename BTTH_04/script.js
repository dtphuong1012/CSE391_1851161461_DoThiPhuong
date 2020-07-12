//xacs dinh cac ptu bi tac dong

var jFruit     =document.getElementById('txtFruit');
var jShowFruit =document.getElementById('showFruit');
var jImgFruit  =document.getElementById('imgFruit');

//bat su kien
jShowFruit.addEventListener('click',showResult);
//khai bao chi tieet ham xu ly su kien
function showResult (){
    var getFruit =jFruit.value;
    jImgFruit.setAttribute('src',getFruit+'.jpeg')
}