import React from 'react'
import './Layout.css'

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div id='layout' className='flex'>
      {children}
    </div>
  )
}

export default Layout