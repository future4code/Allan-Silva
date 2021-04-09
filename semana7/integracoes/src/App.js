import React from 'react';
import Register from './components/Register/Register';
import Lista from './components/Lista/Lista'


export default class App extends React.Component {
  state = {
    page: 0
  }

  changePage = () => {
    if(this.state.page === 0) {
      return <Register/>
    } else if(this.state.page === 1) {

      return <Lista />
    }
  }
  
  changeState = () => {
    if (this.state.page === 0) {
      this.setState({ page: 1 })
    } else if (this.state.page === 1) {
      this.setState({ page: 0 })
    }
  }

  actionChange = () => {
    switch (this.state.page) {
      case 0:
        return <button onClick={this.changeState}>Ir para a lista de Usuários</button>
      case 1:
        return <button onClick={this.changeState}>Ir para a página de Login</button>
      default:
        return
    }
  }

render(){
  
  return(
    <div>
      {this.actionChange()}
      {this.changePage()}
    </div>
  )
}
}