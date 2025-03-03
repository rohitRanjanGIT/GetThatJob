const express = require('express');

const app = express();
const port = process.env.port;

app.get('/', (req, res) => {
    res.send('GET THAT JOB!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});