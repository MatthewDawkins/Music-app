  import React from "react";

  function Sidebar() {
    return (
      <nav class="d-none d-md-block sidebar">
          <div class="sidebar-sticky sidebar-content">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Favorites
                </a>
              </li>
            </ul>


            <h5 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Playlists</span>
            </h5>
            <ul class="nav flex-column mb-2">
            </ul>
          </div>
        </nav>
    );
  }

  export default Sidebar;
