document.addEventListener("DOMContentLoaded", function() {

	//data tooltip buttons
	document.querySelectorAll('[data-tooltip-text]').forEach(function(button) {
		button.addEventListener('click', function(event) {
			event.preventDefault(); 
			const btooltip = this; 
	
			btooltip.classList.add('tooltip-active'); 
	
			setTimeout(function() {
				btooltip.classList.remove('tooltip-active');
			}, 3000);
		});
	});

})