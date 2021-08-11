const express = require('express');
const router = express.Router();

let header = {
    menus: [
        {
            id: '1',
            url: 'about',
            tooltip: 'About',
            iconName: 'icon-briefcase'
        },
        {
            id: '2',
            url: 'research',
            tooltip: 'Research',
            iconName: 'icon-beaker'
        },
        {
            id: '3',
            url: 'contact',
            tooltip: 'Contact',
            iconName: 'icon-book'
        },
        {
            id: '4',
            url: '/assets/download/CV_Deepan.pdf',
            tooltip: 'Download CV',
            iconName: 'icon-cloud-download',
            download: 'CV'
        }
    ],
    person: {
        firstName: 'Deepan Raj',
        lastName: 'Jayaseelan',
        imageUrl: '/assets/images/person/deepan.jpg',
        profiles: [
            {
                url: 'https://www.xing.com/profile/DeepanRaj_Jayaseelan',
                iconName: 'icon-xing',
                target: '_blank'
            },
            {
                url: 'https://github.com/deepanrajj',
                iconName: 'icon-github',
                target: '_blank'
            }
        ]
    }
};

// /api/header => GET
router.get('/', (req, res) => {
    res.send(header).status(200);
});

module.exports = router;
