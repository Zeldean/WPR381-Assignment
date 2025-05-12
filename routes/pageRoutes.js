// dummy Data
const events = [
    { id: 1, title: 'Coding Bootcamp', date: '2025-05-20', location: 'Online', image: '01.jpg' },
    { id: 2, title: 'Hackathon 2025', date: '2025-06-15', location: 'Campus', image: '02.jpg' },
    { id: 3, title: 'Tech Talks', date: '2025-07-10', location: 'Online', image: '03.jpg' },
    { id: 4, title: 'AI Workshop', date: '2025-08-22', location: 'Campus', image: '04.jpg' },
];

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