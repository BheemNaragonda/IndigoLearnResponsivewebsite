import './Learn.css'
import React from 'react'
import LearnCard from './LearnCard'

export default function Learn() {
  return (
    <div className='container-fluid containermain' id="learn">
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <h1 className='text-center'>What will you Learn in ACCA?</h1>
    <div className="divider ">
    </div>
    </div>
    <div className=" row justify-content-center ">
    <div className="col-md-3 col-12">
      <div className=''>
       <LearnCard />
      </div>
    </div>
    <div className="col-md-3 col-12 ">
    <LearnCard />
    </div>
    <div className="col-md-3 col-12">
    <div className=''>
    <LearnCard />
      </div>
    </div>
    </div>
</div>
  )
}
