const mongoose = require( 'mongoose' )

const connectionURL = "mongodb+srv://wayne:wayne@cluster0.s18g6mj.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} )

const User = mongoose.model( "User", {
  name: {
    type: String
  },
  age: {
    type: Number
  }
} )

const me = new User( {
  name: "Wayne",
  age: 26
} )

me.save().then(() =>{

}).catch(error)