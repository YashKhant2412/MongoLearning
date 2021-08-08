const mongoose = require('mongoose');
mongoose.Promis = global.Promis;   //ES6 - promise

before((done) => {
    mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true, useUnifiedTopology: true })

    mongoose.connection
        .once('open', () => {
            // console.log("Completed");
            done();
        })
        .on('error', (error) => {
            console.log("Your Error", error);
        });
});

beforeEach((done) => {
    mongoose.connection.collections.students.drop(() => {
        done();
   });
});