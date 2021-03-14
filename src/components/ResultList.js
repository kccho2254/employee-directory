import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
        <li className="list-group-item">
          <img alt={props.name} className="img-fluid" src={props.image} />

          <h3>Name: {props.name}</h3>
          <h3>Location: {props.location}</h3>
          <h3>Email: {props.email}</h3>
        </li>
    </ul>
  );
}

export default ResultList;
