// destructure mongodb
const {
  MongoClient,
  ObjectID
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

  // Find 
  // db.collection( 'users' ).findOne( {
  //   // name: "Jen",
  //   // age: 28
  //   _id: new ObjectID( "63e379525a4b443ec0c961cd" )
  // }, ( error, user ) => {
  //   if ( error ) {
  //     return console.log( "Unable to fetch" )
  //   }

  //   console.log( "findOne ==>", user )
  // } )

  // cursor
  // db.collection( 'users' ).find( {
  //   age: 28
  // } ).toArray( ( error, users ) => {
  //   console.log( users )
  // } )

  // db.collection( 'users' ).find( {
  //   age: 28
  // } ).count( ( error, count ) => {
  //   console.log( count )
  // } )

  db.collection( 'tasks' ).findOne( {
    _id: new ObjectID( "63e37236a967f63a0ce6518c" )
  }, ( error, task ) => {
    if ( error ) {
      return console.log( "Unable to fetch" )
    }

    console.log( "findOne ==>", task )
  } )

  db.collection( 'tasks' ).find( {
    completed: false
  } ).toArray( ( error, tasks ) => {
    if ( error ) {
      return console.log( "Unable to fetch" )
    }

    console.log( "find ==>", tasks )
  } )

} )