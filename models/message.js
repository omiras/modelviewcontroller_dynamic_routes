const db = require('../util/database')

module.exports = class Message {
    constructor(content, type) {
        this.content = content;
        this.date = new Date();
        this.type = type;
    }


    static async save(content, type) {
       
        const messages = db.getDB().collection('messages')
        const message = new Message(content, type)
        const result = await messages.insertOne(message)
        
        console.log("Id del documento insertado: ", result.id)
    }

    static fetchAll() {
        return []
    }

    static fetchById(id) {}

}