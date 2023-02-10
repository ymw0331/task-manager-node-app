const express = require( "express" )
require( "./db/mongoose" )
// "mongoose": "5.3.16",
const cors = require( "cors" )
const morgan = require( "morgan" )
const userRouter = require( "./routers/user" )
const taskRouter = require( "./routers/task" )


const app = express()
const port = process.env.PORT || 3000

// middleware
// app.use( ( req, res, next ) => {
//   if ( req.method === "GET" ) {
//     res.send( "GET requests are disabled." )
//   } else {
//     next()
//   }
// } )


app.use( cors() );
app.use( morgan( "dev" ) );
app.use( express.json() )
app.use( userRouter )
app.use( taskRouter )


app.listen( port, () => {
  console.log( "Server is up on port " + port )
} )

const Task = require( './models/task' )
const User = require( './models/user' )
const main = async () => {
  // const task = await Task.findById( '63e5b6ad15e96718c8af0101' )
  // await task.populate( 'owner' ).execPopulate()
  // console.log( task.owner )

  const user = await User.findById( '63e5b3cd8489432ab050f8d1' )
  await user.populate( 'tasks' )

  // console.log( user.tasks )

}

main()