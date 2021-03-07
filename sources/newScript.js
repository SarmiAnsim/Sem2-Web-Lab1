$('#enter').click(function () {

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://voicerss-text-to-speech.p.rapidapi.com/?key=071a4a24b081477ab25386cb6d0b7ccf",
		"method": "POST",
		"headers": {
			"content-type": "application/x-www-form-urlencoded",
			"x-rapidapi-key": "9b147adebbmshb5d96c8d6d7a0b0p118371jsnb52290459755",
			"x-rapidapi-host": "voicerss-text-to-speech.p.rapidapi.com"
		},
		"data": {
			"c": $('#codec').val(),
			"src": $('#text').val(),
			"hl": $('#language').val(),
			"r": $('#speed').val(),
			"f": $('#format').val(),
			"b64": "true"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		$('audio').attr('src', response);
	});

});

