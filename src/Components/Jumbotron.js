import React from "react";

function Jumbotron() {
  return (
    <div
      style={{
        backgroundColor: "silver",
        borderRadius: "5px",
        width: "100%",
        marginRight: "10px",
        marginBottom: "10px",
      }}
    >
      <div className="jumbotron-fluid">
        <h1 className="display-4" style={{ padding: "10px" }}>
          A Warm Welcome!{" "}
        </h1>
        <p className="lead" style={{ padding: "10px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Risus at ultrices mi tempus imperdiet nulla. 
        Nunc non blandit massa enim nec dui. Diam in arcu cursus euismod 
        quis viverra nibh cras pulvinar. Amet porttitor eget dolor morbi non arcu risus. 
        </p>
        <a
          className="btn btn-primary btn-lg"
          href="#"
          role="button"
          style={{ margin: "5px" }}
        > Call to Action!
        </a>
      </div>
    </div>
  );
}
export default Jumbotron;
