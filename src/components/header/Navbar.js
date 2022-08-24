import React from 'react'
import "./header.css";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <h3 style={{color:"black",fontWeight:"700",            marginLeft:"2rem",
}}>Home Page Design</h3>
    
    <header
    style={{
        marginLeft:"2rem",

        backgroundColor:"blue",
        width:"100%",
        height:"40px",


    }}
    ></header>
    
    <nav
    style={{
        display:"flex",
    }}>
        <div
        style={{
            marginLeft:"2rem",
borderLeft:"2rem solid gray",
borderRight:"none",


        }}
        ></div>
        <ul>
            <li>
                <NavLink style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    border:"1px solid black",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    fontWeight:"500",


                }} to="/app-master">App Master</NavLink>
                <NavLink 
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    border:"1px solid black",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    fontWeight:"500",

                }}
                to="/integrations">Integrations</NavLink>
                <NavLink 
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    border:"1px solid black",

                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    fontWeight:"500",


                }}
                to="/data-flow">Data Flow</NavLink>
                <NavLink
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    border:"1px solid black",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    fontWeight:"500",

                }} to="/reports">Reportsr</NavLink>
                <NavLink
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    border:"1px solid black",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    fontWeight:"500",

                }} to="/contacts">Contacts</NavLink>
                <NavLink
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    border:"1px solid black",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    fontWeight:"500",

                }} to="/help">Help</NavLink>
            </li>
        </ul>
    </nav>
    
    
    </>
  )
}

export default Navbar;