// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const em = require('../utils/eventManager.js')



router.get('/', async (req, res) => {
    const events = await em.getEvents();
    res.render('pages/home', { events: events, displayDate: em.displayDate, cssFile: "home.css" })
});

router.get('/about', (req, res) => {
    res.render('pages/about', { cssFile: "about.css" })
});

router.get('/events', (req, res) => {
    res.render('pages/events', { events: events, displayDate: em.displayDate, cssFile: "events.css" })
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', { cssFile: "contact.css" })
});

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou', { cssFile: "thankyou.css" })
});

module.exports = router;