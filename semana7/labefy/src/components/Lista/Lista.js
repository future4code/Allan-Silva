import React from 'react'
import axios from 'axios'


export default class Lista extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getPlaylist();
    }

    getPlaylist = () => {

        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                {
                    headers: {
                        Authorization: "allan-silva-cruz"
                    }
                }
            )
            .then((res) => {
                this.setState({ playlists: res.data.result.list });
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }

    deleteList = (idMusic) => {
        if (window.confirm("Tem certeza que deseja apagar?")) {
            axios
                .delete(
                    `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idMusic}`,
                    {
                        headers: {
                            Authorization: "allan-silva-cruz"
                        }
                    }
                )
                .then((res) => {
                    alert("Apagado com sucesso!")
                    this.getPlaylist()
                })
                .catch((err) => {
                    alert("Erro ao apagar Playlist")
                });
        }
    }

    render() {
        const musicList = this.state.playlists.map((music) => (
            <div>
                <li key={music.id}>
                    <span>{music.name}</span>
                    <br/>
                    <button onClick={() => this.deleteList(music.id)}>Deletar</button>
                    <hr/>
                </li>
            </div>
        ));


        return (
            <div>
                <ul>
                    {musicList}
                </ul>
            </div>
        )
    }
}