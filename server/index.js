const express = require('express');
const path = require('path');
const app = express();

var distDir = '../dist';

app.use(express.static(path.join(__dirname, distDir)));
app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, distDir + '/index.html'));
});

app.listen(5000, () => {
    console.info(`server started on port 5000`);
});