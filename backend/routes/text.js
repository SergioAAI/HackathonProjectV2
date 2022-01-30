//

const express = require('express');
const router = express.Router();
const sender = require('../send_sms.js'); //goes to
router.use(express.json());

// router.post('/text', (req, res) => {
//   sender.sendRecording;
// });
router.get('/123', sender.sendRecording);
router.get('/sendMessage', sender.sendMessage);
router.get('/test', sender.getRecording);
router.post('/abc', sender.sendVoice); //execute whatever function is in here when u go to that endpoint
router.get('/timer', sender.setTimer);

module.exports = {
  router: router,
};
