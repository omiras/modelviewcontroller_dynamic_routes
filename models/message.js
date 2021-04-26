module.exports = class Message {
    constructor(content, type) {
        this.content = content;
        this.date = new Date();
        this.type = type;
    }


    static save(content, type) {}

    static fetchAll() {}

    static fetchById(id) {}

}