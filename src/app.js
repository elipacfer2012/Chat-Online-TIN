const express = require('express');
const app = express();

const path = require('path');

// puerto de configuracion
app.set('port', process.env.PORT || 3000);

// carpteas estaticas
app.use(express.static(path.join(__dirname, 'public')));

// iniciar el servidor
module.exports = app;
