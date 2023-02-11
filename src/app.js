const express = require( "express" )
require( "./db/mongoose" )
const cors = require( "cors" )
const morgan = require( "morgan" )
const userRouter = require( "./routers/user" )
const taskRouter = require( "./routers/task" )
require( 'dotenv' ).config()


const app = express()

app.use( cors() );
app.use( morgan( "dev" ) );
app.use( express.json() )
app.use( userRouter )
app.use( taskRouter )


module.exports = app