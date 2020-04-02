import React from "react";

function Header() {
  return (

    <div className="header">

    <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top">

      <h1> Crown Music </h1>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="md-form active-pink active-pink-2 mb-3 mt-0 searchbar">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
      </div>

      <form class="form-inline">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#">Login</a>
          <a class="nav-item nav-link" href="#">Signup</a>
        </div>
      </div>
      </form>

    </nav>

    </div>
  );
}

export default Header;
