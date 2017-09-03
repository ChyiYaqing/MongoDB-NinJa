const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Warning', error); 

        });
});

beforeEach((done) => {
    // empty Database 
    mongoose.connection.collections.users.drop(() => {
        // Ready to run the next test!
        done();
    });
});

// fat arrow  =>  like exec function 
