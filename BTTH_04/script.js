//xacs dinh cac ptu bi tac dong

var jFruit     =document.getElementById('txtFruit');
var jShowFruit =document.getElementById('btnShowFruit');
var jImgFruit  =document.getElementById('imgFruit');

//bat su kien
jShowFruit.addEventListener('click',showResult);
//khai bao chi tieet ham xu ly su kien
function showResult (){
    var getFruit =jFruit.value;
    jImgFruit.setAttribute('src',getFruit+'.jpeg')
}
//jquery cu phap: $(selector).Action() or jquery(selector).action()
// vd
// $(document).ready(function(){
//     $("#btnShowfruit").clck(function(){
//         let getFruit=$("txtFruit").val() ;
//         $("#imgFruit").attr('src',getFruit+'jpeg');
//     })
// })