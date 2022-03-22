import React from 'react';
import '../../styles/TopBar.css';

export default function TopBar() {
  return (
    <div className="topBarContainer d-flex bg-warning justify-content-space-between ps-2 pe-2">

      <div className="tabBarLeft">
          <span className="logo">Yup Media</span>
      </div>

      <div className="tabBarCenter">
          <i className="bi bi-search search-icon"/>
          <input placeholder='You can search from here.' className="searchInput" />
      </div>

      <div className="tabBarRight d-flex justify-content-space-between">

          <div className="tobBarLinks d-flex w-100 justify-content-space-between">

            <div className="barLinks d-flex w-50">
              <span className="item-link">Home</span>
              <span className="item-link">Time line</span>
            </div>

            <div className="topBarLinkIcons d-flex w-50">

              <div className="item-icon d-flex">
                <i className="bi bi-person-fill d-flex icon"/>
                <div className="count-cont">
                <span className="iconBadgeCount d-flex">1</span>
                </div>
              </div>

              <div className="item-icon d-flex">
                <i className="bi bi-chat-left-dots-fill d-flex icon"/>
                <div className="count-cont">
                <span className="iconBadgeCount d-flex">1</span>
                </div>
              </div>

              <div className="item-icon d-flex">
                <i className="bi bi-bell-fill d-flex icon"/>
                <div className="count-cont">
                  <span className="iconBadgeCount d-flex">1</span>
                </div>
              </div>

              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="profile" className="profile"/>

            </div>
          </div>
      </div>
    </div>
  )
}
