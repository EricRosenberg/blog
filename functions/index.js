const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
		var ohp = [75, 80];
		var bench = [115, 120];
		var row = [110, 115];
		var deadlift = [225, 235];
		var bodyWeight = [193.4, 194.1, 193, 192.6, 192.3];

		for (i=0; i < bodyWeight.length; i++) {
			if (i >= ohp.length) {
				ohp[i] = ohp[ohp.length-1];
			}
			if (i >= bench.length) {
				bench[i] = bench[bench.length-1];
			}
			if (i >= row.length) {
				row[i] = row[row.length-1];
			}
			if (i >= deadlift.length) {
				deadlift[i] = deadlift[deadlift.length-1];
			}
		}
 		response.status(200).json({
 			'ohp' : ohp,
 			'bench' : bench,
 			'row' : row,
 			'deadlift' : deadlift,
 			'bodyWeight' : bodyWeight
 		});
});
