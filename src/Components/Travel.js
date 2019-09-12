import React from "react";

class MyTravel extends React.Component {
  render() {
    return (
      <div>
        <p>Ville de destination: {this.props.destination}</p>
        <br />
        <p>Pays de destination: {this.props.country}</p>
        <br />
        <p>Photo: {this.props.photo}</p>
        <br />
        <p>Distance du voyage: {this.props.distance}</p>
        <hr />
      </div>
    );
  }
}

export default MyTravel;
