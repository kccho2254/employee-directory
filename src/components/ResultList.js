import React from "react";

function ResultList({ results }) {

  if (results[0]) {
    console.log(results[0])

    return (
      <div className="container form-control" >

        <table >
          <thead >
            <tr >
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody >
            {
              results[0].map(({ name, location, email }) => (
                <tr >
                  <td>{name.first}</td>
                  <td> {location.city} </td>
                  <td> {email} </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  } return "";
}

export default ResultList;