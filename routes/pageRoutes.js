// dummy Data
const fs = require('fs').promises;
const path = require('path');
let events = []
const eventsData = path.join(__dirname, "../data/events.json");

fs.readFile(eventsData)
.then( (data) => {
    events = JSON.parse(data)
    events = events.sort((a, b) => {
        return new Date(b.startDate) - new Date(a.startDate);
    });
})
.catch ( (err) => {
    console.log(`${err}`);
    events = []
})




// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home', { events: events, cssFile: "home.css" })
});

router.get('/about', (req, res) => {
    res.render('pages/about', { cssFile: "about.css" })
});

router.get('/events', (req, res) => {
    res.render('pages/events', { events: events, cssFile: "events.css" })
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', { cssFile: "contact.css" })
});

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou', { cssFile: "thankyou.css" })
});

module.exports = router;