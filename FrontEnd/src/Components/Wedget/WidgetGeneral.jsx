import React from 'react'
import "../../CSS/WidgetGeneral.css"

function WidgetGeneral() {
  return (
    <div className='widgetgeneral-Box'>
        <div >
            <div className='widgetgeneral-title'>Chatbot Name</div>
            <input type="text"  className='widgetgeneral-input'/>
            <div className='widgetgeneral-Box-span'>Lorem ipsum dolor sit amet consectetur.</div>
        </div>

        <div>
            <div className='widgetgeneral-title'>Welcome Message</div>
            <input type="text"  className='widgetgeneral-input'/>
            <div className='widgetgeneral-Box-span'>Lorem ipsum dolor sit amet consectetur.</div>
        </div>

        <div>
            <div className='widgetgeneral-title'>Input Placeholder</div>
            <input type="text" className='widgetgeneral-input' />
            <div className='widgetgeneral-Box-span'>Lorem ipsum dolor sit amet consectetur.</div>
        </div>
    </div>
  )
}

export default WidgetGeneral