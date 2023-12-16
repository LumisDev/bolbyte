import React from 'react'
import 'boxicons'
import {Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
type Props = {
    auth: Auth
}
const Login = (props: Props) => {
    const {auth} = props
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
    }
  return (
    <>
        <button className="utility-button" onClick={signInWithGoogle}>
            <box-icon type="logo" name="google" />
            <span>Sign in with Google</span>
        </button>
    </>
  )
}

export default Login
