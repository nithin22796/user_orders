import {Routes, Route} from "react-router-dom";
import Orders from "../components/orders";
import Users from "../components/users";


function Routers() {
  return (
    <Routes>
      <Route path='/users' element={<Users/>}/>
      <Route path='/orders' element={<Orders />}/>
    </Routes>
  )
}

export default Routers