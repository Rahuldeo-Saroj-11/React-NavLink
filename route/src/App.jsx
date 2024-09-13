import Home from './components/Home'
import LoginPage from './components/LoginPagae'
import Services from  './components/Services'
import About from './components/About';
import {BrowserRouter as Router , Routes , Route, NavLink} from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent';

import './App.css'

function App() {

  let login  = true;

  return (


    <>
    <Router>
      <NavbarComponent/>
       <Routes>
        <Route path='/Home' element={login ? <Home/> : <LoginPage/>}/>
         <Route path='/Services' element={<Services/>}/> 
        <Route path='/About' element={<About/>}/>
       </Routes>
    </Router>
      
    </>
  )
}

export default App;
