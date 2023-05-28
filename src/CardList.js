import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {

  const ListofCards = robots.map((el, index) => {
    return <Card data={el} key={index} />;
  });

  return <div>{ListofCards}</div>;
};

export default CardList;
