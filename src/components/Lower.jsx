import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import bg2 from "../assets/bg2-removebg-preview.png";

const Lower = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div
          className="col-md-6 d-flex flex-column align-items-start justify-content-center"
          style={{ marginTop: "5%", marginLeft: "5%" }}
        >
          <h1 className="mb-4">
            Your <span className="text-primary">Hobby</span>, Your{" "}
            <span className="text-info"> Community</span>...
          </h1>
          <button
            className="btn btn-primary mb-4"
            style={{ background: "#8064A2" }}
          >
            Get started
          </button>
        </div>
      </div>

      <div className="hobby-item">
        <img src={bg2} alt="Hobby 1" className="img-fluid" />
      </div>
    </div>
  );
};

export default Lower;
