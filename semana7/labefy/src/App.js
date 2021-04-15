import React from 'react';
import Register from './components/CreatrPlaylist/CreatePlaylist';
import Lista from './components/Lista/Lista'


export default class App extends React.Component {
  state = {
    page: 0
  }

  changePage = () => {
    if (this.state.page === 0) {
      return <Register />
    } else if (this.state.page === 1) {
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
        return <button onClick={this.changeState}>Ver Playlist</button>
      case 1:
        return <button onClick={this.changeState}>Voltar para Home</button>
      default:
        return
    }
  }

  render() {

    return (
      <div>
        <header>
          <h1>Criar Playlist</h1>
        {this.actionChange()}
        </header>
        <main>
          <br/>
        {this.changePage()}
        </main>
        <footer>

        </footer>
      </div>
    )
  }
}