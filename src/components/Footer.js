import React from "react";

const Footer = () => {
  return (
    <div className="container ">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 my-4 border-top">
        <p class="col-md-6 mb-0 text-body-secondary">
          &copy; 2024, All rights reserved. designed by{" "}
          <a
            href="https://portfolio-frontend-three-kappa.vercel.app/"
            target="_blank"
          >
            Christ Mbuli
          </a>
        </p>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a
              href="https://app-bbe267e6-fbeb-49fc-a0e3-b91332821800.cleverapps.io/"
              className="nav-link px-2 text-body-secondary"
            >
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://react-service-frontend.onrender.com/"
              className="nav-link px-2 text-body-secondary"
            >
              Nouveau
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Parametres
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://portfolio-frontend-three-kappa.vercel.app/"
              target="_blank"
              className="nav-link px-2 text-body-secondary"
            >
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
