import express from 'express';

const app = express();

// ? req method
// ?Create (POST)
// ?Read (GET)
// ?Edit (PUT/PATCH)
// ?Delete (DELETE)

// ? res
// ? status code
// ? success => 200-299
// ? error
// ? client side error => 400-499
// ? server side error => 500-599

// ? api
app.get('/', (req, res) => {
  return res.status(200).send('My first API');
});

app.get('/hi', (req, res) => {
  return res.status(200).send('Hi, Wassup?');
});

// network port and server
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
