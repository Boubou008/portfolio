import React from "react";

export default function Skills() {
  return (
    <div className="col-md-6">
      <h3>Mes compétences</h3>
      <div className="mb-3">
        <label>HTML5</label>
        <div className="progress">
          <div className="progress-bar bg-danger" style={{ width: "90%" }}>90%</div>
        </div>
      </div>
      <div className="mb-3">
        <label>CSS3</label>
        <div className="progress">
          <div className="progress-bar bg-primary" style={{ width: "80%" }}>80%</div>
        </div>
      </div>
      <div className="mb-3">
        <label>JavaScript</label>
        <div className="progress">
          <div className="progress-bar bg-warning text-dark" style={{ width: "70%" }}>70%</div>
        </div>
      </div>
      <div className="mb-3">
        <label>PHP</label>
        <div className="progress">
          <div className="progress-bar bg-success" style={{ width: "60%" }}>60%</div>
        </div>
      </div>
      <div className="mb-3">
        <label>React</label>
        <div className="progress">
          <div className="progress-bar bg-info" style={{ width: "50%" }}>50%</div>
        </div>
      </div>
    </div>
  );
}
