import React from 'react';
import './App.css'
import Etapa1 from './componets/Etapa1';
import Etapa2 from './componets/Etapa2';
import Etapa3 from './componets/Etapa3';
import Final from './componets/Final';

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <Final />
    }
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  }

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        <br />
        {this.state.etapa !== 4 && (
          <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
        )}
      </div>
    );
  }
}

export default App