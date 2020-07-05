require('dotenv').config();
const generateImg = require('./generateImage');
const getWord = require('./getWord');

getWord().then((word) => {
	generateImg(word);
});
