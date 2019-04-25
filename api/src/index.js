import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import createRouter from './router';

dotenv.config();

const port = '8080';

const app = express();
const router = express.Router();

createRouter(router);

app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.use((req, res, next) => {
  next();
});


app.use('/api/v1', router);
app.listen(port);
