import React, { Component } from "react";

class HistorialOpciones extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const { opcionesAnteriores } = this.props;

    return (
        <div className="historialOpciones">
          
          <h3>Tu selección anterior: {opcionesAnteriores}</h3>
            <h4>Todas tus opciones elegidas: </h4>
  
          <ul>
            {this.props.arrayOpciones.map((elemento, index) => {
              return <li key={index}> {elemento}</li>;
            })}
          </ul>
        </div>
      );
  }

}

export default HistorialOpciones;