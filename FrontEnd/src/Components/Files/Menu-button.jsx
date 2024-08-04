import React from 'react'
import {NavLink} from "react-router-dom";

function Menubutton({num,pname}) {
  return (
    <NavLink  to={`${pname.toLowerCase().replaceAll(" ","")}`} className="projectsection-menu-header2">
        <div  className='projectsection-menu-header2-l1'>
          <div className="projectsection-menu-header2-icon"><div>{num}</div></div>
          <div className="projection-menu-header2-last">{pname}</div>
        </div>
      </NavLink>

  )
}

export default Menubutton