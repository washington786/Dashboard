import React from 'react'
import ContentBar from '../../Components/Content/ContentBar'
import RightBar from '../../Components/RightBar/RightBar'
import SideBar from '../../Components/SideBar/SideBar'
import TopBar from '../../Components/TopBar/TopBar'
import './Home.css';

export default function Home() {
  return (
    <>
        <TopBar/>
        <div className="content-con d-flex">
            <SideBar/>
            <ContentBar/>
            <RightBar/>
        </div>
    </>
  )
}
