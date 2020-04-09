import React from "react";

function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top justify-content-between">

      <h1>Crown Music</h1>

      <form class="navbar-nav navbar-form form-inline">
        <div>
          <input class="form-control" type="search" placeholder="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
      </form>


      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Signup</a>
        </li>
      </ul>

    </nav>
    </div>


  );
}

export default Header;
