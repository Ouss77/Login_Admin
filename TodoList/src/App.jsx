import Create from './Create'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Update from './Update'
import Register from './components/Register'
import Login from './components/Login'
import Score from './components/Score'
import PrivateRoute from './components/PrivateRoute'
import AdminLogin from './components/AdminLogin'
import Dashboards from './components/Dashbords'


function App() {
  return (
<BrowserRouter>
<Routes>
  {/* <Route path='/Register' element={<Register/>}></Route> */}
  <Route path='/Register' element={<Register/>}></Route>

  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/AdminLogin' element={<AdminLogin/>}></Route>

  <Route path='/Dashbords' element={<Dashboards/>}></Route>
  <Route path="/score" element={<PrivateRoute component={Score} />} />
  
  {/* <Route path='/Score' element={<Score/>}></Route> */}
  <Route path='/' element={<Login />}></Route>
  <Route path='/create' element={<Create />}></Route>
  <Route path='/edit/:id' element={<Update />}></Route>

</Routes>
</BrowserRouter>
    
  )
}
export default App

  