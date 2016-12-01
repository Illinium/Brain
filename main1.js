window.onload = function(){
var arr = ['yellow', 'green', 'red', 'blue', 'white', 'black', 'grey', 'orange', 'violet', 'pink'];
var number = parseInt(Math.random()*10);

var randomColor = arr[number];
console.log(randomColor);

for(var i = 5; i > 0; i--){
var ask = prompt('Угадай цвет, у тебя есть ' + i +' попыток');
if(randomColor == ask){
	alert('You win!');
	break;
}if(i == 1){
	alert('You loose');
}
}








};