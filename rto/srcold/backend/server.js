const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema and Model for Users
const userSchema = new mongoose.Schema({
  email: String,
  phone: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/signup', async (req, res) => {
  const { email, phone, password, reenterPassword } = req.body;

  if (password !== reenterPassword) {
    return res.status(400).send('Passwords do not match');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    phone,
    password: hashedPassword,
  });

  newUser.save()
    .then(() => res.status(201).send('User registered successfully'))
    .catch(err => res.status(500).send(err));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
