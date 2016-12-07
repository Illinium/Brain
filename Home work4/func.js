window.onload = function(){

/*var a = +prompt('Введите число а');
var b = +prompt('Введите число b');
var oper = prompt('Выберите что сделать с этими числами(делить, умножить, сложить, отнять )');

switch(oper){
	case 'умножить':
	document.write(a*b);
	break;

	case 'отнять':
	document.write(a-b);
	break;

	case 'сложить':
	document.write(a+b);
	break;

	case 'делить':
	document.write(a/b);
	break;

}*/


var hr =['<hr color="red">', '<hr color="blue">', '<hr color="yellow">', '<hr color="greu">', '<hr color="green">'];
function f(counter){

	counter--;
	var n = counter;
	document.write(hr[n]);

	if(counter != 0){
		f(counter);
	}
	document.write(hr[n]);
}
f(5);































}