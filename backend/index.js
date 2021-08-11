const cors = require('cors');
const express = require('express');
const cvBackendApp = express();
cvBackendApp.use(express.json());
cvBackendApp.use(cors());

const aboutRoutes = require('./routes/about');
const researchRoutes = require('./routes/research');
const contactRoutes = require('./routes/contact');
const headerRoutes = require('./routes/header');

// about
cvBackendApp.use('/api/about', aboutRoutes);
// research
cvBackendApp.use('/api/research', researchRoutes);
// contact
cvBackendApp.use('/api/contact', contactRoutes);
// navigation
cvBackendApp.use('/api/header', headerRoutes);

cvBackendApp.listen(4000);
