// CRUD create read update delete
const mongodb = require( "mongodb" )

const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb+srv://wayne:wayne@cluster0.s18g6mj.mongodb.net/?retryWrites=true&w=majority"
const databaseName = "task-manager"


MongoClient.connect( connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, ( error, client ) => {
  if ( error ) {
    return console.log( "Unable to connect to database!" )
  }

  const db = client.db( databaseName )


  console.log( "Connected correctly!" )
} )