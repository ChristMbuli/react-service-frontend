import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3    ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Micro-Service CRUD{" "}
          <i class="fa-brands fa-node h3" style={{ color: "green" }}></i>
          <i class="fa-brands fa-react h3" style={{ color: "#61DBFB" }}></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <a
            href="http://localhost/micro-service/php/"
            className="btn btn-success"
          >
            Accueil <i className="fa-solid fa-home"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
