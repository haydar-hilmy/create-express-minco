// app.js
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import coreRouter from './routes/index.js';
import { setupLiveReload } from './middleware/core/liveReload.js';
import { logRequest } from './middleware/core/logRequest.js';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

setupLiveReload(app);
console.log('mode: ', app.get('env'));
app.use(logRequest);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', coreRouter);

app.use((req, res, next) => {
  res.locals.env = req.app.get('env');
  next();
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.env = req.app.get('env');

  res.locals.error = {
    status: err.status,
    stack: req.app.get('env') === 'development' ? err.stack : null,
  };

  res.status(err.status || 500);
  res.render('error');
});


export default app;
