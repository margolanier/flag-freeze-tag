let action = require('./action.js');

module.exports = {
	
	watchFreeze: function(cb) {
		let dropdown = document.querySelectorAll('.selectRunner');
		dropdown.forEach(function(option) {
			option.addEventListener('change', function () {
				cb(option.value);
			});
		});
	},
	
	watchFlag: function(cb) {
		let flagBtn = document.querySelectorAll('.get-flag');
		flagBtn.forEach(function(button) {
			button.addEventListener('click', function() {
				// get value of runner li
				let buttonDiv = button.parentElement;
				let id = buttonDiv.parentElement.value;
				cb(id);
				
			});
		});
	},
	
	watchUnfreeze: function(cb) {
		let unfreezeBtn = document.querySelectorAll('.unfreeze');
		unfreezeBtn.forEach(function(button) {
			button.addEventListener('click', function() {
				// get value of runner li
				let buttonDiv = button.parentElement;
				let id = buttonDiv.parentElement.value;
				cb(id);
			});
		});
	},

};