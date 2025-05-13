// const fs = require('fs').promises;
// const path = require('path');
// const contactData = path.join(__dirname, "../data/contact.json");

// function setContact(data) {    
//     const addData = () => {
//         data = { id: contacts.length, name: data.name, email: data.email, message: data.message, newsletter: data.newsletter };
//         contacts.push(data);
//         fs.writeFile(contactData, JSON.stringify(contacts));
//     }

//     let contacts = []

//     fs.readFile(contactData, 'utf8')
//     .then((result) => {
//        contacts = JSON.parse(result);
//        addData();
//     }).catch((err) => {
//         if ( err.message.includes("no such file or directory") ) {
//             console.log("File will be created");
//             addData();          
//         }
//     });
// }

// module.exports = {
//     setContact
// };


const fs = require('fs').promises;
const path = require('path');
const contactData = path.join(__dirname, "../data/contact.json");

async function setContact(data) {
    try {
        let contacts = [];

        // Try to load existing data
        try {
            const file = await fs.readFile(contactData, 'utf8');
            contacts = JSON.parse(file);
        } catch (err) {
            if (!err.message.includes("no such file or directory")) {
                throw err; // Rethrow unexpected errors
            }
            console.log("Contact file not found. A new one will be created.");
        }

        // Create and add the new contact
        const newContact = {
            id: contacts.length,
            name: data.name,
            email: data.email,
            message: data.message,
            newsletter: data.newsletter
        };

        contacts.push(newContact);

        // Write updated contact list to file (pretty-printed)
        await fs.writeFile(contactData, JSON.stringify(contacts, null, 2));
    } catch (err) {
        console.error("Failed to save contact:", err);
        throw err;
    }
}

module.exports = { setContact };
