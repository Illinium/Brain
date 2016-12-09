window.onload = function(){


function tv(name, width, heigth, screen){
	this.name = name;
	this.width = width;
	this.heigth = heigth;
	this.screen = screen;
	this.bluetooth = true;
	this.unableBluetooth = function(){
		this.bluetooth = false;
	};
	this.in = {
		hdmi: '2',
		usb: '3',
		dvd: 'no',
		vhs: '1'
	};

}

var samsung = new tv('samsung', '107cm', '62cm', '48\" ');

/*
function tab(){
	document.write('<table border="2px" cellspacing="0"><thead><td></td></thead><tbody>')
	for(var b in samsung){
		
		if(b == 'bluetooth'){
			if(samsung['bluetooth'] == true){
			document.write('<tr><td>' + b + '</td><td>Yes</td></tr>')
		}else{
			document.write('<tr><td>' + b + '</td><td>No</td></tr>')
		}
		}else if(b == 'in'){
			document.write('<tr><td>' + b + '</td><td><select>');
		for(var e in samsung['in']){
		document.write('<option>' +  e + '</option>');
	}
	document.write('</select></td></tr>')
	}else if(b == 'unableBluetooth'){

		document.write('<tr><td>' + b + '</td><td>bluetooth can be changed</td>')
	}else{
		document.write('<tr><td>' + b + '</td><td>' + samsung[b] + '</td></tr>')
	}
	}
	document.write('</tbody></table>');
}

 tab(samsung);
*/




function list(){
	document.write('<ul>')
	for(var b in samsung){
		
		if(b == 'bluetooth'){
			if(samsung['bluetooth'] == true){
			document.write('<li>Yes</li>')
		}else{
			document.write('<li>No</li>')
		}
		}else if(b == 'in'){
			document.write('<ol>');
		for(var e in samsung['in']){
		document.write('<li>' +  e + '</li>');
	}
	document.write('</ol>')
	}else if(b == 'unableBluetooth'){

		document.write('<li>bluetooth can be changed</li>')
	}else{
		document.write('<li>' + samsung[b] + '</li>')
	}
	}
	document.write('</ul>');
}

list(samsung);


























}