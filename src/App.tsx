import React from 'react'
import { firebaseConfig } from './firebase'
import { initializeApp } from 'firebase/app'
import * as RFHFirestore from 'react-firebase-hooks/firestore'
import * as RFHAuth from 'react-firebase-hooks/auth'
import { Login, Room, LogoutButton, ChatMsg } from './components'
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'
const app =initializeApp(firebaseConfig)
const authEngine = getAuth(app)
const firestoreEngine = getFirestore(app)

const App: React.FC = () => {
  const [user] = RFHAuth.useAuthState(authEngine)
  return (
    <div>
      <header className='bg-green-500 w-screen h-fit px-2 py-2'>
        <h1 className='text-3xl font-extrabold text-white'>BOLBYTE</h1>
      </header>
      <section>
        {user ? (
          <>
            <Room auth={authEngine} firestore={firestoreEngine} />
            <LogoutButton logout={() => authEngine.signOut()} />
          </>
        ) : <Login auth={authEngine}/>}
      </section>
    </div>
  )
}

export default App
