import React from "react";

const Card = ({ data }) => {
  return (
    <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="robots"
        src={`https://robohash.org/${data.id}?size=150x150`}
      />
      <div>
        <h2>{data.name}</h2>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default Card;
