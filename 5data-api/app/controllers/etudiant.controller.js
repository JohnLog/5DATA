const Etudiant = require('../models/etudiant.model.js');


// Retrieve and return all etudiants from the database.
exports.findAll = (req, res) => {
    Etudiant.find()
    .then(etudiants => {
        res.send(etudiants);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving etudiants."
        });
    });
};



// Find a single etudiant with a etudiantId
exports.findOne = (req, res) => {
    Etudiant.findById(req.params.etudiantId)
    .then(etudiant => {
        if(!etudiant) {
            return res.status(404).send({
                message: "Etudiant not found with id " + req.params.etudiantId
            });            
        }
        res.send(etudiant);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Etudiant not found with id " + req.params.etudiantId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving etudiant with id " + req.params.etudiantId
        });
    });
};
