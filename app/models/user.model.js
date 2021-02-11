const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    boutique: { type: String, required: true },
    email: { type: String, unique: true,required: true },
    hash: { type: String, required: true },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);