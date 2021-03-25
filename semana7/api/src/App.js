import axios from 'axios';
import React from 'react';


export default class App extends React.Component {

  state = {
    activity: {}
  }

  getActivity = () => {
    axios
      .get("http://www.boredapi.com/api/activity/")
    .then((res) => {
      console.log(res.data);
      this.setState({ activity: res.data });
    })
    .catch((e) => {
      console.log(e);
    });
  };

  render() {
    const { activity, type, price, participants } = this.state.activity;
    return (
      <div>
        <h1>Procurando o que fazer?</h1>
        <button onClick={this.getActivity}>Clique aqui!</button>
        <hr />
        <p>Atividade: {activity}</p>
        <p>Tipo: {type}</p>
        <p>Preço: {price}</p>
        <p>participantes: {participants}</p>
        <hr/>
      </div>
    );
  }
}
