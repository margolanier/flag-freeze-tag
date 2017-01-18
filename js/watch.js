//let action = require('./action.js');

module.exports = {
	
	// Add event listeners to 'freeze' selection (after chasers list is rendered)
	watchChasers: function(callback) {
		let dropdown = document.querySelectorAll('.selectRunner');
		/*http://stackoverflow.com/questions/24875414/addeventlistener-change-and-option-selection*/
		dropdown.forEach(function(option) {
			option.addEventListener('change', function() {
				//action.freezeRunner(option.value, runners);
				callback(option.value);
			});
		});
	},
	
	watchRunners: function() {
		let flagBtn = document.querySelectorAll('.get-flag');
		flagBtn.forEach(function(button) {
			button.addEventListener('click', function() {
				// get value of runner li
				let buttonDiv = button.parentElement;
				let id = buttonDiv.parentElement.value;
				action.captureFlag(id);
			});
		});
		
		let unfreezeBtn = document.querySelectorAll('.unfreeze');
		unfreezeBtn.forEach(function(button) {
			button.addEventListener('click', function() {
				// get value of runner li
				let buttonDiv = button.parentElement;
				let id = buttonDiv.parentElement.value;
				action.unfreezeRunner(id);
			});
		});
	},

};