@extends('layout')

<nav class="navbar navbar-expand-lg bg-dark p-3">
  <div class="container-fluid">
    <button class="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="index.html">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">CATAGORY</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OFFERS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="projects.html">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="certificates.html">SIGN UP</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="contact.html"></a>
        </li>
      </ul>
    </div>
  </div>
</nav>







