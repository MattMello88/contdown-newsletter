const express = require('express');
const serveStatic = require('serve-static');
const path = require("path")

var app = express();

app.use(serveStatic(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`));