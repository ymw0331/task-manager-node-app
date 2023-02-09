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
  console.log( "MongoDB Connected!" )

  const db = client.db( databaseName )

  // db.collection( 'users' ).insertOne( {
  //   name: "Wayne",
  //   age: 26
  // }, ( error, result ) => {
  //   if ( error ) {
  //     return console.log( "Unable to insert user" )
  //   }

  //   console.log( result.ops )
  // } )

  // db.collection( 'users' ).insertMany( [ {
  //   name: "Jen",
  //   age: 28
  // }, {
  //   name: "Gurther",
  //   age: 27
  // } ], ( error, result ) => {
  //   if ( error ) {
  //     return console.log( "Unable to insert documents!" )
  //   }
  //   console.log( result.ops )

  // } )


  // db.collection( 'tasks' ).insertMany( [ {
  //   description: "Try to finish all tutorials",
  //   completed: true
  // }, {
  //   description: "Next stop for AWS developer certification",
  //   completed: false
  // }, {
  //   description: "Start looking for job!",
  //   completed: false
  // } ], ( error, result ) => {

  //   if ( error ) {
  //     return console.log( "Unable to insert documents!" )
  //   }
  //   console.log( result.ops )
  // } )
} )