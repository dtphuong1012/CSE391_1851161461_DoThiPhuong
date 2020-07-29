$(document).ready(function(){
    $("#selector").on("change", function(){
        var ScaleNum = $(this).val();
        $(".square").html('');
        for ( let j=0; j<ScaleNum; j++){
            $('.square').append('<div class="square1"></div>');
        }
    })
})