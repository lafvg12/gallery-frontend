import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      {console.log(data)}
      <img src={data.filename} alt="" srcset="" />
    </div>
  );
};

export { Card };
