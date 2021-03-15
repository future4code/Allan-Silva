import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/Information/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5603AQHTLupIrLPHbA/profile-displayphoto-shrink_800_800/0/1613833038400?e=1620864000&v=beta&t=59WcQq4X0W90rOkGdBV4HlZcshIy-rRKAugchZDUrHs"
          nome="Allan De Sousa Silva" 
          descricao="Oi. Me chamo Allan, recém formado e cursando para entrar no mercado de trabalho como futuro Dev"
        />
        <div>
        <CardPequeno
          idade="Tenho 18 Anos"
          email="allansousasilva1@gmail.com"
          endereco="Rio de Janeiro, São Gonçalo"
        />
        </div>
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eb17dfd4a07be86d2b8951e_Labenu_principal_slogan.png"
          nome="Labenu" 
          descricao="Desenvolverdor Full Stack Em Formação" 
        />
        
        <CardGrande 
          imagem="http://www.uff.br/sites/default/files/imagens-das-paginas/logo-uff-branco-site_0.png"
          nome="Universidade Federal Fluminense" 
          descricao="Curso de Gestão e Empreendorismo" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
