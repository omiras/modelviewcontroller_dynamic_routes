const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {

    MongoClient.connect('mongodb+srv://root:root@cluster0-lo8dg.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            console.log('<== Conectados a la base de datos correctamente ==>');
            _db = client.db();
            callback(); // The result will be the client Object of MongoDB
        })
        .catch(err => {
            console.log("Error al conectar a la BBDD: ", err);
            throw err;
        });
            
}

const getDb = () => {
    if (_db) {
        return _db;
    }

    throw 'No database found!';
}

const getMongoId = (id) => {
    return mongodb.ObjectID(id);
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
exports.getMongoId = getMongoId;