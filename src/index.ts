import serverless from 'serverless-http';
import cors from 'cors';
import express from 'express';
import cookies from 'cookie-parser';

import router from './router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: process.env.ALLOW_CORS_ORIGIN || '*',
  credentials: true,
}));
app.use(cookies());
app.use('/', router);

// eslint-disable-next-line import/prefer-default-export
export const api = serverless(app);
