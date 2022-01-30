var mongodb = require("mongodb");

// FOR LOCAL DB
// var mongoUri = "mongodb://localhost:27017/gasrecord";


// FOR LIVE PRODUCTION
var mongoUri = process.env.MONGOLAB_URI;
var dbName = process.env.DB_NAME;
var db;
var initialized = false;

function connect() {
    mongodb.MongoClient.connect(mongoUri, function (err, client) {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        // Save database object from the callback for reuse.
        // TODO: HACK just defaulting db name here, should be passed by DB_NAME config var
        db = client.db(dbName || "heroku_app26282999");
        initialized = true;
        console.log("Database connection ready");
    });
}

function db() {
    if(initialized) {
        return db;
    }
    else {
        console.log("Could not return db, need to connect to mongodb first");
    }
}



module.exports = {
    connect: connect,
    db: db
};