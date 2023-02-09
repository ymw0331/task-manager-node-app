const express = require( "express" )
const User = require( "../models/user" )
const router = new express.Router()

router.get( "/test", ( req, res ) => {
  res.send( "From a new file" )
} )

router.post( "/users", async ( req, res ) => {
  const user = new User( req.body )

  try {
    await user.save()
    res.status( 201 ).send( user )
  } catch ( error ) {
    res.status( 400 ).send( error )
  }

  // user.save().then( () => {
  //   // console.log( user )
  //   res.status( 201 ).send( user )
  // } ).catch( ( error ) => {
  //   res.status( 400 ).send( error )
  // } )
} )

router.get( "/users", async ( req, res ) => {

  try {
    const users = await User.find( {} )
    res.send( users )
  } catch ( error ) {
    res.status( 500 ).send()
  }

  // User.find( {} ).then( ( users ) => {
  //   res.send( users )
  // } ).catch( ( error ) => {
  //   res.status( 500 ).send()
  // } )
} )


router.get( "/users/:id", async ( req, res ) => {
  const _id = req.params.id

  try {
    const user = await User.findById( _id )
    if ( !user ) {
      return res.status( 400 ).send()
    }
    res.send( user )

  } catch ( error ) {
    res.status( 500 ).send()
  }

  // User.findById( _id ).then( ( user ) => {
  //   if ( !user ) {
  //     return res.status( 404 ).send()
  //   }
  //   res.send( user )

  // } ).catch( ( e ) => {
  //   res.status( 500 ).send()
  // } )
} )


router.patch( "/users/:id", async ( req, res ) => {

  const updates = Object.keys( req.body )
  const allowdUpdates = [ 'name', 'email', 'password', 'age' ]
  const isValidOperation = updates.every( ( update ) => allowdUpdates.includes( update ) )

  if ( !isValidOperation ) {
    return res.status( 400 ).send( {
      error: "Invalid updates!"
    } )
  }

  try {
    const user = await User.findByIdAndUpdate( req.params.id,
      req.body, {
        new: true,
        runValidators: true
      }
    )
    if ( !user ) {
      return res.status( 404 ).send()
    }
    res.send( user )
  } catch ( error ) {
    res.status( 400 ).send( error )
  }
} )

router.get( "/tasks", async ( req, res ) => {
  try {
    const tasks = await Task.find( {} )
    res.send( tasks )
  } catch ( error ) {
    res.status( 500 ).send()
  }


  // Task.find( {} ).then( ( tasks ) => {
  //   res.send( tasks )
  // } ).catch( ( error ) => {
  //   res.status( 500 ).send()
  // } )

} )

router.delete( '/users/:id', async ( req, res ) => {
  try {
    const user = await User.findByIdAndDelete( req.params.id )

    if ( !user ) {
      return res.status( 404 ).send()
    }
    res.send( user )

  } catch ( error ) {
    res.status( 500 ).send( error )
  }
} )



module.exports = router