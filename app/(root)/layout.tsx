import React from 'react'
import Navebar from '../../components/Navebar'

function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
  <main className='font-work-sans'>
   <Navebar/>
  {children}
  </main>
  )
}

export default layout