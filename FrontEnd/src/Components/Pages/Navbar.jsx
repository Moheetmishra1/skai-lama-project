import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import  {logout}  from "../../../Redux/React_Slice/expense.reduxSlice"
import "../../CSS/Navbar.css"




function Navbar({title}) {
    
    

  return (
    <div className='navbarBox'>
      <div className="navbar-part1">
     <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.0002 13.4116L36.8335 23.1616V40.0833H32.5002V27.0833H19.5002V40.0833H15.1668V23.1616L26.0002 13.4116ZM26.0002 7.58325L4.3335 27.0833H10.8335V44.4166H23.8335V31.4166H28.1668V44.4166H41.1668V27.0833H47.6668L26.0002 7.58325Z" fill="#7E22CE"/>
</svg>
 <p className='projects-url'> / Sample Project / <span style={{color:"blue"}}> {title}</span></p>
 </div>










<div className="projectsNavabr-end">
<div className="projects-en">EN</div>
  <div className="projects-notification">
  <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0001 52C24.9334 52 27.3334 49.6 27.3334 46.6667H16.6667C16.6667 49.6 19.0667 52 22.0001 52ZM38.0001 36V22.6667C38.0001 14.48 33.6534 7.62667 26.0001 5.81333V4C26.0001 1.78667 24.2134 0 22.0001 0C19.7867 0 18.0001 1.78667 18.0001 4V5.81333C10.3734 7.62667 6.00008 14.4533 6.00008 22.6667V36L0.666748 41.3333V44H43.3334V41.3333L38.0001 36ZM32.6667 38.6667H11.3334V22.6667C11.3334 16.0533 15.3601 10.6667 22.0001 10.6667C28.6401 10.6667 32.6667 16.0533 32.6667 22.6667V38.6667Z" fill="black"/>
</svg>
  </div>
</div>

    </div>
   
  )
}

export default Navbar