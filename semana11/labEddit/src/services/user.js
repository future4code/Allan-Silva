import axios from 'axios'
import { baseUrl } from '../constants/url'
import { goToFeed } from '../routes/Coordinator'

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${baseUrl}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const singUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${baseUrl}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
            setRightButtonText("Logout")
        })
        .catch((err) => alert(err.response.data.message))
}