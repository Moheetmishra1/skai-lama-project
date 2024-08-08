import React from 'react'
import Navbar from './Navbar'
import "../../CSS/Navbar.css"
import "../../CSS/Settings.css"

function Settings() {
  return (
    <div className='settings-Box'>
        <Navbar title="Account Settings" />
        <div className="settings-title">Account Settings            </div>
        <div className="settings-profile-pic-name">
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" className='settings-profilePic' />

            <div className="setting-profile-name-box">
                <div className="settings-profile-name">User Name</div>
                <input type="text" name="" id="" />
            </div>

            <div className="settings-profile-email-box">
                <div className="settings-profile-email">Email</div>
                <input type="text" value="mohit@gmail.com" readOnly />

            </div>

        </div>

        <div className="settings-subscription">Subscriptions</div>
        <div className="settings-subscription-box">
            <div className="settings-subscription-box-text">You are currently on the <u>Ques AI Basic Plan!</u></div>
            <button className='settings-subscription-box-update'>Upgrade</button>
        </div>
        <div className="settings-cancel-subscription">Cancel Subscription</div>
    </div>
  )
}

export default Settings