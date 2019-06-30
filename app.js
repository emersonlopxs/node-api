import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import auth from './controllers/authController.js';
import routes from './controllers/projectController.js';
import authMiddleware from './middlewares/auth.js';

app.use('/auth', auth);
app.use('/projects', authMiddleware, routes);

app.get('/', (req, res) => {
  res.json({
    message: 'hello world!'
  });
});

app.listen(5000, () => console.log('magic happens on port 5000'));
