import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/common/components/Header.tsx'
const Layout = () => {
  return (
    <div className='max-w-vw w-full min-h-screen'>
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout