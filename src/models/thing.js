'use strict';

//Class syntax has uppercase and provides us woth structure and readibility
// this is an inline data model
class ThingsModel {
    constructor() {
        this.id = 0;
        this.db = []
    }
    // READ == will work in 2 ways for returning all items in the db or a specific item in the db
    // if GET is empty it will bring back everything from the db. If it has something in it, it will bring back that specific item
    // In here we are making routes with db interactions in them
    get(id) {
        if(id) {
            return this.db.find(record => record.id === id);
        } else {
            return this.db;
        }
    }

    // CREATE === When we create something we increment (++id) the id, hold the thing given to the db item, then push it up to the db
    // http:localhost: 3333/stuff
    //req.body.name: = 'Clement'
    //req.body.age: = 55;

    // app.get('/stuff', (req, res) => {

    // };

    create(obj) {
        let record = {
            id: ++this.id,
            record: obj
        }
        //The model of the record is as follows --> { id: 1, record: {name: 'Clement', age: 55 }}
        this.db.push(record);
        return record;
    }

    // UPDATE
    // update(id, obj) {
    //     if(id) {
    //         return obj
    //     }
    // }
    // DELETE
//     delete(id) {
//         if(id) {
//             return null;
//         }
//     }
}

module.exports = ThingsModel;