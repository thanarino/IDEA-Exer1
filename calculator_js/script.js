//CARDPANEL
var body = document.getElementsByTagName("BODY")[0];
var outer_div_container = document.createElement("DIV");
var outer_div_row = document.createElement("DIV");
var outer_div_col = document.createElement("DIV");
var outer_div_cardpanel = document.createElement("DIV");

outer_div_container.className = 'container';
outer_div_row.className = 'row';
outer_div_col.className = 'col s6 offset-s3';
outer_div_cardpanel.className = 'card-panel';

outer_div_col.setAttribute("id", "panelpanel");
outer_div_cardpanel.setAttribute("style","padding-top:0");

body.appendChild(outer_div_container);
outer_div_container.appendChild(outer_div_row);
outer_div_row.appendChild(outer_div_col);
outer_div_col.appendChild(outer_div_cardpanel);

//ANSWER BOX
var ansbox_row = document.createElement("DIV");
var ansbox_align = document.createElement("DIV");
var default_ansboxval = document.createTextNode("0");

ansbox_row.className = 'row';
ansbox_align.className = 'right-align';

ansbox_row.setAttribute("id", "answer_box");
ansbox_row.setAttribute("style","padding: 1vw; margin:0; font-size:4vw;");
ansbox_align.setAttribute("id","answer");

outer_div_cardpanel.appendChild(ansbox_row);
ansbox_row.appendChild(ansbox_align);
ansbox_align.appendChild(default_ansboxval);

//BUTTON ROW ONE
var row_one = document.createElement("DIV");
var button_seven = document.createElement("BUTTON");
var button_eight = document.createElement("BUTTON");
var button_nine = document.createElement("BUTTON");
var button_div = document.createElement("BUTTON");
var text_seven = document.createTextNode("7");
var text_eight = document.createTextNode("8");
var text_nine = document.createTextNode("9");
var text_div = document.createTextNode("/");

row_one.className = 'row center-align';
button_seven.className = 'waves-effect waves-light btn-large center-align red';
button_eight.className = 'waves-effect waves-light btn-large red';
button_nine.className = 'waves-effect waves-light btn-large red';
button_div.className = 'waves-effect waves-light btn-large red darken-2';

button_seven.appendChild(text_seven);
button_eight.appendChild(text_eight);
button_nine.appendChild(text_nine);
button_div.appendChild(text_div);

outer_div_cardpanel.appendChild(row_one);
row_one.appendChild(button_seven);
row_one.appendChild(button_eight);
row_one.appendChild(button_nine);
row_one.appendChild(button_div);

//BUTTON ROW TWO
var row_two = document.createElement("DIV");
var button_four = document.createElement("BUTTON");
var button_five = document.createElement("BUTTON");
var button_six = document.createElement("BUTTON");
var button_mult = document.createElement("BUTTON");
var text_four = document.createTextNode("4");
var text_five = document.createTextNode("5");
var text_six = document.createTextNode("6");
var text_mult = document.createTextNode("x");

row_two.className = 'row center-align';
button_four.className = 'waves-effect waves-light btn-large center-align red';
button_five.className = 'waves-effect waves-light btn-large red';
button_six.className = 'waves-effect waves-light btn-large red';
button_mult.className = 'waves-effect waves-light btn-large red darken-2';

button_four.appendChild(text_four);
button_five.appendChild(text_five);
button_six.appendChild(text_six);
button_mult.appendChild(text_mult);

outer_div_cardpanel.appendChild(row_two);
row_two.appendChild(button_four);
row_two.appendChild(button_five);
row_two.appendChild(button_six);
row_two.appendChild(button_mult);

//BUTTON ROW THREE
var row_three = document.createElement("DIV");
var button_one = document.createElement("BUTTON");
var button_two = document.createElement("BUTTON");
var button_three = document.createElement("BUTTON");
var button_sub = document.createElement("BUTTON");
var text_one = document.createTextNode("1");
var text_two = document.createTextNode("2");
var text_three = document.createTextNode("3");
var text_sub = document.createTextNode("-");

