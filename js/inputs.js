
$(document).ready(function () {
    $('#tfr').focus(function () {
        $('label[for=test-float-to-right]').addClass('move-right');
    });

   $('#tfr').blur(function (e) {
        if (!e.target.value) {
            $('label[for=test-float-to-right]').removeClass('move-right');
        }
    });


    $('#mup').focus(function () {
        $('label[for=test-move-up]').addClass('mup-expand');
    });

   $('#mup').blur(function (e) {
        if (!e.target.value) {
            $('label[for=test-move-up]').removeClass('mup-expand');
        }
    });

    $('#xplod').focus(function () {
        $('label[for=test-xplod]').addClass('xplod');
    });

   $('#xplod').blur(function (e) {
        if (!e.target.value) {
            $('label[for=test-xplod]').removeClass('xplod');
        }
    });
 
});
