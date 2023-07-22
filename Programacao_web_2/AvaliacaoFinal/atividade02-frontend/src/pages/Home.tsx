import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

interface videoInterface {
  id: number;
  name: string; 
  url: string;
  id_Category: number;
}

interface categoryInterface {
  id: number
  name: string
}


function Home() {

  const [listaVideo, setListaVideo] = useState([]);
  const [listaCategory, setListaCategory] = useState([]);

  useEffect(() => {
      buscarVideo();
      buscarCategory();
  }, []);

  function buscarVideo(){
    axios.get('http://localhost:3100/video').then(resultado => {
      console.log(resultado.data);
      setListaVideo(resultado.data);
    })
  }
  function buscarCategory(){
    axios.get('http://localhost:3100/categoria').then(resultado => {
        setListaCategory(resultado.data);
      console.log(resultado.data);
    })
  }
function excluir(id: number) {
  console.log(id)
  axios.delete(`http://localhost:3100/video/excluir/${id}`).then(resultado => {
    console.log("deletado ")
    buscarVideo()
  })

}
  return (
    <>
    <Link to='/adicionar'>Adicionar novo Vídeo</Link>
    {
    
     listaCategory.map((category: categoryInterface) => (
      <>
        <h1>{category.name}</h1>
        {
        listaVideo.map((video: videoInterface) => (
        
          video.id_Category == category.id?
          <div>
            <iframe 
            width="560" 
            height="315" 
            src={video.url} 
            title={video.name} 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; picture-in-picture">
            </iframe>
            <h2>{video.name}</h2>
            <button type='button' onClick={() => excluir(video.id)}  id='voltar'>Excluir</button>
          </div>
          :
          <></>
        ))
        }
      </>
    
    ))
    }
     <Link to={'/adicionar'} id='voltar'> Adicionar Video </Link>
    </>
  );
}

export default Home;
