import './Header.css'
import React from 'react';

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top Headasder"  >
    <div class="container-fluid">
      <a class="navbar-brand headerText" href="#banner">IndigoLearn</a>
      <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#choose">Why choose us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#learn">What you learn</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#placement">placement</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#contact">contact us</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <button class="btn btn-outline-success bg-white text-black pe-10" type="submit">Login/SignUp</button>
        </form>
      </div>
    </div>
  </nav>
  );
}