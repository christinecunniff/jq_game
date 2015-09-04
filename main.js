$(document).on('ready', function(){

		playerHealth = $('.player').data('health');
		$('.player').text(playerHealth);

		$('.js-show-health').on('click', function(){
			alert($('.player').data('health'));
		})


});		// closes ready doc



var attack = function(){
	// decrease playerHealth by 10
	newHealth = playerHealth -10;
	console.log(newHealth);
	// update the DOM
	$('.player').text(newHealth);
	// also update the data-attribute
	$('.player').data('health', newHealth);
	playerHealth = newHealth;
}