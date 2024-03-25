import React from 'react'
import Header from '../Header'
import NewSidebar from '../NewSidebar'

function Layout({ children }) {
  return (
    <div className='w-full h-full max-h-[1000px]'>
      <Header />
      <main className='w-full flex max-w-desktop gap-5 mx-auto my-10'>
        <NewSidebar />
        <section>{children}</section>
      </main>
    </div>
  )
}

export default Layout
