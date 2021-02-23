const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/api-router');

mongoose.connect(
    'mongodb+srv://username:12345@infsys-ck4et.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Connection to MongoDB failed', err));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'access-token');
    res.header('Access-Control-Expose-Headers', 'access-token');
    next();
});

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.text({ type: 'text/plain', limit: '50mb' }));
app.use('/', apiRouter);

app.listen(3030, () => console.log('Server is running on port ' + 3030));

module.exports = app;
