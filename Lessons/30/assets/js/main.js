//task1
$(document).ready(function () {
    let tab = $('.container .tab_wrapper > div');
    tab.hide().filter(':first').show();


    $('.container .tabs_list a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('.container .tabs_list a').removeClass('active');
        $(this).addClass('active');
        return false;
    })
});



//task 2

$(document).ready(function () {
    let calcDisplay = $('.display');
    let calcButton = $('.button');
    let calcClear = $('.clear');
    let calcEqual = $('.key--equal');
    let calcSpace = $('.backspace');

    calcButton.on('click', function () {
        calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
    });

    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    calcEqual.on('click', function () {
        calcDisplay.val(eval(calcDisplay.val()));
    });

    calcSpace.on('click', function () {
        calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length - 1));
    });

});

$(document).ready(function () {
    $('div.rating').on('click', function () {
        $('div.rating').rating();
    });
});
