const express = require('express');
import cron from 'cron';

const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {
    res.json('ok');
});

app.post('/story', (req, res) => {
    const { schedule } = req.body;
    console.log(schedule.start);

    res.json('done');
});


app.post('/send-notification' , (res, req) => {
    console.log('Notification Sent!');
});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
});