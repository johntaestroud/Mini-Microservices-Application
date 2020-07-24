// Application will be stored in memory resulting in loss of data if user restarts the service
// getting access to express
const express = require('express');

// ensuring data gets parsed and shows up appropriately
const bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

// requiring randombytes from the crypto package
const { randomBytes } = require('crypto');

// new app creation
const app = express();

const posts = {};

// associating two routes (GET and POST methods) with the app 
// respond with posts when a GET request is made to the homepage (index)
app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    //generating random id
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    // add new id
    posts[id] = {
        id, title
    };

    //sending a response back to the user. 201 - request has succeeded and a new resource is created
    res.status(201).send(posts[id]);
});

// ensuring the app is listening on a specific port (4000)
app.listen(4000, () => {
    console.log('Listening on 4000');
});