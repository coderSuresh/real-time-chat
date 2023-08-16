const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});

app.get('/chat', (req, res) => {
    res.send('Hello World!');
});