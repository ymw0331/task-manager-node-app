const mongoose = require( 'mongoose' )
require( 'dotenv' ).config()

const connectionURL = process.env.connectionURL;


mongoose.set( "strictQuery", false );

mongoose.connect( connectionURL, {
  dbName: "task-manager-api",
  // useNewUrlParser: true,
  // useFindAndModify: false,
  // useCreateIndex: true
}, ( error, client ) => {
  if ( error ) {
    return console.log( "Unable to connect to MongoDB!" )
  }
  console.log( "MongoDB connected!" )
} )