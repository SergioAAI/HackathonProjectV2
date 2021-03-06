// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const twilioNumber = process.env.TWILIO_NUMBER;
const testNumber = process.env.TEST_NUMBER;
const fetch = require('node-fetch');
const client = require('twilio')(accountSid, authToken);
const schedule = require('node-schedule');
var callsid;
var recordingsid;
var requestObject;

const sendMessage = (req, res) => {
  client.messages
    .create({
      body: 'this is from sendMessage',
      from: twilioNumber,
      to: `+1${req.body.ToNumber}`,
    })
    .then((message) => console.log(message.sid));
  res.sendStatus(200);
};

const sendVoice = (req, res) => {
  client.calls
    .create({
      twiml: `<Response><Say>Ahoy there ${req.body.name} !</Say></Response>`,
      from: twilioNumber,
      to: `+1${req.body.FromNumber}`,
    })
    .then((call) => console.log(call.sid));
};

const getRecording = (req, res) => {
  client.calls
    .create({
      record: true,
      recordingStatusCallbackMethod: 'POST',
      recordingStatusCallback:
        'https://ohboythisdomainwow.loca.lt/text/setTimer',
      url: 'http://demo.twilio.com/docs/voice.xml',
      from: twilioNumber,
      to: `+1${req.body.ToNumber}`,
    })
    .then((call) => (callsid = call.sid));
  requestObject = req.body;
  //console.log(call.subresourceUris.recordings)

  //callsid = call.sid
  //grab json file from here and read key values sid:CAXXXXXXXX
  /*client
    .calls(callsid)
    .recordings.create()
    .then((recording) => (recordingsid = recording.sid));*/
  res.sendStatus(200);
};

const setTimer = async (req, res) => {
  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls/${callsid}/Recordings.json`,
    {
      method: 'GET',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(accountSid + ':' + authToken).toString('base64'),
      },
    }
  );
  const data = await response.json();
  recordingsid = data.recordings[0].sid;
  const date = new Date(2022, 0, 30, 3, 17, 30);
  const job = schedule.scheduleJob(date, () => {
    // console.log(recordingsid);
    console.log(requestObject.ToNumber);
    client.messages
      .create({
        body: 'This is from sendRecording',
        from: twilioNumber,
        mediaUrl: [
          // 'https://api.twilio.com/2010-04-01/Accounts/AC13b6b79b9556236db2d1d0fe639c1759/Recordings/RE93f31679c75eb9fd9e666cc8ffb8dc5a.mp3',
          `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Recordings/${recordingsid}.mp3`,
        ],
        to: `+1${requestObject.ToNumber}`,
      })
      .then((message) => console.log(message.sid));
  });
  console.log(job);
  res.sendStatus(200);
};
const sendRecording = async (req, res) => {
  console.log(recordingsid);

  client.messages
    .create({
      body: 'This is from sendRecording',
      from: '+15818905304',
      mediaUrl: [
        //'https://api.twilio.com/2010-04-01/Accounts/AC13b6b79b9556236db2d1d0fe639c1759/Recordings/RE93f31679c75eb9fd9e666cc8ffb8dc5a.mp3',
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Recordings/${recordingsid}.mp3'`,
      ],
      to: `+1${req.body.ToNumber}`,
    })
    .then((message) => console.log(message.sid));
  res.sendStatus(200);
};

//turns method sendMessage into an object
module.exports = {
  sendMessage,
  sendVoice,
  sendRecording,
  getRecording,
  setTimer,
};
