import express from 'express';

const app = express();
const port = 3333;

app.get('/', (req, res) => res.send('Hello!!'));

app.listen(port, () => console.log('listening on 3333'));