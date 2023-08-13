import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./scenes/Home"
import LogIn from "./scenes/LogIn"
import Header from "./components/Header"
import Signup from './scenes/Signup'
import Logout from './scenes/Logout'
import About from './scenes/About'
import './App.css'


function App() {
const [user, setUser] = useState("")

useEffect(()=>{
  const __user = localStorage.getItem("web-card-user" )
  let _user = ""
  if(__user)_user = JSON.parse(__user)
  else _user=""
  setUser(_user)
  console.log("USER: ", _user)
  console.log("USER.uid: ", _user.uid)
},[])

  return (

    <>

   <Header user={user}/>
      <Router>
        
          <Routes>
            <Route exact path='/' element={<Home user={user}/>}></Route>
            <Route exact path='/logout' element={<Logout/>}></Route>
            <Route exact path='/login' element={<LogIn setUser={setUser} />}></Route>
            <Route exact path='/signup' element={<Signup setUser={setUser}/>}></Route>
            <Route exact path='/about' element={<About user={user}/>}></Route>
            <Route exact path='/cards' element={<Cards user={user}/>}></Route>
          </Routes>
      </Router>

    </>
  );
}

export default App;
