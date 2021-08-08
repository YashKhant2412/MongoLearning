const Student = require('../app/student');
const assert = require('assert');

describe('Create records',() => {
    it('Create a user in DB',(done) => {
        // assert(false);
        const Yash = new Student({name : "Yash"})
        Yash.save()
            .then(() => {
                assert(!Yash.isNew);
                done();
            })
            .catch(() => {
                console.log("Error");
            });
    });
});