row_three.className = 'row center-align';
button_one.className = 'waves-effect waves-light btn-large center-align red';
button_two.className = 'waves-effect waves-light btn-large red';
button_three.className = 'waves-effect waves-light btn-large red';
button_sub.className = 'waves-effect waves-light btn-large red darken-2';

button_one.appendChild(text_one);
button_two.appendChild(text_two);
button_three.appendChild(text_three);
button_sub.appendChild(text_sub);

outer_div_cardpanel.appendChild(row_three);
row_three.appendChild(button_one);
row_three.appendChild(button_two);
row_three.appendChild(button_three);
row_three.appendChild(button_sub);

//BUTTON ROW FOUR
var row_four = document.createElement("DIV");
var button_open = document.createElement("BUTTON");
var button_close = document.createElement("BUTTON");
var button_zero = document.createElement("BUTTON");
var button_add = document.createElement("BUTTON");
var text_open = document.createTextNode("(");
var text_close = document.createTextNode(")");
var text_zero = document.createTextNode("0");
var text_add = document.createTextNode("+");

row_four.className = 'row center-align';
button_open.className = 'waves-effect waves-light btn-large center-align red darken-1';
button_close.className = 'waves-effect waves-light btn-large red darken-1';
button_zero.className = 'waves-effect waves-light btn-large red';
button_add.className = 'waves-effect waves-light btn-large red darken-2';

button_open.appendChild(text_open);
button_close.appendChild(text_close);
button_zero.appendChild(text_zero);
button_add.appendChild(text_add);

outer_div_cardpanel.appendChild(row_four);
row_four.appendChild(button_open);
row_four.appendChild(button_close);
row_four.appendChild(button_zero);
row_four.appendChild(button_add);

//BUTTON ROW FIVE
var row_five = document.createElement("DIV");
var button_erase = document.createElement("BUTTON");
var button_equals = document.createElement("BUTTON");
var text_erase = document.createTextNode("C");
var text_equals = document.createTextNode("=");

row_five.className = 'row center-align';
button_erase.className = 'waves-effect waves-light btn-large center-align red darken-2';
button_equals.className = 'waves-effect waves-light btn-large red darken-4';

button_erase.appendChild(text_erase);
button_equals.appendChild(text_equals);

outer_div_cardpanel.appendChild(row_five);
row_five.appendChild(button_erase);
row_five.appendChild(button_equals);

button_equals.setAttribute("style", "width: 11vw;");

//BACKEND

button_one.onclick = function(){
	updateAnswer('1');
};

button_two.onclick = function(){
	updateAnswer('2');
};

button_three.onclick = function(){
	updateAnswer('3');
};

button_four.onclick = function(){
	updateAnswer('4');
};

button_five.onclick = function(){
	updateAnswer('5');
};

button_six.onclick = function(){
	updateAnswer('6');
};

button_seven.onclick = function(){
	updateAnswer('7');
};

button_eight.onclick = function(){
	updateAnswer('8');
};

button_nine.onclick = function(){
	updateAnswer('9');
};

button_zero.onclick = function(){
	updateAnswer('0');
};

button_add.onclick = function(){
	updateAnswer('+');
};

button_sub.onclick = function(){
	updateAnswer('-');
};

button_div.onclick = function(){
	updateAnswer('/');
};

button_mult.onclick = function(){
	updateAnswer('*');
};

button_open.onclick = function(){
	updateAnswer('(');
};

button_close.onclick = function(){
	updateAnswer(')');
};

button_erase.onclick = function(){
	updateReset(0);
};

button_equals.onclick = function(){
	solve();
};

function updateAnswer(x){
    var answer;
    if(getAnswer() === '0'){
        answer = x;
    } else{
        answer = getAnswer() + x;
    }
    console.log(answer);
    default_ansboxval.nodeValue = answer;
    //$('#answer').text(answer);
}

function updateReset(x){
    var answer = x;
    console.log(answer);
    default_ansboxval.nodeValue = answer;
    //$('#answer').text(answer);
}

function getAnswer(){
    return default_ansboxval.nodeValue;
    //return $('#answer').text();
}

function solve(){
    var answer = eval(getAnswer());
    updateReset(answer);
}


