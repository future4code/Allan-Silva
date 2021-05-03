import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import {baseUrl} from '../../constants/url'
import CardPost from '../../components/cardPost/CardPost';
import { CardContainer } from './style';
import { goToPost } from '../../routes/Coordinator';
import { useHistory } from 'react-router';

const FeedPage = () => {
    useProtectedPage()
    const list = useRequestData([], `${baseUrl}/posts`)
    const history = useHistory()

    const listCards = list.map((post)=> {
        return <CardPost
            key={post.id}
            username={post.username}
            title={post.title}
            text={post.text}
            onClick={()=> goToPost(history)}
            />
    })

    return (
        <CardContainer>
            {listCards}
        </CardContainer>
    )
}

export default FeedPage;