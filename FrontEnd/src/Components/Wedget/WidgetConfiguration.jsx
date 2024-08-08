import React from 'react'
import Navbar from '../Pages/Navbar'
import "../../CSS/widgetConfiguration.css"
import "../../CSS/Projects.css"
import Navrbar2 from './Navrbar2'
import { Outlet } from 'react-router-dom'

function WidgetConfiguration() {
  return (
    <div className='widget-Box'>
        <Navbar title="Widget Configuration" />
        <div className="widgetConfiguration-title">
        <div className='projects-upload-title'>Congifuration</div>
        </div>

    <Navrbar2 />
    <Outlet />

    </div>

  )
}

export default WidgetConfiguration