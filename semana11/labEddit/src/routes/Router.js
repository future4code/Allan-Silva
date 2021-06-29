import React  from 'react'
import { Switch, Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SingUpPage from '../pages/SingUpPage/SingUpPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import styled from 'styled-components'

const Router = ({ setRightButtonText }) => {
    
    const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10vh;
    `
    
    return(
        <ScreenContainer>
            <Switch>
                <Route exact path="/login">
                    <LoginPage setRightButtonText={setRightButtonText} />
                </Route>

                <Route exact path="/cadastro">
                    <SingUpPage setRightButtonText={setRightButtonText} />
                </Route>

                <Route exact path="/feed">
                    <FeedPage />
                </Route>

                <Route exact path="/post/:id">
                    <PostPage />
                </Route>
            </Switch>
        </ScreenContainer>
    )
}

export default Router;