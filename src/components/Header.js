import './Header.css'
import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top Headasder"  >
    <div className="container-fluid">
      <a className="navbar-brand headerText" href="#banner">IndigoLearn</a>
      <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#choose">Why choose us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#learn">What you learn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#placement">placement</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#contact">contact us</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <button className="btn btn-outline-success bg-white text-black pe-10" type="submit">Login/SignUp</button>
        </form>
      </div>
    </div>
  </nav>
  );
}