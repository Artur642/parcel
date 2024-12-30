const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.static('dist'));
app.use(bodyParser.json());

app.post('/feedback', (req, res) => {
  console.log('Feedback received:', req.body);
  res.send({ message: 'Feedback received!' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
