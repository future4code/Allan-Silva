import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [like, setLike] = useState(false)
  const [likeCounter, setLikeCounter] = useState(0)
  const [coment, setComent] = useState(false)
  const [comentCounter, setComentCounter] = useState(0)
  const [coments, setComents] = useState([])



  const onClickCurtida = () => {
    if(like) {
      setLike(!like)
      setLikeCounter(likeCounter -1)
    } else {
      setLike(!like)
      setLikeCounter(likeCounter + 1)
    }
  };

  const onClickComentario = () => {
    setComent(!coment)
  };

  const enviarComentario = (comentario) => {
    const ListOfComent = [...coments, comentario]

    setComents(ListOfComent)
    setComent(coment)
    setComentCounter(comentCounter + 1)
  }

  const iconeCurtida = like ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  const caixaDeComentario = coment ? (
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (
      coments.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={likeCounter}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={comentCounter}
        />
      </PostFooter>
        {caixaDeComentario}
    </PostContainer>
  )
}

export default Post