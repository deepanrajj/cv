const express = require('express');
const router = express.Router();

let contact = {
    title: 'Get in Touch',
    details: [
        {
            id: '1',
            title: 'Address',
            subtitle: 'Saarbrücken, Germany',
            iconName: 'icon-map-marker'
        },
        {
            id: '2',
            title: 'Mobile',
            subtitle: '+49 - 1798488654',
            iconName: 'icon-phone'
        },
        {
            id: '3',
            title: 'Email',
            iconName: 'icon-envelope',
            link: {
                url: 'deepanraj.j@gmail.com',
                name: 'deepanraj.j@gmail.com'
            }
        }
    ]
};

const messagesToBeSent = [];

// /api/contact => GET
router.get('/', (req, res) => {
    res.send(contact).status(200);
});

// /api/contact => POST
router.post('/', (req, res) => {
    const message = req.body.message;

    if (message) {
        console.log('Message to be sent:', message);
        messagesToBeSent.push(message);
        res.send().status(200);
    } else {
        res.send().status(404);
    }
});

module.exports = router;
