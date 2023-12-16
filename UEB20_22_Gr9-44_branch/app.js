const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.join(__dirname, 'public')));
