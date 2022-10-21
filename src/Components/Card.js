import React from "react";

function Card() {
  return (
    <div
      className="card"
      style={{ width: "100%", margin: "10px", backgroundColor: "white" }}
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" />
      <div className="card-body">
        <h5 className="card-title" style={{textAlign: "center"}}><strong>Card Title</strong></h5>
        <p className="card-text" style={{ color: "blue" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Card;
