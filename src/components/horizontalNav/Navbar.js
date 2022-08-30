import React from 'react'
import "./style.css";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='container'>
        <ul>
            <li>
                <NavLink className="commonNavbar" to="/app-master">App Master</NavLink>
            </li>
            <li>
            <NavLink className="commonNavbar" to="/integrations">Integrations</NavLink>

                </li>
            <li>
            <NavLink className="commonNavbar" to="/data-flow">DataFlow</NavLink>

                </li>
            <li>
            <NavLink className="commonNavbar" to="/reports">Reports</NavLink>

                </li>
            <li>
            <NavLink className="commonNavbar" to="/contacts">Contacts</NavLink>

                </li>
            <li>
            <NavLink className="commonNavbar" to="/help">Help</NavLink>

                </li>
        </ul>
    </div>
  )
}

export default Navbar;