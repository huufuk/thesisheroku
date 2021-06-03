const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://phucsy:123@login.ezfrs.mongodb.net/login?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connect to DB succesfully !');
    } catch (error) {
        console.log('Connect false !');
    }
}

module.exports = { connect };