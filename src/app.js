import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);

//Rotas
import index from './routes/index';
import calcRoute from './routes/calcRoute';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/static', express.static(__dirname + '/public'));
app.use('/calc', calcRoute);

export default app;