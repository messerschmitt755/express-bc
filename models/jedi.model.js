var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jediSchema = Schema( {
    name : String,
    power : Number,
    specialPower: String,
    resistance: Number,
    lightsaberColor: String,
    race: String,
    imagePath: String
});

var Jedi = mongoose.model('Jedi', jediSchema);
module.exports = Jedi;