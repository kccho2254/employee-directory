import React from "react";

function ResultList({results}) {
  console.log(results)
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
        </tr>
      </thead>

      {/* map first for how many users, then pass data down */}
      <tbody>
        {results.map(({ name, location, email }) => {
          return (
          <tr>
            <td>{name.first} {name.last}</td>
            <td> {location.city} </td>
            <td> {email} </td>
          </tr>
          )
        })}
        
      </tbody>
    </table>
  );
}

export default ResultList;
