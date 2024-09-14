import { NavLink } from 'react-router-dom';

function NavbarComponent() {
    return (
        <>
            <nav className="bg-gray-800 p-4">
                <ul className="flex space-x-6 justify-center">
                    <li>
                        <NavLink
                            to="/Home"
                            className="text-white hover:text-blue-400"
                            activeClassName="text-blue-500"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Services"
                            className="text-white hover:text-blue-400"
                            activeClassName="text-blue-500"
                        >
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/About"
                            className="text-white hover:text-blue-400"
                            activeClassName="text-blue-500"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/StateComponent"
                            className="text-white hover:text-blue-400"
                            activeClassName="text-blue-500"
                        >
                            StateComponent
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
        </>
    );
}

export default NavbarComponent;
