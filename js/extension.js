document.getElementById('carinha-fofinha').select();

try {
  var successful = document.execCommand('copy');
  var msg = successful ? 'successful' : 'unsuccessful';
  console.log('Copying text command was ' + msg);
} catch (err) {
  sorry('Fail!', 'isso é muito triste bb ;-;');
}

function sorry(title, text){
	var h = document.createElement("h1");
	h.innerText = title;

	var p = document.createElement("p");
	p.innerText = text;

	document.body.appendChild(h);
	document.body.appendChild(p);
}