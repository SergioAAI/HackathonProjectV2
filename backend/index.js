require('dotenv').config();
const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const textRouter = require('./routes/text').router;

app.use(express.json());

app.use('/text', textRouter); //when localhost/text -> go to textrouter to check

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
