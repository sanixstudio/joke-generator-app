const express = require('express');
const app = express();


/* middleware */
const reload = require('./middleware/reload.js');
const morgan = require('morgan');
app.use( reload() )
app.use( morgan('dev') )
app.use( express.json() )
app.use( express.urlencoded({extended : true}) )
app.use( express.static('./views/') )


/* Paths/Routes */
const apiRoutes = require('./controllers/api-routes.js');
const clientRoutes = require('./controllers/client-routes.js');
app.use('/api', apiRoutes)
app.use('/', clientRoutes)


/* Error Handling */
const errors = require('./middleware/errors.js');
app.use( errors.pageNotFoundError )
app.use( errors.internalServerError )


/* Connection */
const PORT = process.env.PORT || 5050;
app.listen(PORT, _ => console.log(
    'Test Server —',`http://localhost:${PORT}`
))