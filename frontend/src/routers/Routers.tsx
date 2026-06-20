import {Routes, Route} from 'react-router-dom'
import TestAuth from '@/common/test/TestAuth'
import Layout from '@/layout/Layout'
import Dashboard from '@/features/gis/Dashboard'


const Routers = () => {
  return (
    <Routes>
      <Route path='/test-auth' element={<TestAuth />} />
      <Route element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default Routers