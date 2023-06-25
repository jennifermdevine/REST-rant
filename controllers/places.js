const router = require('express').Router()


router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) =>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/hthaiml.avif'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/codingcatcafe.avif'
    }]
    res.render('places/index', {places});
})

router.post('/', (req, res) => {
    // console.log(req.body)
    res.send('POST /places')
    // res.redirect('/places')
})

module.exports = router