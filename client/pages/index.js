import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const { email, name} = useSelector( state => state.auth.userProfile)
  // alert(email, name)
  console.log(email, name)

  return (
    <div>Hello world from home page.</div>
  )
}

export default Home;  