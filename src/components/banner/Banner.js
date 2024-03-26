import'./Banner.css'
import React, {useState} from 'react'
import CourseCard from './CourseCard'

export default function Banner() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
  return (
<div className="container-fluid Banner-Section-bg-container" id='banner'>
  <div className="row flex-column flex-md-row">
    <div className="col-md-6">
      <div className="Banner-Section-Text-Container">
        <h1 className="Banner-Section-Heading">Become ACCA in 18 months</h1>
        <p className="Banner-Section-Paragraph">Acquire globally recognized accountancy qualification, ACCA (also called as Global CA), and get placed in top MNCs & Big4s.</p>
        <div className='d-flex flex-row'>
          <div className="col-md-3">
            <CourseCard />
          </div>
        </div>
        <button className="Banner-Section-Button1">Download Brochure</button>
        <button className="Banner-Section-Button2">Learning</button>
      </div>
    </div>
    <div className="col-md-6 mt-5 mt-md-0  ">
     <div className="bg-white containerform">

      <h2 className="mb-4 text-center">Get in touch with us</h2>
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" />
        </div>
      </form>
        <div className="text-center">

        <button  className="btn btn-primary text-center" onClick={openModal}>Request a call Back</button>
        </div>
      </div>
    </div>
  </div>
  <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thanks for contacting </h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              Thanks for choosing indigolearn platform for your bright future. our reprsentive will contact you shorlty
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary Banner-Section-Button1" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
</div>

  )
}
