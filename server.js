const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register.js');
const signin = require('./controllers/signin.js');
const profile = require('./controllers/profile.js');
const image = require('./controllers/image.js');

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'nathangardner',
        password : 'Chintzi11',
        database : 'smart-brain',
    }
});

db.select('*').from('users').then(data => {
    
});

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send(database.users);
})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
         
app.get('/profile/:id', (reg, res) => { profile.handleProfile (req, res, db) })

app.put('/image', (req, res) => { image.handleImage (req, res, db )})

app.post('/imageurl', (req, res) => { image.handleApiCall (req, res)})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})