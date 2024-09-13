import {NavLink} from 'react-router-dom'

function NavbarComponent() {
     return(
        <>

           <ul>
            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/Services">Services</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
           </ul>

        </>
     )    
}
 export default NavbarComponent;