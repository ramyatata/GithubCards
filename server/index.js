const express = require('express');
const server = express();
const path = require('path');
const PORT = 3030;

server.use(express.static(path.join(__dirname, '../client/dist')));

server.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//http:localhost3030


