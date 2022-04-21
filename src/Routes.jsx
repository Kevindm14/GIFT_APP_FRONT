import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard/Dashboard.jsx'
import { Events } from './components/Dashboard/Events/Events.jsx'
import DetailGift from './components/Dashboard/Gifts/DetailGift.jsx'
import { Gifts } from './components/Dashboard/Gifts/Gifts.jsx'
import DetailUser from './components/Dashboard/Users/DetailUser.jsx'
import { Users } from './components/Dashboard/Users/Users.jsx'
import { Login } from './components/Login/Login.jsx'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx'
import { PublicRoute } from './components/PublicRoute/PublicRoute.jsx'
import { SignUp } from './components/SignUp/SignUp.jsx'

function RoutesApp () {
  return (
    <>
      <Routes>
        <Route path='/login' element={<PublicRoute component={<Login />} />} />
        <Route path='/signup' element={<PublicRoute component={<SignUp />} />} />
        <Route path='/' element={<PublicRoute component={<Login />} />} />
        <Route path='/dashboard' element={<PrivateRoute component={<Dashboard component={<Users />} />} />} />
        <Route path='/users' element={<PrivateRoute component={<Dashboard component={<Users />} />} />} />
        <Route path='/users/:id' element={<PrivateRoute component={<Dashboard component={<DetailUser />} />} />} />
        <Route path='/gifts' element={<PrivateRoute component={<Dashboard component={<Gifts />} />} />} />
        <Route path='/gifts/:id' element={<PrivateRoute component={<Dashboard component={<DetailGift />} />} />} />
        <Route path='/events' element={<PrivateRoute component={<Dashboard component={<Events />} />} />} />
        <Route path='*' element={<>Not Found</>} />
      </Routes>
    </>
  )
}

export default RoutesApp
