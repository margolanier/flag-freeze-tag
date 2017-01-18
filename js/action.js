//let runners = require('./runners');

module.exports = {
	freezeRunner: function(id) {
		let target = runners.players[id - 1]; // player index = id - 1
		target.frozen = true;
		
		// toggle 'capture flag' or 'unfreeze' buttons depending on runner.frozen value
		render.printRunners(runners, listen.watchRunners);
		// refresh dropdown options to only show unfrozen runners
		render.printChasers(chasers, runners, listen.watchChasers);
	},
	captureFlag: function(id) {
		let target = runners.players[id - 1]; // player index = id - 1
		target.getFlag();
	},
	unfreezeRunner: function(id) {
		let target = runners.players[id - 1]; // player index = id - 1
		target.frozen = false;
		render.printRunners(runners, listen.watchRunners);
		render.printChasers(chasers, runners, listen.watchChasers);
	},
};