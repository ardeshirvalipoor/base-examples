"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
exports.default = (dbUri, dbName) => {
    let db;
    const options = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    };
    const client = new mongodb_1.MongoClient(dbUri, options);
    function getDB(retries = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                // if (db) db.stats().then(info=>console.log({info}))
                // await client.connect();
                // const database = client.db('sample_mflix');
                // const movies = database.collection('movies');
                if (db)
                    return resolve(db);
                client.connect().then(connection => {
                    db = connection.db(dbName);
                    return resolve(db);
                }).catch((err) => __awaiter(this, void 0, void 0, function* () {
                    console.log('Retrying mongo connect', dbUri, err, retries);
                    if (retries < 1) {
                        console.log('Mongo conenct error', err);
                        return reject(err);
                    }
                    return yield getDB(--retries);
                }));
            });
        });
    }
    return {
        search(collectionName, indexName, query, sort = {}, skip = 0, limit = 25) {
            return __awaiter(this, void 0, void 0, function* () {
                const db = yield getDB();
                const q = [
                    {
                        '$search': {
                            'index': indexName,
                            'text': {
                                'query': `{ $text: { $search: ${query} } }`,
                                'path': {
                                    'wildcard': '*'
                                }
                            }
                        }
                    },
                    {
                        $limit: limit
                    },
                    {
                        $project: {
                            "_id": 0,
                        }
                    }
                ];
                return db.collection(collectionName).aggregate(q).toArray();
            });
        },
        find(collectionName, query, sort = {}, skip = 0, limit = 25) {
            return __awaiter(this, void 0, void 0, function* () {
                const db = yield getDB();
                const q = Array.isArray(query) ? query : [query];
                return db.collection(collectionName).find(...q).sort(sort).skip(+skip).limit(+limit).toArray();
            });
        },
        findOne(collectionName, query) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(query);
                const db = yield getDB();
                return db.collection(collectionName).findOne(query);
            });
        },
        aggregate(collectionName, query, sort) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const db = yield getDB();
                        let collection = db.collection(collectionName);
                        const docs = yield collection.aggregate(query).limit(50).toArray();
                        return resolve(docs);
                    }
                    catch (error) {
                        console.log('Code 2: ', error);
                        return reject(error);
                    }
                }));
            });
        },
        save(collectionName, item) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const db = yield getDB();
                        let collection = db.collection(collectionName);
                        const docs = yield collection.insertOne(item); // or at here?
                        // docs: {
                        //     acknowledged: true,
                        //         insertedId: new ObjectId("60ef5f573e014e54bf7b19f1")
                        // }
                        return resolve(Object.assign(Object.assign({}, item), { _id: docs === null || docs === void 0 ? void 0 : docs.insertedId })); //Todo: change to _id
                    }
                    catch (error) {
                        console.log('Code 3: ', error);
                        return reject(error);
                    }
                }));
            });
        },
        saveMany(collectionName, items) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const db = yield getDB();
                        let collection = db.collection(collectionName);
                        const docs = yield collection.insertMany(items);
                        return resolve({ results: 'inserted' });
                    }
                    catch (error) {
                        console.log('Code 3: ', error);
                        return reject(error);
                    }
                }));
            });
        },
        update(collectionName, query, item, options = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const db = yield getDB();
                        let collection = db.collection(collectionName);
                        const docs = yield collection.findOneAndUpdate(query, /* { $set: { ...item } */ item, options);
                        return resolve(docs); //Todo: change to _id
                    }
                    catch (error) {
                        console.log('Code 3: ', error);
                        return reject(error);
                    }
                }));
            });
        },
        updateMany(collectionName, query, item, options = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const db = yield getDB();
                        let collection = db.collection(collectionName);
                        const docs = yield collection.updateMany(query, /* { $set: { ...item } */ item, options);
                        return resolve(docs); //Todo: change to _id
                    }
                    catch (error) {
                        console.log('Code 3: ', error);
                        return reject(error);
                    }
                }));
            });
        },
        deleteMany(collectionName, query, options = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const db = yield getDB();
                        let collection = db.collection(collectionName);
                        const docs = yield collection.deleteMany(query, options);
                        return resolve(docs); //Todo: change to _id
                    }
                    catch (error) {
                        console.log('Code delete many: ', error);
                        return reject(error);
                    }
                }));
            });
        }
    };
};
