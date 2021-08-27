import React from 'react'
import {useSelector} from 'react-redux'
import './Profil.css'


export default function Profil() {

 const user = useSelector(state=>state.userReducers.user)

    return (
        <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25"></div>
                      <h6 className="f-w-600">Votre profile</h6>
                      <p>{user && user.name}</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                    </div>
                  </div>
                  <div className="col-sm-8">
                   
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{user && user.email}</h6>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
