import './Placement.css'
import React from 'react'
import Subview from './Subview'

export default function Placement() {
  return (
    <div className='conatiner-fluid' id='placement'>
        <div className='mainContainer'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-center'>100% Placement Assistance</h1>
        <div className="divider ">
        </div>
        </div>
        <div className='subcontianer'>
        <Subview />
        <Subview />
        <Subview />
        </div>
        </div>
    </div>
  )
}
