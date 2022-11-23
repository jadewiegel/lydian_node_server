const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'));

const quoteList = require('./modules/quoteList');

app.listen(port, () => {
    console.log('listening on port, ', port);
})

app.get('/quotes', function(req, res) {
    console.log('request for /quotes was made');
    res.send(quoteList);
} );




// control + c ---- will close the server

// C - create or post
// R - Read or get 
// U - Update or put
// D - Delete 