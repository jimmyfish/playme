/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import Express from 'express';
import cron from 'cron';
import BodyParser from 'body-parser';
import Config from './configs/env.config';
import Common from './routes/admin';
import io from 'socket.io';
import Cors from 'cors';

const app = Express();
app.use(BodyParser.urlencoded({ extended: true }))
app.use(BodyParser.json());
app.use(Cors());

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Handle incoming messages
//   socket.on('message', (msg) => {
//       console.log('Message received:', msg);

//       // Broadcast the message to all connected clients
//       io.emit('message-broadcast', msg);
//   });

//   // Handle disconnection
//   socket.on('disconnect', () => {
//       console.log('A user disconnected');
//   });
// });

app.use('/', Common);

module.exports = app