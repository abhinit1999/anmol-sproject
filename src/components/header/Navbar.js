import React from 'react'
import "./header.css";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faContactBook, faContactCard, faDashboard, faFile, faHamburger, faHamsa, faHandHolding, faHandsHelping, faHelicopter, faHome, faIndent, faInfo, faRepeat, faSuperscript, faTextHeight } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
   
    
    <header
    
    style={{
        marginLeft:"2rem",

        backgroundColor:"lightblue",
        width:"100%",
        height:"40px",


    }}
    >
         <h3 style={{color:"blue",fontWeight:"700",
        //  textAlign:"center",    
                marginLeft:"2rem",
}}>Data lineage</h3>
    </header>
    
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
                    backgroundColor:"#e1f1f3",
                    display:"grid",
                    alignItems:"center",
                    justifyContent:"center",
                   
                    
                   
                    


                }} to="/app-master" title='AppMaster'>
                    
                    <i
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    marginLeft:"2rem"
                                                                                          
                }}
                ><FontAwesomeIcon icon={faHome} /></i>
                
                
                    App Master
                
                
                </NavLink>
                <NavLink 
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    // border:"1px solid black",
                    display:"grid",
                    alignItems:"center",
                    justifyContent:"center",
                    backgroundColor:"#e1f1f3"
                    

                }}
                to="/integrations">
                    
                    <i
                style={{
                    marginLeft:"2rem",
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    
                }}
                ><FontAwesomeIcon icon={faSuperscript} /></i>
                
                    Integrations
                
                
               
                
                
                </NavLink>
                <NavLink 
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    backgroundColor:"#e1f1f3",

                    display:"grid",
                    alignItems:"center",
                    justifyContent:"center",


                }}
                to="/data-flow">
                    
                    <i
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    marginLeft:"2rem",
                    
                }}
                ><FontAwesomeIcon icon={faDashboard} /></i>
                
                    Data Flow
                
                
                
                </NavLink>
                <NavLink
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    backgroundColor:"#e1f1f3",
                    display:"grid",
                    alignItems:"center",
                    justifyContent:"center",
                    // display:"grid",
                    // gridTemplateColumns:"repeat(2,1fr)",
                    // fontWeight:"500",
                    // alignContent:"center",
                    // gridColumnGap:"1rem",

                }} to="/reports">
                    <i
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    
                    marginLeft:"1.5rem"
                }}
                ><FontAwesomeIcon icon={faFile} /></i>
                
                    
                    Reports
                  
                
                
                </NavLink>
                <NavLink
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    backgroundColor:"#e1f1f3",
                    display:"grid",
                    alignItems:"center",
                    justifyContent:"center",

                }} to="/contacts">
                    
                    <i
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    marginLeft:"1.5rem",
                    
                }}
                ><FontAwesomeIcon icon={faContactCard} /></i>
                
                    Contacts
                
                
                
                
                </NavLink>
                <NavLink
                 style={{
                    textDecoration:"none",
                    width: "100px",
                    height: "70px",
                    backgroundColor:"#e1f1f3",
                    display:"grid",
                    alignItems:"center",
                    justifyContent:"center",

                }} to="/help">
                    
                    <i
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,1fr)",
                    alignItems:"center",
                    marginLeft:".4rem"
                    
                }}
                ><FontAwesomeIcon icon={faHandHolding} /></i>
                
                    Help
                 
                
                </NavLink>
            </li>
        </ul>
    </nav>
    
    
    </>
  )
}

export default Navbar;