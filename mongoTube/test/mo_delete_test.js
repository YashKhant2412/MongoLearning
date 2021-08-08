const Student = require('../app/student');
const assert = require('assert');

describe("Delete Test",() => {
    let deleter;

    beforeEach((done) =>{
        deleter = new Student({name:"Dip"});
        deleter.save().then(()=>done());
    });

    it("Delete Successful",(done) => {
        Student.findByIdAndDelete(deleter._id)
            .then(() => Student.findOne({name:"Dip"}))
            .then((student) => {
                assert(student === null);
                done();
            });
    });
});