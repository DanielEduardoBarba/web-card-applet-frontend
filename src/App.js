import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./scenes/Home"
import LogIn from "./scenes/LogIn"
import Header from "./components/Header"
import Signup from './scenes/Signup'
import Logout from './scenes/Logout'
import About from './scenes/About'
import Cards from "./scenes/Cards"
import Ecard from "./scenes/Ecard"
import Error404 from './scenes/Error404'
import { getUserObj } from './scripts'
import './App.css'

import Spline from '@splinetool/react-spline';


function App() {
const [header, setHeader] = useState(1)
const [user, setUser] = useState({})
// const [uid, setUid] = useState("")

useEffect(()=>{

  setUser(getUserObj())
  // setUid(_user.uid)
  // console.log("UID",uid)

},[])

  return (

    <>

    <div id="main">
      <div id="site">

      <Router>
            {header
              ? <Header user={user}/>
              :""
            }
        
          <Routes>
            <Route exact path='/' element={<Home user={user}/>}></Route>
            <Route exact path='/404' element={<Error404/>}></Route>
            <Route exact path='/logout' element={<Logout/>}></Route>
            <Route exact path='/login' element={<LogIn setUser={setUser} />}></Route>
            <Route exact path='/signup' element={<Signup setUser={setUser}/>}></Route>
            <Route exact path='/about' element={<About user={user}/>}></Route>
            <Route exact path='/cards' element={<Cards user={user}/>}></Route>
            <Route exact path='/ecard/:cid' element={<Ecard setHeader={setHeader}/>}></Route>
          </Routes>
      </Router>
      </div>

          <div id="spline">
            <Spline scene="https://prod.spline.design/vIOA1HP-eG1SMWyB/scene.splinecode" />
            </div>

            </div>
    </>
  );
}

export default App;
