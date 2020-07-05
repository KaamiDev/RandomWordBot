const axios = require('axios');

module.exports = async () => {
	try {
		let response = await axios.get('https://random-word-api.herokuapp.com/word');
		return response.data[0];
	} catch (err) {
		console.log(err);
	}
};
