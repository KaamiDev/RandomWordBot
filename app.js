require('dotenv').config();
const generateImg = require('./generateImage');
const getWord = require('./getWord');

const CronJob = require('cron').CronJob;

console.log('Cron job Staring...');
const job = new CronJob('*/5 * * * *', function() {
	getWord().then((word) => {
		generateImg(word);
	});
});
console.log('Cron job Started. Every 5 minutes.');
job.start();
