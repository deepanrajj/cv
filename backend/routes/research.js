const express = require('express');
const router = express.Router();

let research = {
    title: 'Research Topics',
    researchInfos: [
        {
            id: '1',
            title: 'Master Thesis - ToyAlive 2.0 : An Intelligent and Interactive App For Developing Senses and ' +
                'Real-Life Skills in Children Through Interaction With Real-World Objects',
            subtitle: 'October 2018 - March 2018',
            link: {
                name: 'Deutsches Forschungszentrum für Künstliche Intelligenz (DFKI) GmbH',
                target: '_blank',
                url: 'https://www.im-c.com/'
            },
            video: {
                src: '/assets/videos/ToyAlive_2.0.mp4',
                type: 'video/mp4',
                height: 250
            },
            about: '<ul><li>Developed interactive android app for children in the age group of 3 - 10 years using ' +
                'Andriod Studio 3.0 IDE with Android Software Development Kit (SDK) and Android Native Development Kit (NDK) ' +
                'components containing platform libraries.</li><li>Integrated Media Projection and YouTube Android Player ' +
                'API into the Manifest of the app.</li><li>Added new app components and also worked on the enhancement of ' +
                'existing app components to increase the performance of the app.</li><li>Updated the Views, Layouts of the ' +
                'app by adding animation and resources to be more interactive with the user.</li></ul>'
        },
        {
            id: '2',
            title: 'Seminar - Paper 1: Accurate, Robust, and Flexible Real-time Hand Tracking and Paper 2: ' +
                'Investigating the Dexterity of Multi Finger Input for Mid-Air Text Entry',
            subtitle: 'June 2016',
            link: {
                name: 'Human-Computer Interaction Department, TU Kaiserlautern',
                target: '_blank',
                url: 'https://www.im-c.com/'
            },
            about: '<ul><li>Paper 1 involves with real-time articulated hand tracker that combines fast learned ' +
                'reinitialization with model fitting based on stochastic optimization of a `golden\' objective ' +
                'function.</li><li>Paper 2 shows the applicability of the results by proposing an extension to ' +
                'multi-joint gestures and exploring its use in the multi-objective optimization of mid-air text ' +
                'entry methods.</li></ul>'
        },
        {
            id: '3',
            title: 'Team Based Software Development Project - Extending MyJob iPhone App of John Deere into ' +
                'Apple Watch Application',
            subtitle: 'October 2015 - December 2015',
            link: {
                name: 'Fraunhofer IESE, Kaiserslautern',
                target: '_blank',
                url: 'https://www.im-c.com/'
            },
            about: '<ul><li>Extended the functionalities of MyJob phone app into watch app using Xcode IDE and ' +
                'swift 2.0 language.</li><li>Created feature for defining the boundaries of the farm by utilizing the ' +
                'GPS sensor of the iPhone and marked the  GPS coordinates in the map of Apple Watch dynamically as ' +
                'boundaries of the field.</li></ul>'
        }
    ]
};

// /api/research => GET
router.get('/', (req, res) => {
    res.send(research).status(200);
});

module.exports = router;
