module.exports = (app) => {
    const etudiants = require('../controllers/etudiant.controller.js');

    // Retrieve all Etudiants
    app.get('/etudiants', etudiants.findAll);

    // Retrieve a single Etudiant with etudiantId
    app.get('/etudiants/:etudiantId', etudiants.findOne);

};