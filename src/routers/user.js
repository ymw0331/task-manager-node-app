const express = require( "express" )
const User = require( "../models/user" )
const router = new express.Router()
const auth = require( '../middleware/auth' );
const {
  token
} = require( 'morgan' );

router.get( "/test", ( req, res ) => {
  res.send( "From a new file" )
} )

router.post( "/users", async ( req, res ) => {
  const user = new User( req.body )
  try {
    await user.save()
    const token = await user.generateAuthToken() //used as authentication

    res.status( 201 ).send( {
      user,
      token
    } )
  } catch ( error ) {
    res.status( 400 ).send( error )
  }
} )


router.post( '/users/login', async ( req, res ) => {
  try {
    const user = await User.findByCredentials( req.body.email, req.body.password )
    const token = await user.generateAuthToken() //used as authentication

    res.send( {
      user,
      token
    } )
  } catch ( error ) {
    res.status( 400 ).send()
  }
} )

router.post( '/users/logout', auth, async ( req, res ) => {
  try {
    req.user.tokens = req.user.tokens.filter( ( token ) => {
      return token.token !== req.token
    } )
    await req.user.save()
    res.send()
  } catch ( error ) {
    res.status( 500 ).send()
  }
} )

router.post( '/users/logoutAll', auth, async ( req, res ) => {

  try {
    req.user.tokens = []
    await req.user.save()
    res.send()
  } catch ( error ) {
    res.status( 500 ).send()
  }
} )



router.get( "/users/me", auth, async ( req, res ) => {

  res.send( ( req.user ) )

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
} )



router.patch( "/users/me", auth, async ( req, res ) => {

  const updates = Object.keys( req.body )
  const allowdUpdates = [ 'name', 'email', 'password', 'age' ]
  const isValidOperation = updates.every( ( update ) => allowdUpdates.includes( update ) )

  if ( !isValidOperation ) {
    return res.status( 400 ).send( {
      error: "Invalid updates!"
    } )
  }

  try {
    updates.forEach( ( update ) => req.user[ update ] = req.body[ update ] )
    await req.user.save()
    res.send( req.user )
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
} )

router.delete( '/users/me', auth, async ( req, res ) => {
  try {
    await req.user.remove()
    res.send( req.user )

  } catch ( error ) {
    res.status( 500 ).send( error )
  }
} )

module.exports = router