const mongoose = require('mongoose');

const EtudiantSchema = mongoose.Schema({
    Id: Number,
    "First Name": String,
    "Last Name": String,
    Email: String,
    Gender: String,
    Country: String,
    City: String,
    "Birth Date": Date,
    "Origin Region": String,
    "Origin School": String,
    "Subscription Date": Date,
    "Exit Date": Date,
    "Hire Date": Date,
    "Study Domain": String,
    Mobility: String,
    "General Mean": Number,
    "Interruption Reason": String,
    Graduation: Boolean,
    Presence: String,
    "Internship Pro": String,
    "Contract Type": String,
    "Recrutment Nbr": Number,
    "Mail Supinfo": String,
    "Recrutment Salon": Boolean
});

module.exports = mongoose.model('Etudiant', EtudiantSchema);