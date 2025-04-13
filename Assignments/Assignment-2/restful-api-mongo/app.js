const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // // Loads .env variables into process.env
const userRoutes = require('./routes/userRoutes')

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB is connected"))
.catch((err) => console.error("MongoDB is not Connected"));

//API Routes

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})