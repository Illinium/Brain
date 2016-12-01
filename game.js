window.onload = function(){

var arr = new Array(8);

for(var i = 0; i < arr.lenght; i++){
	arr[i] = new Array(8);
};

for(var col = 0; col < arr.length; col++){
	for(var row = 0; row < arr.length; row++){
		if((row + col) % 2 == 1){
			arr[row][col] = '<div style = "width:30px; heiht: 30px; background-color: white">'
		}else{
			arr[row][col] = '<div style = "width:30px; heiht: 30px; background-color: black">'
		}
	}
};

for(var col = 0; col < arr.length; col++){
	for(var row = 0; row < arr.length; row++){
		document.write(arr[row][col])
	}
	document.write('<br>');

}



}