import './Contact.css'
import React,{useState} from 'react'

export default function Contact() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
  return (
    <div class="container-fluid Banner-Section-bg-container1" id='contact'>
    <div class="row flex-column flex-md-row">
      <div class="col-md-6">
        <div class="Banner-Section-Text-Container">
          <h1 class="Banner-Section-Heading">Kick of your ACCA Journey with IndigoLearn</h1>
          <p class="Banner-Section-Paragraph">Signin and get all courses free access</p>
          <button class="Banner-Section-Button2">Learning</button>
        </div>
      </div>
      <div class="col-md-6 mt-5 mt-md-0  ">
       <div className="bg-white containerform">
  
        <h2 class="mb-4 text-center">Get in touch with us</h2>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone Number</label>
            <input type="tel" class="form-control" id="phone" />
          </div>
        </form>
          <div class="text-center">
  
          <button  class="btn btn-primary text-center"  onClick={openModal}>Request a call Back</button>
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
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  
  )
}
