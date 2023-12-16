import React from 'react'

type Props = {
  logout: () => void
}


const LogoutButton = (props:Props) => {
    const {logout} = props
  return (
    <>
      <button className="utility-button" onClick={logout}>
        <box-icon type="solid" name='log-out' />
        Logout
      </button>
    </>
  )
}

export default LogoutButton