const mongoose = require( 'mongoose' )
require( 'dotenv' ).config()

const connectionURL = process.env.MONGODB_URL;

mongoose.set( "strictQuery", false );

mongoose.connect( connectionURL, {
  dbName: "task-manager-api",
}, ( error, client ) => {
  if ( error ) {
    return console.log( "Unable to connect to MongoDB!" )
  }
  console.log( "MongoDB connected!" )
} )