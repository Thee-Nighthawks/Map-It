import { MongoClient } from 'mongodb';


export class MongoDB {
    constructor(db_name, db_collection) {
        this.db_name = db_name;
        this.db_collection = db_collection;

        // "mongodb+srv://nighthawks:<password>@cluster0.zfmopfs.mongodb.net/?retryWrites=true&w=majority"
        // "mongodb+srv://nighthawks:nighthawks@cluster0.zfmopfs.mongodb.net/Map?retryWrites=true&w=majority";
        this.url = "mongodb://localhost:27017/"
            //this.url = "mongodb+srv://nighthawks:nighthawks@cluster0.ab5yjww.mongodb.net/?retryWrites=true&w=majority";
        new MongoClient(this.url, function(err, db) {
            if (err) return false;
            db.close();
            return true;
        });
    }

    add() {
        new MongoClient(this.url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(this.db_name);
            dbo.createCollection(this.db_collection, function(err, res) {
                if (err) throw err;
                db.close();
                return true
            });
            return false
        });
    }

    insert_user(userId, lat, long) {

        new MongoClient(this.url, function(err, db) {
            if (err) throw err;

            var dbo = db.db(this.db_name);
            var myobj = {
                userId: userId,
                lat: lat,
                long: long
            };
            dbo.collection(this.db_collection).insertOne(myobj, function(err, res) {
                if (err) throw err;
                db.close();
                return true;
            });
            return false;
        });
    }

    insert_task(no, long, lat, task, users) {
        new MongoClient(this.url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(this.db_name);
            var myobj = {
                no: no,
                long: long,
                lat: lat,
                task: task,
                users: users
            };
            dbo.collection(this.db_collection).insertOne(myobj, function(err, res) {
                if (err) throw err;
                db.close();
                return true;
            });
            return false;
        });
    }

    get_user(userId) {
        MongoClient(this.url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(this.db_name);
            var query = { userId: userId };
            dbo.collection(this.db_collection).find(query).toArray(function(err, result) {
                if (err) throw err;
                db.close();
                return true, result;
            });
            return false, result;
        });
    }

    get_task(no) {
        MongoClient(this.url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(this.db_name);
            var query = { no: no };
            dbo.collection(this.db_collection).find(query).toArray(function(err, result) {
                if (err) throw err;
                db.close();
                return true, result;
            });
            return false, result;
        });
    }

    // find() {
    //     For searching
    //     MongoClient.connect(this.url, function(err, db) {
    //         if (err) throw err;
    //         var dbo = db.db(this.db_name);
    //         dbo.collection(this.db_collection).findOne({}, function(err, result) {
    //             if (err) throw err;
    //             console.log(result.name);
    //             db.close();
    //             return true;
    //         });
    //         return false;
    //     });
    // }


    update(userId, lat, long) {
        // Update
        new MongoClient(this.url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(this.db_name);
            var myquery = { userId: userId };
            var newvalues = { $set: { lat: lat, long: long } };
            dbo.collection(this.db_collection).updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                db.close();
                return true;
            });
            return false;
        });
    }


    delete(userId) {
        new MongoClient(this.url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(this.db_name);
            var myquery = { userId: userId };
            dbo.collection(this.db_name).deleteOne(myquery, function(err, obj) {
                if (err) throw err;
                db.close();
                return true;
            });
            return false;
        });
    }
}


var mdb = new MongoDB('nighthawks', 'nighthawksLostM')
console.log(mdb.insert_user('12345', '71.2134', '82.1234'));
