import React, { Component } from "react";
import Opciones from "./Opciones";
import HistorialOpciones from "./HistorialOpciones";
import datos from "./data.json";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identificador: 1,
      id: "1",
      arrayOpciones: [],
      visible: "",
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { identificador, id, arrayOpciones } = this.state;
    if (prevState.identificador !== identificador && identificador <= 5) {
      arrayOpciones.push(id.substring(1).toUpperCase());
    }
  };

  handleOpcionA = () => {
    const { identificador } = this.state;
    if (identificador < 5) {
      this.setState({
        identificador: identificador + 1,
        id: identificador + 1 + "a",
      });
    }
  };

  handleOpcionB = () => {
    const { identificador } = this.state;

    if (identificador < 5) {
      this.setState({
        identificador: identificador + 1,
        id: identificador + 1 + "b",
      });
    }
  };

  render() {
    const { id, arrayOpciones } = this.state;
    const filtrarData = datos.find((objeto) => objeto.id.includes(id));
    console.log({ filtrarData });
    let handles = {
      funA: this.handleOpcionA,
      funB: this.handleOpcionB,
    };

    return (
      <div className="layout">
        <h1 className="historia">{filtrarData.historia}</h1>
        <Opciones
          handles={handles}
          opciones={filtrarData.opciones}
          identificador={this.state.identificador}
        />

        <HistorialOpciones
          opcionesAnteriores={id.substring(1).toUpperCase()}
          arrayOpciones={arrayOpciones}
        />
      </div>
    );
  }
}

export default Main;