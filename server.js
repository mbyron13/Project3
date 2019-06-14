const express = require('express');
var db = require("./models");

const routes = require('./routes');
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.use(cors());

app.use(routes);

db.sequelize.sync().then(function() {
app.listen(PORT, () => {
console.log(`API SERVER NOW LISTENING ON PORT ${PORT}!`);
});
});