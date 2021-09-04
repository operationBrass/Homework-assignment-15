const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join('../public')));

app.use(routes);
  
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`)
    })
});



        
