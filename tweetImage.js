const Twit = require('twit');

var T = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_KEY,
	access_token_secret: process.env.ACCESS_SECRET,
	timeout_ms: 60 * 1000,
	strictSSL: true
});

module.exports = (image, word) => {
	T.post('media/upload', { media_data: image }, function(err, data, response) {
		var mediaIdStr = data.media_id_string;
		var meta_params = { media_id: mediaIdStr };

		T.post('media/metadata/create', meta_params, function(err, data, response) {
			if (!err) {
				var params = { status: `Today's word: ${word}`, media_ids: [ mediaIdStr ] };

				T.post('statuses/update', params, function(err, data, response) {
					console.log('Tweeted Successfully. Word was ' + word);
				});
			} else {
				console.log(err);
			}
		});
	});
};
