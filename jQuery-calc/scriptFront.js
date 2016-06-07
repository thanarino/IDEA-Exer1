$('document').ready(function(){
    /*
     *  FRONTEND
     */

    jQuery('<div/>', {
        class: 'container'
    }).appendTo('body');

    jQuery('<div/>', {
        class: 'row'
    }).appendTo('.container');

    jQuery('<div/>', {
        class: 'col s6 offset-s3',
        id:'panelpanel'
    }).appendTo('.row');

    jQuery('<div/>', {
        class: 'card-panel',
        style: 'padding-top: 0'
    }).appendTo('#panelpanel');

    //ANSWER BOX
    jQuery('<div/>', {
        class: 'row',
        id: 'answer_box',
        style: 'padding: 1vw; margin:0; font-size:4vw;'
    }).appendTo('.card-panel');

    jQuery('<div/>', {
        class: 'right-align',
        id: 'answer'
    }).appendTo('#answer_box');

    $('#answer').append(updateAnswer('0'));
    //--------------->

    //BUTTONS

    //ROW ONE
    jQuery('<div/>', {
        class: 'row center-align',
        id: 'row_one',
        style: 'padding: 0; margin:0;'
    }).appendTo('.card-panel');

    jQuery('<button/>', {
        id: 'button_seven',
        class: 'waves-effect waves-light btn-large center-align',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_one');
    $('#button_seven').append(document.createTextNode('7'));

    jQuery('<button/>', {
        id: 'button_eight',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_one');
    $('#button_eight').append(document.createTextNode('8'));

    jQuery('<button/>', {
        id: 'button_nine',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_one');
    $('#button_nine').append(document.createTextNode('9'));

    jQuery('<button/>', {
        id: 'button_div',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_one');
    $('#button_div').append(document.createTextNode('/'));

    //ROW TWO
    jQuery('<div/>', {
        class: 'row center-align',
        id: 'row_two',
        style: 'padding: 0; margin:0;'
    }).appendTo('.card-panel');

    jQuery('<button/>', {
        id: 'button_four',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_two');
    $('#button_four').append(document.createTextNode('4'));

    jQuery('<button/>', {
        id: 'button_five',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_two');
    $('#button_five').append(document.createTextNode('5'));

    jQuery('<button/>', {
        id: 'button_six',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_two');
    $('#button_six').append(document.createTextNode('6'));

    jQuery('<button/>', {
        id: 'button_mult',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_two');
    $('#button_mult').append(document.createTextNode('x'));

    //ROW THREE
    jQuery('<div/>', {
        class: 'row center-align',
        id: 'row_three',
        style: 'padding: 0; margin:0;'
    }).appendTo('.card-panel');

    jQuery('<button/>', {
        id: 'button_one',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_three');
    $('#button_one').append(document.createTextNode('1'));

    jQuery('<button/>', {
        id: 'button_two',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_three');
    $('#button_two').append(document.createTextNode('2'));

    jQuery('<button/>', {
        id: 'button_three',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_three');
    $('#button_three').append(document.createTextNode('3'));

    jQuery('<button/>', {
        id: 'button_sub',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_three');
    $('#button_sub').append(document.createTextNode('-'));

    //ROW FOUR
    jQuery('<div/>', {
        class: 'row center-align',
        id: 'row_four',
        style: 'padding: 0; margin:0;'
    }).appendTo('.card-panel');

    jQuery('<button/>', {
        id: 'button_open',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_four');
    $('#button_open').append(document.createTextNode('('));

    jQuery('<button/>', {
        id: 'button_close',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_four');
    $('#button_close').append(document.createTextNode(')'));

    jQuery('<button/>', {
        id: 'button_zero',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_four');
    $('#button_zero').append(document.createTextNode('0'));

    jQuery('<button/>', {
        id: 'button_plus',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_four');
    $('#button_plus').append(document.createTextNode('+'));

    //ROW FIVE
    jQuery('<div/>', {
        class: 'row center-align',
        id: 'row_five',
        style: 'padding: 0; margin:0;'
    }).appendTo('.card-panel');

    jQuery('<button/>', {
        id: 'button_erase',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 5vw;'
    }).appendTo('#row_five');
    $('#button_erase').append(document.createTextNode('C'));

    jQuery('<button/>', {
        id: 'button_equals',
        class: 'waves-effect waves-light btn-large',
        style: 'margin: .5vw; height: 5vw; width: 11vw;'
    }).appendTo('#row_five');
    $('#button_equals').append(document.createTextNode('='));

    /*
     *  BACKEND
     */
     $('#button_one').click(function(){
        updateAnswer('1');
     });

     $('#button_two').click(function(){
        updateAnswer('2');
     });

     $('#button_three').click(function(){
        updateAnswer('3');
     });

     $('#button_four').click(function(){
        updateAnswer('4');
     });

     $('#button_five').click(function(){
        updateAnswer('5');
     });

     $('#button_six').click(function(){
        updateAnswer('6');
     });

     $('#button_seven').click(function(){
        updateAnswer('7');
     });

     $('#button_eight').click(function(){
        updateAnswer('8');
     });

     $('#button_nine').click(function(){
        updateAnswer('9');
     });

     $('#button_zero').click(function(){
        updateAnswer('0');
     });

     $('#button_plus').click(function(){
        updateAnswer('+');
     });

     $('#button_sub').click(function(){
        updateAnswer('-');
     });

     $('#button_mult').click(function(){
        updateAnswer('*');
     });

     $('#button_div').click(function(){
        updateAnswer('/');
     });

     $('#button_open').click(function(){
        updateAnswer('(');
     });

     $('#button_close').click(function(){
        updateAnswer(')');
     });

     $('#button_equals').click(function(){
        solve();
     });

     $('#button_erase').click(function(){
        updateReset(0);
     });

    function updateAnswer(x){
        var answer;
        if(getAnswer() === '0'){
            answer = x;
        } else{
            answer = getAnswer() + x;
        }
        console.log(answer);
        $('#answer').text(answer);
    }

    function updateReset(x){
        var answer = x;
        console.log(answer);
        $('#answer').text(answer);
    }

    function getAnswer(){
        return $('#answer').text();
    }

    function solve(){
        var answer = eval(getAnswer());
        updateReset(answer);
    }

});