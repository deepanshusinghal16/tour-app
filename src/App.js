import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTour(newTours);
  }
  const [tours, setTour] = useState(data);

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tour Left</h2>
        <button className="btn-white" onClick={() => setTour(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return <div className="App">
    <Tours  tours={tours} removeTour={removeTour} />
  </div>;
};

export default App;
