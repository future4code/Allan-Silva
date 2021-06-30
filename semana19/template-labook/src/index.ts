import app from "./app"
import { signUp } from "./endpoint/User/singUp"
import { login } from "./endpoint/User/login"
import { createPost } from "./endpoint/Post/createPost"
import { getPostById } from "./endpoint/Post/getPostById"


app.post('/users/signup', signUp)
app.post('/users/login', login)
app.post('/posts/create', createPost)
app.get('/posts/:id', getPostById)
