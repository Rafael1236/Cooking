import React from "react";
import ucookLogo from "../assets/images/ucook.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light text-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
             src={ucookLogo}
            alt="Logo"
            width="90"
            height="90"
            className="rounded-circle"
          />
          <span className="fw-bold text-secondary">UCOOK</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recetas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tips
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Chefs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Iniciar sesión
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Novedades
              </a>
            </li>
            <div className="ms-4 mt-2">
              <a href="#">
                <i className="bi bi-person-circle text-light me-1"></i>
              </a>
              <a href="#">
                <i className="bi bi-search text-light"></i>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
