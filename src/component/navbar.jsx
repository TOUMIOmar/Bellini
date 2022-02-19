import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <a href="/">
            <img className="logonav" src="" />
          </a>
        </div>
        <div className="navbar">
          <nav>
            <ul>
              <li className="departements">
                <a href="/">BELLINI GAMMARTH</a>
              </li>

              <li>
                <a href="/">Menu</a>
                <span className="navigationSpace" />
              </li>

              <li>
                <a href="/">GALLERY</a>
                <span className="navigationSpace" />
              </li>
              <li>
                <a href="/">CONTACT</a>
                <span className="navigationSpace" />
              </li>
            </ul>
          </nav>
        </div>
      </div>{" "}
    </div>
  );
};

export default Navbar;
