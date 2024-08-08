import React from 'react'
import "../../CSS/Navbar2.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navrbar2() {
    let {pDetails} = useSelector(store=>store.cart)
  return (
    <div className='wideget-navbar-Box'>
        <div className="widget-navber2-links">
            <NavLink to={`/projectsection/${pDetails.name}/widgetconfigurations/general`}  className='widgetConfiguration-navbar b-g general'><p>General</p></NavLink>
            <NavLink to={`/projectsection/${pDetails.name}/widgetconfigurations/display`} className='widgetConfiguration-navbar b-d display '><p>Display</p></NavLink>
            <NavLink to={`/projectsection/${pDetails.name}/widgetconfigurations/advanced`} className='widgetConfiguration-navbar b-a advanced'><p>Advanced</p></NavLink>
        </div>
        <hr />
    </div>
  )
}

export default Navrbar2