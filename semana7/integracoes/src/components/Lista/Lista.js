import React from 'react'
import axios from 'axios'

export default class Lista extends React.Component {
    state= {
        users: []
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {

        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                {
                    headers: {
                        Authorization: "allan-silva-cruz"
                    }
                }
            )
                .then((res) => {
                    this.setState({ users: res.data });
                })
                .catch((err) => {
                    console.log(err.response.data);
                });
    }

    deleteUser = (idUser) => {
        if(window.confirm("Tem certeza que deseja apagar?")) {
            axios
                .delete(
                    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`,
                    {
                        headers: {
                            Authorization: "allan-silva-cruz"
                        }
                    }
                )
                .then((res) => {
                    alert("Apagado com sucesso!")
                    this.getUser()
                })
                .catch((err) => {
                    alert("Erro ao apagar o usuario!")
                });
        }
    }

    render() {
        const userList = this.state.users.map((user) => (
            <div>
                <li key={user.id}>
                    <span>{user.name}</span>
                    <button onClick={() => this.deleteUser(user.id)}>X</button>
                </li>
            </div>
        ));


        return(
            <div>
                <ul>
                    {userList}
                </ul>
            </div>
        )
    }
}