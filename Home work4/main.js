window.onload = function(){

function book(icon, model, mark, cpu, ram){
	this.icon = icon;
	this.model = model;
	this.mark = mark;
	this.cpu = cpu;
	this.ram = ram;
	this.touchpad = true;
	this.change = function(){
		this.touchpad = false;
	}
}



var compaq = new book('<img src="Presario.jpg" width="150" height="100px">', 'compaq', 'vision', '2duo', '4096Mb');
var hp = new book('<img src="hp.jpg" width="150" height="100px">', 'hp', 'pavilion', 'i3', '4096 Mb');
var mac = new book('<img src="mac.jpg" width="150" height="100px">', 'apple', 'imack', 'i5', '6144 Mb');

// for compaq
function printC(){
	document.write('<table width="200px" height = "400px" border="1px" cellspacing="0">');
	
	for(var p in compaq){
		if(p == 'icon'){
			document.write('<th>' + compaq[p] + '</th>');
		}else if(p == 'cpu'){
			document.write('<tr><td>' + p + '</td>' + '<td><select><option>' + compaq[p] +'</option><option>i3</option><option>i7</option></select></td></tr>');
		}else if(p == 'ram'){
			document.write('<tr><td>' + p + '</td>' + '<td><select><option>' + compaq[p] +'</option><option>8198Mb</option><option>2048Mb</option></select></td></tr>');
		}else if(p == 'touchpad'){
			if(compaq[p] === true){
				document.write('<tr><td>touchpad</td><td>On</td></tr>');
			}else if(compaq[p] === false){
				document.write('<tr><td>touchpad</td><td>Off</td></tr>');
			}
		}else if( p == 'change'){
			document.write('<tr><td>' + p + '</td><td>You can disable touchpad!</td></tr>')
		}else{
		
		document.write('<tr><td>' + p + '</td>' + '<td>' + compaq[p] +'</td></tr>');
	}
	}
	
document.write('</table>');
}


// for HP
function printH(){
	document.write('<table width="200px" height = "400px" border="1px" cellspacing="0">');
	
	for(var a in hp){
		if(a == 'icon'){
			document.write('<th>' + hp[a] + '</th>');
		}else if(a == 'cpu'){
			document.write('<tr><td>' + a + '</td>' + '<td><select><option>' + hp[a] +'</option><option>i3</option><option>i7</option></select></td></tr>');
		}else if(a == 'ram'){
			document.write('<tr><td>' + a + '</td>' + '<td><select><option>' + hp[a] +'</option><option>8198Mb</option><option>2048Mb</option></select></td></tr>');
		}else if(a == 'touchpad'){
			if(hp[a] === true){
				document.write('<tr><td>touchpad</td><td>On</td></tr>');
			}else if(hp[a] === false){
				document.write('<tr><td>touchpad</td><td>Off</td></tr>');
			}
		}else if( a == 'change'){
			document.write('<tr><td>' + a + '</td><td>You can disable touchpad!</td></tr>')
		}else{
		
		document.write('<tr><td>' + a + '</td>' + '<td>' + hp[a] +'</td></tr>');
	}
	}
	
document.write('</table>');
}



// for mac
function printM(){
	document.write('<table width="200px" height = "400px" border="1px" cellspacing="0">');
	
	for(var b in mac){
		if(p == 'icon'){
			document.write('<th>' + mac[b] + '</th>');
		}else if(b == 'cpu'){
			document.write('<tr><td>' + b + '</td>' + '<td><select><option>' + mac[b] +'</option><option>i3</option><option>i7</option></select></td></tr>');
		}else if(b == 'ram'){
			document.write('<tr><td>' + b + '</td>' + '<td><select><option>' + mac[b] +'</option><option>8198Mb</option><option>2048Mb</option></select></td></tr>');
		}else if(b == 'touchpad'){
			if(mac[b] === true){
				document.write('<tr><td>touchpad</td><td>On</td></tr>');
			}else if(mac[b] === false){
				document.write('<tr><td>touchpad</td><td>Off</td></tr>');
			}
		}else if( b == 'change'){
			document.write('<tr><td>' + b + '</td><td>You can disable touchpad!</td></tr>')
		}else{
		
		document.write('<tr><td>' + b + '</td>' + '<td>' + mac[b] +'</td></tr>');
	}
	}
	
document.write('</table>');
}

compaq.change();
printC();

















}