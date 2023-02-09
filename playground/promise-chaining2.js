require( '../src/db/mongoose' )
const Task = require( "../src/db/models/task" )


// 63e46ed02d1cc35c84d50269


Task.findByIdAndDelete( '63e470d14f5ad606ecb2a5b3' ).then( ( task ) => {
  console.log( task )
  return Task.countDocuments( {
    completed: false
  } ).then( ( result ) => {
    console.log( result )
  } ).catch( ( e ) => {
    console.log( e )
  } )
} )


const deleteTaskAndCount = async ( id ) => {
  await Task.findByIdAndDelete( id )

  const count = await Task.countDocuments( {
    completed: false
  } )

  return count

}


deleteTaskAndCount( '63e49a9ffa54ed2668c59ef8' ).then( ( count ) => {
  console.log( "count ==>", count )
} ).catch( ( e ) => {
  console.log( e )
} )