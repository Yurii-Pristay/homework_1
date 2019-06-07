const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/api-router');

mongoose.connect(
    'mongodb+srv://username:fCr1CcXLFzrFbD6k@feedreader-celdd.mongodb.net/FeedReaderDB?retryWrites=true&w=majority',
    { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB'))
.catch(() => console.log('Connection to MongoDB failed'));

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
