// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const em = require('../utils/eventManager.js')



router.get('/', async (req, res) => {
    const events = await em.getEvents();
    res.render('pages/home', { events: events, displayDate: em.displayDate, cssFile: "home.css" })
});

router.get('/about', (req, res) => {
    const teamMembers = [
  {
    Name: "Dean Jacobus Andreas van Zyl",
    Role: "Team Lead/Backend Developer",
    Description: "Builds and maintains the server-side logic, databases, and APIs that power an application."
  },
  {
    Name: "Shaun de Beer",
    Role: "Frontend Developer",
    Description: "Designs and implements the visual and interactive parts of a website or application that users interact with."
  },
  {
    Name: "Reagile Motsepe",
    Role: "Data Manager",
    Description: "Oversees the collection, storage, and organization of data to ensure accuracy, accessibility, and security."
  },
  {
    Name: "Antwone Theresa Vis",
    Role: "Documentation Manager",
    Description: "Creates, organizes, and maintains technical and user documentation to ensure clear communication and knowledge sharing."
  }
];
    res.render('pages/about', {teamMembers , cssFile: "about.css" })
});


router.get('/events', async (req, res) => {
    const events = await em.getEvents();
    res.render('pages/events', { events: events, displayDate: em.displayDate, cssFile: "events.css" })
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', { cssFile: "contact.css" })
});

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou', { cssFile: "thankyou.css" })
});

module.exports = router;