require('dotenv').config();
const express = require('express');
const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    console.log('Root route hit!');
    res.render('home');
})










app.get('*', (req, res) => {
    res.status(404).render('error404');
})

app.listen(process.env.PORT, function() {
    console.log('Server is running!');
})