import React from "react";

const Footer = ({complatedTodos , totalTasks}) => {
  return (
    <div className="footer">
      <span className="total"> completed  : {complatedTodos} </span>
      <span className="total">  total : {totalTasks}</span>
    </div>
  );
};

export default Footer;
