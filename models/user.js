const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    category: {
        type: [{ type: Schema.Types.ObjectId, ref: 'NombramientoSacerdote' }],
        require: true
    },
    email: {
        type: String,
        require: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now()
    },
    DeletedAt: {
        type: Date
    },
});

module.exports = mongoose.model('User', UserSchema);