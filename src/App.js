import React from "react";
import "./App.css";

import Travel from "./Components/Travel";

class App extends React.Component {

  render() {
    const allTravels = {
      destination: 'Paris',
      country: 'France',
      photo: '',
      distance: 200
  }
  const allTravels2 = {
    destination: 'N.Y',
    country: 'USA',
    photo: '',
    distance: 800
}
    
    return (
      <div className="App">
        <Travel {...allTravels}/>
        <Travel {...allTravels2}/>
      </div>
    );
  }
}

export default App;
