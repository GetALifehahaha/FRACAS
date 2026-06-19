import {Routes, Route} from 'react-router-dom'
import TestAuth from '@/common/test/TestAuth'


const Routers = () => {
  return (
    <Routes>
      <Route path='/test-auth' element={<TestAuth />} />
    </Routes>
  )
}

export default Routers