//

const express = require('express');
const router = express.Router();
const sender = require('../send_sms.js'); //goes to
router.use(express.json());

// router.post('/text', (req, res) => {
//   sender.sendRecording;
// });
router.get('/sendRecording', sender.sendRecording);
router.get('/sendMessage', sender.sendMessage);
router.get('/getRecording', sender.getRecording);
router.post('/sendVoice', sender.sendVoice); //execute whatever function is in here when u go to that endpoint
router.post('/setTimer', sender.setTimer);

router.get('/console', (req, res) => {
  console.log(req.body);
});

module.exports = {
  router: router,
};
