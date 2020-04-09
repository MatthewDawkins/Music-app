  import React from "react";

function Header() {
  return (
    <div>
    <nav class="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow header">
          <a class="navbar-brand logo" href="/"><i class="fas fa-crown fa-3x logo-icon"></i></a>
          <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Crown Music ©</a>
          <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href="#">Sign out</a>
            </li>
          </ul>
    </nav>
    </div>

  );
}

export default Header;
