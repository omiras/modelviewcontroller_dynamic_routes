const db = require('../util/database').getDB()

module.exports = class Message {
    constructor(content, type) {
        this.content = content;
        this.date = new Date();
        this.type = type;
    }


    static async save(content, type) {
        const messages = db.collection('messages')


    }

    static fetchAll() {
        return []
    }

    static fetchById(id) {}

}