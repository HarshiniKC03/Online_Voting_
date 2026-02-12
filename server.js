const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// ✅ Connect to MongoDB
mongoose.connect('mongodb+srv://Harshini:Harshini%40123@votingapp.c5i6fnp.mongodb.net/myDatabase?retryWrites=true&w=majority')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Serve start.html when visiting root (homepage)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// ✅ Serve all static frontend files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ API routes
const electionsRoute = require('./routes/elections');
app.use('/api/elections', electionsRoute);

// ✅ Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
