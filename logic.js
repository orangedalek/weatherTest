$(document).ready(function() {
    console.log( "ready!" );



    function displayForecast(){
    	event.preventDefault();
    	var zip = $("#zip-input").val();
    	var queryURL =  "http://api.openweathermap.org/data/2.5/forecast?zip=" + zip + "&units=imperial&APPID=0ba0a231524f159446f63a58439ab0fa ";
		console.log("zip=============" + zip);
		$.ajax({
		url: queryURL,
		dataType: 'json',
		method: "GET"
	}).done(function(data){


		console.log("results =  " + JSON.stringify(data.list[1].weather[0].description));

		var cityDiv = $('<div class = "cityName">');
		var CN = data.city.name;

		cityDiv.append(CN);

		$('#city').append(cityDiv);


		for (var i = 0; i < data.list.length; i++) {
			
			var timeDiv = $('<div class = "timeywimey">');
			var tm = String(data.list[i].dt_txt);
			var convTime = moment(moment.utc(tm)).toDate();
			var frmTime = moment(convTime).format("dddd, MMMM Do YYYY, hh:mm a");

			timeDiv.append(frmTime);
			$('#time').append(timeDiv);
		


		
			var tdiv = $('<div class="t1">');
			var dt = data.list[i].main.temp;

			tdiv.append(dt);

			$('#temp').append(tdiv);
		

		
			var windDiv = $('<div class = "windy">');
			var WS = data.list[i].wind.speed;

			windDiv.append(WS);
			$('#wind').append(windDiv);
		

		
			var moistDiv = $('<div class = "moist" >');
			var HM = data.list[i].main.humidity;

			moistDiv.append(HM);
			$('#humidity').append(moistDiv);
		

		
			var condDiv = $('<div class = "cond" >');
			var CD = data.list[i].weather[0].description;

			condDiv.append(CD);
			$('#conditions').append(condDiv);
		}
	});
	}


	$('#add-zip').on("click", displayForecast);



});