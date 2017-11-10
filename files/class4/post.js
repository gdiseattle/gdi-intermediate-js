var request = new XMLHttpRequest();

if(request) {
	request.addEventListener('readystatechange', function(){
				console.log(request.readyState);
	});
	request.open('POST', '/', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send('name=Natalie+MacLees&message=JavaScript+is+awesome%21');
}
