import React, { useReducer } from "react";

function Count() {
  const dogs = [
    {
      name: "Harry",
      image: "https://images.dog.ceo/breeds/vizsla/n02100583_10960.jpg"
    },
    {
      name: "Hermione",
      image: "https://images.dog.ceo/breeds/husky/n02110185_1511.jpg"
    }
  ];

  const reducerFunction = ((state, action) => {
    if (action === "Harry") {
      return {...state, harryPraises: state.harryPraises + 1};
    } else if (action === "Hermione") {
      return {...state, hermoinePraises: state.hermoinePraises + 1};
    } else {
      return state;
    }
  }, {harryPraises: 0, hermoinePraises: 0}
  );

  const initialState = {
    harryPraises: 0,
    hermoinePraises: 0
  };

  const [state, dispatch] = useReducer(
    reducerFunction,
    initialState
  );

  return (
    <div className="App">
      <div className="row mt-5">
        {dogs.map(item => (
          <div key={item.name} className="card mx-auto col-4">
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.name} has been praised {state[item.name] + "Praises"} times!</p>
              <button className="btn btn-primary" onClick={() => dispatch(item.name)}>Praise</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;
