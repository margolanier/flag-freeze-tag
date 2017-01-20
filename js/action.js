let render = require('./render.js');

module.exports = function (runners, chasers) {
	return {
		freezeRunner: function (id, cb) {
			let target = runners.players[id - 1]; // player index = id - 1
			target.frozen = true;
			cb();
		},
		captureFlag: function (id, cb) {
			let target = runners.players[id - 1]; // player index = id - 1
			target.getFlag();
			cb();
		},
		unfreezeRunner: function (id, cb) {
			let target = runners.players[id - 1]; // player index = id - 1
			target.frozen = false;
			cb();
		},
	};
}