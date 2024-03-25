
import ChooseCard from './Choosecard'
import './Chooseus.css'
import React from 'react'
import CoruseCards from './CoruseCards'

export default function Chooseus() {
  return (
    <div className='container-fluid' id="choose">
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-center'>why choose us</h1>
        <div className="divider ">
        </div>
        </div>
        <div className=" row justify-content-center ">
        <div className="col-md-3 col-12">
          <div className=''>
           <ChooseCard />
          </div>
        </div>
        <div className="col-md-3 col-12 ">
           <ChooseCard />
        </div>
        <div className="col-md-3 col-12">
        <div className=''>
           <ChooseCard />
          </div>
        </div>
        </div>
        <div className="row justify-content-center coursescontainer">
        <div className="col-md-3 col-12">
          <div className='pe-md-3'>
           <CoruseCards />
          </div>
        </div>
        <div className="col-md-3 col-12 ">
           <CoruseCards />
        </div>
        <div className="col-md-3 col-12">
        <div className='ps-md-3'>
           <CoruseCards />
          </div>
        </div>
        <div className="col-md-3 col-12">
        <div className='ps-md-3'>
           <CoruseCards />
          </div>
        </div>
        </div>
    </div>
  )
}
