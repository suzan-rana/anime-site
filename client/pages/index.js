import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Home = () => {
  const { email, name} = useSelector( state => state.auth.userProfile)

  return(
    <>{email} and {name}
    <Link href='/auth'>Sign up.</Link>
    </>
  )
}

export default Home;  