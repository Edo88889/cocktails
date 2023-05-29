import {NavLink} from "react-router-dom";
import './style.css'
function Header() {
    return (
        <nav className='nav-link'>

                <NavLink to='/' className='router-href'>
                    Home
                </NavLink>
                <NavLink to='/about' className='router-href '>
                About
            </NavLink>


        </nav>

    );
}

export default Header;