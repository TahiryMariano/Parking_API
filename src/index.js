const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const IndexRoutes = require('./routes/IndexRoutes');

dotenv.config();
const port = process.env.port || 5000;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/api', IndexRoutes);

//start express server
app.listen(port, () => console.log(`Express server has started on port ${port}`))
