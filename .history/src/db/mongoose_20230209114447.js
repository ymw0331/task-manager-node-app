const mongoose = require( 'mongoose' )

const connectionURL = "mongodb+srv://wayne:wayne@cluster0.s18g6mj.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( connectionURL, {
  dbName: "task-manager-api",
  useNewUrlParser: true
}, ( error, client ) => {
  if ( error ) {
    return console.log( "Unable to connect to MongoDB!" )
  }
  console.log( "MongoDB connected!" )
} )

const User = mongoose.model( "User", {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    validate(value)
  }
} )

const me = new User( {
  name: "Mike"
} )

me.save().then( () => {
  console.log( me )
} ).catch( ( error ) => {
  console.log( "Error!", error )
} )

// const Task = mongoose.model( "Task", {
//   description: {
//     type: String,
//     required: true
//   },
//   completed: {
//     type: Boolean
//   }
// } )

// const todayTasks = new Task( {
//   description: "Finish tutorial",
//   completed: false
// } )

// todayTasks.save().then( () => {
//   console.log( todayTasks )
// } ).catch( ( error ) => {
//   console.log( "Error!", error )
// } )