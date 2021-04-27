// El archivo app.js pasa a ser nuestro "script de inicio", y se encargará, en otras tareas, en registrar todo el 'middleware' de nuestra aplicación 
const express = require('express');
const uri = "mongodb+srv://root:root@cluster0.lo8dg.mongodb.net?retryWrites=true&w=majority"; 
const app = express();

app.set('view engine', 'ejs');

const errorController = require('./controllers/error');
const messagesRoutes = require('./routes/messages');
const { mongoConnect } = require('./util/database');


app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(messagesRoutes);

app.use(errorController.get404);

mongoConnect(uri, "messages", app.listen(3000))

