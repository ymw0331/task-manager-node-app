const mongoose = require( 'mongoose' )

const connectionURL = "mongodb+srv://wayne:wayne@cluster0.s18g6mj.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( connectionURL, {
  dbName: "task-manager-api",
  useNewUrlParser: true,
  useFindAndModify: false
}, ( error, client ) => {
  if ( error ) {
    return console.log( "Unable to connect to MongoDB!" )
  }
  console.log( "MongoDB connected!" )
} )