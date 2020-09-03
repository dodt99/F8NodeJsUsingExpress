const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/F8_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        await console.log('Connect success!');
    } catch (err) {
        console.log('Connect fail!');
    }
}

module.exports = { connect };
