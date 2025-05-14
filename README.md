# Community Portal Web Application

## Overview

This project is a fully functional community portal website developed for the **WPR381** module. It is built using **Node.js**, **Express.js**, and **EJS**, and includes dynamic rendering, modular routing, a contact form with JSON storage, and a responsive, dark-themed design.

The portal consists of five main pages: Home, About, Events, Contact, and Thank You. Data for events and contact submissions is handled through JSON files on the server. The project meets all functional and structural requirements set out in the assignment specification.

---

## Technologies

- Node.js (v18+)
- Express.js (v4+)
- EJS (v3+)
- CSS3 (custom styling with dark theme)
- Nodemon (for development)
- Git & GitHub (version control and collaboration)

---

## Setup Instructions
1. Clone the repository to your local machine.
2. Install project dependencies:
```bash
   npm install
```
1. Start server using:
```bash
    npm run start
```
2. Open your browser and visit:
```
    http://localhost:3000
```


---

## Features
- ✅ Dynamic EJS rendering with partials (`header.ejs`, `footer.ejs`)
- ✅ Express routing via `pageRoutes.js`
- ✅ Contact form with server-side processing and JSON storage
- ✅ Dynamic event listing with expand/collapse descriptions
- ✅ Dark-themed responsive styling
- ✅ Organized folder structure for maintainability
- ✅ Nodemon for live server reload during development

---

## Folder Structure

```
├── app.js                  # Main Express server setup
├── routes/
│   └── pageRoutes.js       # Modular route definitions
├── views/
│   ├── pages/              # EJS page templates
│   └── partials/           # Shared header/footer
├── public/
│   ├── css/                # Custom CSS files
│   └── images/             # Static image assets
├── data/
│   ├── events.json         # Event data
│   └── contact.json        # Contact form submissions
├── utils/
│   ├── eventManager.js     # Event loading and formatting logic
│   └── contactManager.js   # Contact writing logic
└── package.json            # Project metadata and scripts
```

---

## Pages

|Path|Description|
|---|---|
|`/`|Home page with hero banner and preview of 3 upcoming events|
|`/about`|Static page describing the team and purpose of the portal|
|`/events`|Dynamically rendered list of all events, expandable for details|
|`/contact`|Contact form with validation and server-side handling|
|`/thankyou`|Redirect page shown after successful contact form submission|

---

## Contact Form Implementation

- Form fields: `name`, `email`, `message`, and `newsletter` checkbox
- Submissions are handled via a `POST` request to `/contact`
- Contact data is stored in `data/contact.json`
- Middleware `express.urlencoded()` is used to parse form data
- Contacts are assigned unique incremental `id`s

---

## GitHub Collaboration

- Git commits are tracked and reflect team progress
- `.gitignore` includes `node_modules/` and other irrelevant files
- Only essential files are included in the repository and final `.zip` submission

---

## Team Members

|Name|Student Number|Role|
|---|---|---|
|Dean van Zyl|600367|Team Lead, Backend|
|Reagile Motsepe|600665|Data Manager|
|Shaun de Beer|601245|Frontend Developer|
Other assigned members did not contribute and were not responsive during development.

---

## Submission Notes
- Final `.zip` submission excludes `node_modules/`
- All functional pages are included and fully working
- Project meets all assignment criteria in structure, routing, and functionality
- Peer evaluation submitted in `.zip`

## Peer Review
### Dean Jacobus Andreas van Zyl
| Category        | Member 1's Review | Reagile Motsepe | Member 3's Review |
| --------------- | ----------------- | ----------------- | ----------------- |
| Participation   |                   |         5          |        5           |
| Quality of Work |                   |         5         |         5          |
| Responsibility  |                   |         5          |        5           |
| Collaboration   |                   |         5          |        5           |
| Problem-Solving |                   |         5          |        5           |

### Reagile Motsepe
| Category        | Dean Jacobus Andreas van Zyl | Member 2's Review | Member 3's Review |
| --------------- | ----------------- | ----------------- | ----------------- |
| Participation   |        4           |                   |        5           |
| Quality of Work |        5           |                   |        5           |
| Responsibility  |        5           |                   |        5           |
| Collaboration   |        5           |                   |        5           |
| Problem-Solving |        4           |                   |        5           |

### Shaun de Beer
| Category        | Dean Jacobus Andreas van Zyl | Reagile Motsepe | Member 3's Review |
| --------------- | ----------------- | ----------------- | ----------------- |
| Participation   |         4          |         4          |                   |
| Quality of Work |         4          |         4          |                   |
| Responsibility  |         4          |         4          |                   |
| Collaboration   |         4          |         4          |                   |
| Problem-Solving |         4          |         3          |                   |

### Antwone Theresa Vis
| Category        | Dean Jacobus Andreas van Zyl | Reagile Motsepe | Member 3's Review |
| --------------- | ----------------- | ----------------- | ----------------- |
| Participation   |          0         |         0          |       0            |
| Quality of Work |           0        |         0          |       0            |
| Responsibility  |          0         |         0          |       0            |
| Collaboration   |          0         |         0          |       0            |
| Problem-Solving |          0         |         0          |       0            |

Member 1 - Dean Jacobus Andreas van Zyl
Member 2 - Reagile Motsepe
Member 3 - Shaun de Beer 
Member 4 - Antwone Theresa Vis