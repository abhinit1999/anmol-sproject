import React from 'react'
import "./header.css";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faContactBook, faContactCard, faDashboard, faFile, faHamburger, faHamsa, faHandHolding, faHandsHelping, faHelicopter, faHome, faIndent, faInfo, faRepeat, faSuperscript, faTextHeight } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
    <h3 style={{color:"blue",fontWeight:"700",            marginLeft:"2rem",
}}>Data lineage</h3>
    
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
                    // display:"flex",
                    // alignItems:"center",
                    // justifyContent:"center",
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    fontWeight:"500",
                    alignContent:"center",
                    gridColumnGap:"1rem",
                    


                }} to="/app-master">App Master
                <i
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    
                }}
                ><FontAwesomeIcon icon={faHome} /></i>
                </NavLink>
                <NavLink 
                 style={{
                    textDecoration:"none",
                    width: "110px",
                    height: "70px",
                    border:"1px solid black",
                    // display:"flex",
                    // alignItems:"center",
                    // justifyContent:"center",
                    
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    fontWeight:"500",
                    alignContent:"center",
                    gridColumnGap:".3rem",
                    

                }}
                to="/integrations">Integrations
                
                
                <i
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    
                }}
                ><FontAwesomeIcon icon={faSuperscript} /></i>
                </NavLink>
                <NavLink 
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    border:"1px solid black",

                    // display:"flex",
                    // alignItems:"center",
                    // justifyContent:"center",
                    // fontWeight:"500",
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    fontWeight:"500",
                    alignContent:"center",
                    gridColumnGap:"1rem",


                }}
                to="/data-flow">Data Flow
                  <i
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    
                }}
                ><FontAwesomeIcon icon={faDashboard} /></i>
                </NavLink>
                <NavLink
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    border:"1px solid black",
                    // display:"flex",
                    // alignItems:"center",
                    // justifyContent:"center",
                    // fontWeight:"500",
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    fontWeight:"500",
                    alignContent:"center",
                    gridColumnGap:"1rem",

                }} to="/reports">Reports
                  <i
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    
                }}
                ><FontAwesomeIcon icon={faFile} /></i>
                </NavLink>
                <NavLink
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    border:"1px solid black",
                    // display:"flex",
                    // alignItems:"center",
                    // justifyContent:"center",
                    // fontWeight:"500",
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    fontWeight:"500",
                    alignContent:"center",
                    gridColumnGap:"1rem",

                }} to="/contacts">Contacts
                
                <i
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    
                }}
                ><FontAwesomeIcon icon={faContactCard} /></i>
                </NavLink>
                <NavLink
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    border:"1px solid black",
                    // display:"flex",
                    // alignItems:"center",
                    // justifyContent:"center",
                    // fontWeight:"500",
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    fontWeight:"500",
                    alignContent:"center",
                    gridColumnGap:"1rem",

                }} to="/help">Help
                  <i
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    
                }}
                ><FontAwesomeIcon icon={faHandHolding} /></i>
                </NavLink>
            </li>
        </ul>
    </nav>
    
    
    </>
  )
}

export default Navbar;