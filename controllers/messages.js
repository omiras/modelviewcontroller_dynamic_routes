const Message = require('../models/message');

function transformarTipoMensaje(type) {
    const transformacion = { 1 : "Importante", 2: "Normal", 3: "Invisible"};

    return transformacion[type];
}

exports.showDetailsPage = (req, res) => {
    const idMessage = req.params.idMessage;  
    console.log('Parámetro dinámico de la ruta:', idMessage);
    
    const messageObject = Message.getMessageById(idMessage);
    messageObject.typeMessageTxt = transformarTipoMensaje(messageObject.type);
    res.render('messageDetails', {
        message : messageObject
    });   
    
}

exports.showMainPage = (req, res) => {
    const allMessages = Message.getAllMessages("desc");
    res.render('index', {
        messages: allMessages
    });
}

exports.showFormPage = (req, res) => {
    res.render('formNewMessage.ejs');
}

exports.postFormParge = (req, res) => {

    const content = req.body.message;
    const type = req.body.type;

    const message = new Message(content, type);
    Message.addNewMessageToDatabase(message);
   
    res.redirect('/');
}