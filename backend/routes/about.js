const express = require('express');
const router = express.Router();

let about = {
    expertiseInfo: {
      title: 'Area of Expertise',
      expertises: [
          {
              id: 'expertise_1',
              name: 'Frontend',
              percent: 90
          },
          {
              id: 'expertise_2',
              name: 'Backend',
              percent: 60
          },
          {
              id: 'expertise_3',
              name: 'Android',
              percent: 70
          }
      ]
    },
    skillInfo: {
        title: 'Skills',
        skills: [
            {
                id: 'skill_1',
                iconPath: '/assets/images/tools/html5.svg'
            },
            {
                id: 'skill_2',
                iconPath: '/assets/images/tools/css3.svg'
            },
            {
                id: 'skill_3',
                iconPath: '/assets/images/tools/javascript.svg'
            },
            {
                id: 'skill_4',
                iconPath: '/assets/images/tools/typescript.svg'
            },
            {
                id: 'skill_5',
                iconPath: '/assets/images/tools/angular.svg'
            },
            {
                id: 'skill_6',
                iconPath: '/assets/images/tools/sass.svg'
            },
            {
                id: 'skill_7',
                iconPath: '/assets/images/tools/nodejs.svg'
            },
            {
                id: 'skill_8',
                iconPath: '/assets/images/tools/intellij.svg'
            },
            {
                id: 'skill_9',
                iconPath: '/assets/images/tools/java.svg'
            },
            {
                id: 'skill_10',
                iconPath: '/assets/images/tools/github.svg'
            },
            {
                id: 'skill_11',
                iconPath: '/assets/images/tools/jira.svg'
            },
            {
                id: 'skill_12',
                iconPath: '/assets/images/tools/android.svg'
            },
            {
                id: 'skill_13',
                iconPath: '/assets/images/tools/less.svg'
            }
        ]
    },
    experience: {
        title: 'Experience',
        iconName: 'icon-briefcase',
        tileInfos: [
            {
                title: 'Software Developer',
                link: {
                    name: 'imc AG',
                    target: '_blank',
                    url: 'https://www.im-c.com/'
                },
                subtitle: '04 2019 - Present',
                highlight: true,
                about: '<ul><li>New Angular portal suite is based on HTML 5, SASS and Typescript.</li>' +
                    '<li>Behaviour-Driven software development process using javascript testing framework jasmine ' +
                    'and karma test runner.</li><li>Working with the issues in the code detected by SonarQube to ' +
                    'maintain code quality.</li><li>Working with tickets for the sprint using JIRA.</li><li>Project ' +
                    'processes based on SCRUM methodology with release sprint every two weeks.</li></ul>'
            },
            {
                title: 'HiWi (Working Student)',
                link: {
                    name: 'imc AG',
                    target: '_blank',
                    url: 'https://www.im-c.com/'
                },
                subtitle: '12 2018 - 04 2019'
            },
            {
                title: 'HiWi (Working Student)',
                link: {
                    name: 'SAP SE',
                    target: '_blank',
                    url: 'https://www.sap.com/corporate/en.html'
                },
                subtitle: '11 2015 - 03 2018',
                about: '<ul><li>Developed different eclipse plugins enclosing functionalities for the ease and better ' +
                    'understand-ability of the data to the user in the DITA CMS environment.</li><li>Designing and ' +
                    'creating the UI of the site for fetching and updating the values in the database.</li>' +
                    '<li>Documentation of user manual for the created eclipse plugins.</li></ul>'
            },
            {
                title: 'Senior Systems Engineer',
                link: {
                    name: 'Infosys Limited',
                    target: '_blank',
                    url: 'https://www.infosys.com/'
                },
                subtitle: '03 2011 - 09 2014',
                about: '<div><b>Project Summary:</b> Development of eCommerce site for Singapore Telecom<ul><li>Created front-end UI pages by using the Visual Designs for the site.</li><li>Developed servlets to call the Payment Gateway and responsible for integrating it to the site.</li><li>Developing of Adobe CQ5 components from Requirements to Testing phase.</li><li>Responsible for Adobe CQ5 training to the new joiners.</li></ul></div><div><b>Project Summary:</b> Development of Knowledge Management Portal for Saudi Telecom<ul><li>Developing of Wiki Modules using the IBM WebSphere portal.</li><li>Responsible for the creation of UI themes in the knowledge management portal.</li><li>Integrating IBM WebSphere portal with LDAP and also part of integrating IBM WebSphere Portal and IBM Connections.</li></ul></div>'
            }
        ]
    },
    education: {
        title: 'Education',
        iconName: 'icon-road',
        tileInfos: [
            {
                title: 'M.Sc. Computer Science (Software Engineering)',
                link: {
                    name: 'Technische Universität Kaiserslautern',
                    target: '_blank',
                    url: 'https://www.informatik.uni-kl.de/en/studium/studiengaenge/bm-inf/sp.ma/'
                },
                subtitle: '10 2014 - 03 2019'
            },
            {
                title: 'Bachelors in Computer Science and Engineering',
                link: {
                    name: 'Panimalar Engineering College',
                    target: '_blank',
                    url: 'https://www.panimalar.ac.in/CSE.html'
                },
                subtitle: '10 2014 - 03 2019'
            }
        ]
    }
};

// /api/about => GET
router.get('/', (req, res) => {
    res.send(about).status(200);
});

module.exports = router;
