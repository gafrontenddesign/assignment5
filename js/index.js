$(document).ready(function() {
	$('#submit-btn').click(changeBackground)
}); 

// $(document).ready(start)

// function start() {

// }

function changeBackground(event) {
	event.preventDefault();
	var city = $('#city-type').val();
	city = city.trim();
	if (city == 'New York City' || city =='New York' || city == 'NYC') {
		$('body').attr('class','nyc');
	}

	else if (city == 'San francisco' || city== 'SF' || city =='Bay Area') {
		$('body').attr('class','sf');
	}

	else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX' ){
		$('body').attr('class','la');
	}

	else if (city == 'Austin' || city == 'ATX'){
		$('body').attr('class','austin');
	}

	else if (city == 'Sydney' || city == 'SYD') {
		$('body').attr('class', 'sydney');
	}
	else {
		alert('Enter another city');
	}
}

