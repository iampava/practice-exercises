const PORT = 8080;
const enableAuth = process.argv[2] === '--auth' ? true : false;
const enableCors = process.argv[2] === '--cors' ? true : false;
const enableDelay = process.argv.includes("--delay=true");


console.log(process.argv);
let token = null;

let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
let db = require('./server/db');

let app = express();

app.listen(PORT, () => {
    if (enableAuth) {
        console.log('\x1b[32m', `Server with dummy auth are listening on ${PORT}`);
    } else if (enableCors) {
        console.log('\x1b[32m', `CORS blocking server running on ${PORT}`);
    } else {
        console.log('\x1b[32m', `Listening on ${PORT}`);
    }
});

app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(function corsMiddleware(req, res, next) {
    if (enableCors) {
        res.setHeader('access-control-allow-origin', 'https://www.google.com');
    } else {
        res.setHeader('access-control-allow-origin', '*');
        res.setHeader('access-control-allow-headers', '*');
    }
    next();
});
app.use(function authMiddleware(req, res, next) {
    if (req.method !== "GET"  && req.url !== "/login" && !isAuth(req, res)) {
        res.status(401).send();
        res.end();
    } else {
        next();
    }
});

if (enableDelay) {
    app.use(function delayMiddleware(req, res, next) {
        setTimeout(next, 2000);
    });
}

/** APIs */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/pets', (req, res) => {
    if (req.query.pageNo) {
        db.getPetsPaginated(Number(req.query.pageNo), Number(req.query.pageSize), req.query.name).then(resp => res.json(resp));
        return;
    } else if (req.query.name) {
        db.getPetsByName(req.query.name).then(resp => res.json(resp));
        return;
    }
    db.getAllPets().then(resp => res.json(resp));
});

app.get('/pets/:id', (req, res) => {
    db.getPet(Number(req.params.id)).then(resp => res.json(resp), err => res.status(err).send());
});

app.post('/pets', (req, res) => {
    db.addPet(req.body).then(resp => res.json(resp));
});

app.put('/pets/:id', (req, res) => {
    db.replacePet(Number(req.params.id), req.body).then(resp => res.json(resp));
});

app.delete('/pets/:id', (req, res) => {
    db.deletePet(Number(req.params.id))
        .then(resp => res.status(200).send())
        .catch(err => res.status(err).send());
});

app.delete('/pets', (req, res) => {
    db.deletePets(req.body)
        .then(resp => res.status(200).send())
        .catch(err => res.status(err).send());
})

app.post('/login', (req, res) => {
    token = Buffer.from(Date.now().toString()).toString('base64');
    res.header('token', token)
        .status(200)
        .send();
});

app.post('/logout', (req, res) => {
    token = null;
    res.status(200).send();
});

function isAuth(req, res) {
    if (!enableAuth) {
        return true;
    }

    if (token === null || req.header('token') !== token) {
        return false;
    }
    return true;
}