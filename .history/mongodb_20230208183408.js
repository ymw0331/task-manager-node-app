// CRUD create read update delete
// const mongodb = require( "mongodb" )
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// destructure mongodb
const {
  MongoClient
} = require( "mongodb" )

const connectionURL = "mongodb+srv://wayne:wayne@cluster0.s18g6mj.mongodb.net/?retryWrites=true&w=majority"
const databaseName = "task-manager"


MongoClient.connect( connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, ( error, client ) => {
  if ( error ) {
    return console.log( "Unable to connect to database!" )
  }
  console.log( "MongoDB Connected!" )

  const db = client.db( databaseName )


} )