import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('pages', { type: 'text/css' }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './pages/index.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, './pages/signup.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
