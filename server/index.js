const express = require('express');
const path = require('path');
const app = express();

var distDir = '../dist';

app.use(express.static(path.join(__dirname, distDir)));
app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, distDir + '/index.html'));
});

var port = process.env.PORT || 5000;

app.listen(port, () => {
    console.info(`server started on port ${port}`);
});