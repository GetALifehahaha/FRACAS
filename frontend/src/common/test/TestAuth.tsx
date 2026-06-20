import { useAuth } from '@/features/auth/context/useAuth'
import React from 'react'

const TestAuth = () => {

  const { login, logout } = useAuth();

  return (
    <div>
      <div>
        <h5>Positive Login</h5>
        <button className='bg-black text-white p-1 cursor-pointer' onClick={() => login({
          username: 'root',
          password: 'root'
        })}>Login</button>
      </div>
      <div>
        <h5>Logout</h5>
        <button className='bg-black text-white p-1'
         onClick={() => logout()}>Logout</button>
      </div>
    </div>
  )
}

export default TestAuth