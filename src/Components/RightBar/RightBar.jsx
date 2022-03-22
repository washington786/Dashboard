import React from 'react'
import '../../styles/RightBar.css'

const Users = [
  {
    id:0,
    name:'Amanda Busheled',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id:1,
    name:'Lucy Dander',
    image: 'https://images.pexels.com/photos/2779343/pexels-photo-2779343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id:2,
    name:'Nim Mastic',
    image: 'https://images.pexels.com/photos/1892876/pexels-photo-1892876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id:3,
    name:'Rinae Needfuls',
    image: 'https://images.pexels.com/photos/2659164/pexels-photo-2659164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id:4,
    name:'Sharon Lekalakala',
    image: 'https://images.pexels.com/photos/2180526/pexels-photo-2180526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },

]

export default function RightBar() {
  return (
    <div className="right-bar-container p-3">
        <h6 className="title">Active Friends:</h6>
        {Users.map((item)=>{
          return (
            <div key={item.id} className="main-con-users d-flex">
                <div className="image-with-status">
                  <img src={item.image} alt="profile" className="profile-user-online" />
                  <div className="circle-active bg-success"></div>
                </div>
                <h6 className="name-user ps-2">{item.name}</h6>
            </div>
          )
        })}
    </div>
  )
}
