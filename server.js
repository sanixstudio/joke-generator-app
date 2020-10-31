const express = require('express');
const app = express();
const morgan = require('morgan');


app.use( morgan('dev') )
app.use( express.json() )
app.use( express.urlencoded({extended : true}) )
app.use( express.static('./views/') )


const apiRoutes = require('./controllers/api-routes.js');
const clientRoutes = require('./controllers/client-routes.js');
app.use('/api', apiRoutes)
app.use('/', clientRoutes)


const PORT = process.env.PORT || 5050;
app.listen(PORT, _ => console.log(
    'Test Server —',`http://localhost:${PORT}`
))