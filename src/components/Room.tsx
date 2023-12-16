import { Auth } from 'firebase/auth';
import {  Firestore, addDoc, collection, orderBy, query } from 'firebase/firestore'
import {FormEvent, useRef, useState} from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { ChatMsg } from '.';
type Props = {
    firestore: Firestore;
    auth: Auth
}
const Room= (props: Props) => {
    const {firestore, auth} = props
    const dummy = useRef<any>()
    const messageRef = collection(firestore,'messages')
    const msgQuery = query(messageRef,orderBy('createdAt'))
    const [messages] = useCollectionData(msgQuery)
    const [formValue, setFormValue] = useState('')
    const sendMessage = async (e:FormEvent) => {
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser!
        await addDoc(messageRef,{
            text: formValue,
            createdAt: Date.now(),
            uid,
            photoURL
        })
        setFormValue('')
        if(dummy.current) dummy.current.scrollIntoView({behavior: 'smooth'})
    }
  return (
    <>
        <main>
            {messages && messages.map(msg => <ChatMsg auth={auth} key={msg.id} message={msg}/>)}
            <span ref={dummy}></span>
        </main>
        <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

            <button type="submit" disabled={!formValue}>🕊️</button>

        </form>
    </>
  )
}

export default Room
