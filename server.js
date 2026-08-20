const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname));

const uri = "mongodb+srv://mahmud013:Mahmud12323@cluster0.jfmmxer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch((err) => console.log('Database Connection Error:', err));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
