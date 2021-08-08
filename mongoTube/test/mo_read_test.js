const Student = require('../app/student');
const assert = require('assert');

describe('Read Test',() => {
    let reader;
    beforeEach((done) =>{
        reader = new Student({name:"Khushbu"});
        reader.save().then(() => {
            done();
        });
    });
    it("Read Suceessful", (done) => {
        Student.find({name:"Khushbu"}).then((students) => {
            assert(reader._id.toString() === students[0]._id.toString());
            done();
        });
    });
});