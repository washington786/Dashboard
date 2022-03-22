import React from 'react';
import '../../styles/ContentBar.css';

const Data = [
  {
      name:'Thar Deon',
      image:'https://images.pexels.com/photos/237015/pexels-photo-237015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'SA station for the Gau train in mozaras',
      id:0,
      profile:'https://images.pexels.com/photos/1963075/pexels-photo-1963075.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  }, {
      name: 'Daniel Washington',
      image: 'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Computer lab for repairing components broken.',
      id:1,
      profile:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
]

export default function ContentBar() {
  return (
    <div className="content-container">
        <div className="con-all p-2 mt-3">
            
            <div className="share-con p-2">
                <div className="first-con p-2">
                  
                  <div className="con-image d-flex p-0 m-0">

                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" className="profile-img ms-4"/>
                    <h5 className="user-name ps-4">Corde Elles</h5>

                  </div>

                  <hr className="horizontal mt-2 m-0 p-0 me-4 ms-4 w-75"/>

                  <div className="functions me-5 ms-4 d-flex">

                    <div className="func-icon-con d-flex">
                      <i className="bi bi-images f-icon"/>
                      <h6 className="desc-icon-name ps-2">Photo or Video</h6>
                    </div>

                    <div className="func-icon-con d-flex ps-2 pe-2">
                      <i className="bi bi-tag-fill f-icon"/>
                      <h6 className="desc-icon-name ps-2">Tag</h6>
                    </div>

                    <div className="func-icon-con d-flex ps-2 pe-2">
                      <i className="bi bi-geo-alt-fill f-icon"/>
                      <h6 className="desc-icon-name ps-2">Location</h6>
                    </div>

                    <div className="func-icon-con d-flex ps-2 pe-2">
                      <i className="bi bi-emoji-sunglasses f-icon"/>
                      <h6 className="desc-icon-name ps-2">Feelings</h6>
                    </div>

                    <div className="button-cont pb-3 pt-2 ps-5">
                      <button type="button" class="btn btn-danger">Share</button>
                    </div>
                  </div>
                  
                </div>
                
            </div>

            <div className="content-shared">
              {
                Data.map((item)=>{
                  return(
                    <div className="shared-con mt-4 p-3" key={item.id}>
                        <div className="first-con-shared d-flex">
                          <img src={item.profile} alt="prof" className="profile-shared"/>
                          <h4 className="shared-name ps-2">{item.name}</h4>
                        </div>
                        <div className="sec-con mt-2">
                          <h6 className="description-shared lead">{item.description}</h6>
                          <img src={item.image} alt="prof" className="image-shared"/>
                        </div>
                        <hr className="mt-2 m-0 p-0 w-75 text-danger"/>
                    </div>
                  )
                })
              }
            </div>

            
        </div>
    </div>
  )
}
