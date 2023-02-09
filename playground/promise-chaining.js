require( '../src/db/mongoose' )
const User = require( "../src/db/models/user" )


// 63e46ed02d1cc35c84d50269


User.findByIdAndUpdate( '63e48213712eae2c8c4bf2be', {
  age: 1
} ).then( ( user ) => {
  console.log( user )
  return User.countDocuments( {
    age: 1
  } ).then( ( result ) => {
    console.log( result )
  } ).catch( ( e ) => {
    console.log( e )
  } )
} )

const updateAgeAndCount = async ( id, age ) => {

  const user = await User.findByIdAndUpdate( id, {
    age
  } )
  const count = await User.countDocuments( {
    age
  } )
  return count
}

updateAgeAndCount( "63e46ed02d1cc35c84d50269", 2 ).then( ( count ) => {
  console.log( "count ==>", count )
} ).catch( ( e ) => {
  console.log( e )
} )