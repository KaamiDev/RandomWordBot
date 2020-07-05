const Twit = require('twit');

var T = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_KEY,
	access_token_secret: process.env.ACCESS_SECRET,
	timeout_ms: 60 * 1000,
	strictSSL: true
});

module.exports = (image) => {
	T.post('statuses/update', { status: 'My first tweet!' }, function(err, data, response) {});
};
