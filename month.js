window.onload = function(){

var arr = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

var ask = prompt('введите время года!').toLowerCase();

if(ask === "зима"){
document.write(arr[11]+ '<br>',arr[0]+ '<br>',arr[1])

	


}if(ask === "весна"){
document.write(arr[2] + '<br>',arr[3]+ '<br>',arr[4])
	

}if(ask === "лето"){
document.write(arr[5] + '<br>',arr[6]+ '<br>',arr[7])
		


}if(ask === "осень"){
document.write(arr[8] + '<br>',arr[9]+ '<br>',arr[10])
		

}



















}