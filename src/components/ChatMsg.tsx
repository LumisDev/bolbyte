import { Auth } from 'firebase/auth'
import { DocumentData } from 'firebase/firestore'
import React from 'react'

type Props = {
    message: DocumentData
    auth: Auth
}

const ChatMsg = (props: Props) => {
    const {uid, photoURL, text} = props.message
    const messageClass = props.auth.currentUser && uid === props.auth.currentUser.uid ? 'sent' : 'received'
  return (
    <>
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt='' className='w-[40px] h-[40px] rounded-[50%] m-[2px 5px]'/>
            <p>{text}</p>
        </div>
    </>
  )
}

export default ChatMsg