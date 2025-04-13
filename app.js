
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const callRoutes = require('./routes/callRoutes');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected"));

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/calls', callRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
