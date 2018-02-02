var request = new XMLHttpRequest();

if(request) {
	request.addEventListener('readystatechange', function(){
		console.log(request.readyState);
		if(request.readyState === 4){
			console.log("Response text", request.responseText);
		}
	});
	request.open('GET', 'me.json', true);
	request.send();

}
