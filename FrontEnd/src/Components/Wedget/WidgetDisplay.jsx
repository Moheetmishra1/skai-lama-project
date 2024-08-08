import React from 'react';
import "../../CSS/WidgetDisplay.css"


function WidgetDisplay() {
  return (
    <div className="widgetdisplay-Box">
      <div className="widgetdisplay-part1">
        <div>
                  <div className="widgetdisplay-title">Primary Color</div>
                 <div> <input type="text"    className="widgetdisplay-sec1"  /> <div className="widgetdisplay-color">  </div></div>
                 <div className="widgetdisplay-span"  >Lorem ipsum dolor sit amet.</div>
        </div>
        <div>
                  <div className="widgetdisplay-title">Font Color</div>
                 <div> <input type="text"  className="widgetdisplay-sec1" /> <div className="widgetdisplay-color">  </div></div>
                 <div className="widgetdisplay-span">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>



      <div className="widgetdisplay-part2">
        <div>
                  <div className="widgetdisplay-title">Font Size (in px)</div>
                <input type="text"className="widgetdisplay-sec1"  /> 
                 <div className="widgetdisplay-span">Lorem ipsum dolor sit amet.</div>
        </div>
        <div>
                  <div className="widgetdisplay-title">Chat Height (in % of total screen)</div>
                <input type="text"className="widgetdisplay-sec1" />
                 <div className="widgetdisplay-span">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>

      <div className="widgetdisplat-showSource-Box">
        <div className="widgetdisplay-showSource-text">
          <div className="widgetdisplay-showsource-part1">Show Sources</div>
          <div className="widgetdisplay-showSource-part2">Lorem ipsum dolor sit amet.</div>
        </div>

        <div className="widgetdisplay-showSource-button">
          
          <div className="widgetdisplay-switchOuter">
            <div className="widgetdisplay-switchInner"></div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    <div className="widgetdisplayAfterShowSource"></div>

    <div className="widgetdisplay-chaticon">Chat Icon</div>

    <div className="widgetdisplay-part2">
        <div>
                  <div className="widgetdisplay-title">Chat Icon Size</div>
                  <select className="widgetdisplay-sec1" >
                         <option value="">Small (48x48 px)</option> 
                         <option value="">Medium (56x56 px)</option> 
                         <option value="">Large (84x84 px)</option>   
                     </select>
                 <div className="widgetdisplay-span">Lorem ipsum dolor sit amet.</div>
        </div>
        <div>
                  <div className="widgetdisplay-title">Position on Screen</div>
                  <select className="widgetdisplay-sec1" >
                         <option value="">Bottom Right</option> 
                         <option value="">Bottom Left</option> 
                         <option value="">Upper Right</option>   
                         <option value="">Upper Left</option>   
                     </select>
                 <div className="widgetdisplay-span">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    
     
      <div className="widgetdisplay-part2">
        <div>
                  <div className="widgetdisplay-title">Distance from Bottom (in px)</div>
                <input type="text"className="widgetdisplay-sec1"  /> 
                 <div className="widgetdisplay-span">Lorem ipsum dolor sit amet.</div>
        </div>
        <div>
                  <div className="widgetdisplay-title">Horizontal Distance (in px)</div>
                <input type="text"className="widgetdisplay-sec1" />
                 <div className="widgetdisplay-span">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
      <div className="widgetdisplay-bot-icon">
      Bot Icon
      </div>
      {/* <div className="widgetdisplay-picBox"> */}
       <img src="" className="widgetdisplay-profilePic" alt=" do pic" />
     

       <svg width="238" height="61" viewBox="0 0 238 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="238" height="61" rx="9" fill="#7E22CE"/>
</svg>

      {/* </div> */}
    </div>
  )
}

export default WidgetDisplay