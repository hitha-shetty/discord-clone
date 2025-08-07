import React from 'react'

function AuthLayout({children} : {children : React.ReactNode}) {
  return (
    <div className='bg-red-400'>
        AuthLayout
        {children}
    </div>
  )
}

export default AuthLayout;