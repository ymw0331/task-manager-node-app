const express = require( "express" )
require( "./db/mongoose" )
const cors = require( "cors" )
const morgan = require( "morgan" )
const userRouter = require( "./routers/user" )
const taskRouter = require( "./routers/task" )

const app = express()
const port = process.env.PORT || 3000
app.use( cors() );
app.use( morgan( "dev" ) );
app.use( express.json() )
app.use( userRouter )
app.use( taskRouter )




app.listen( port, () => {
  console.log( "Server is up on port " + port )
} )