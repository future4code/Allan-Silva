import axios from 'axios'
import { baseUrl } from '../constants/url'

export const Vote = (id) => {
    axios.put(`${baseUrl}/posts/${id}/vote`)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}

export const VoteComment = (idPost, idComment) => {
    axios.put(`${baseUrl}/posts/${idPost}/comment/${idComment}/vote`)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}