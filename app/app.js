/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import Express from 'express';
import cron from 'cron';
import BodyParser from 'body-parser';
import Config from './configs/env.config';
import Common from './routes/admin';

const app = Express();
app.use(BodyParser.urlencoded({ extended: true }))
app.use(BodyParser.json());

app.use('/', Common);

module.exports = app