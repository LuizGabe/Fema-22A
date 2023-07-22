import { Link, useNavigate, useParams,  } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AddVideoService, AddVideo } from './AddService'
import "./Home.css"

export default function Add() {
    
  const navigate = useNavigate ();

  const {id} = useParams ();

  const [video, setVideo] = useState<AddVideo>({descricao: '', link: ''});

  function valueChange(event: React.ChangeEvent<HTMLInputElement>){
      const {name, value} = event.target;
      setVideo({...video, [name]: value});
  }

  useEffect(() => {
      if (id){
          let video = AddVideoService.buscarPorId(id);
          if (video) {
          setVideo(video);
          }

      }
  }, [])

  function salvar(event: any) {
      event.preventDefault();

      if(video){
        AddVideoService.salvar(video)
      }
      navigate('/')
      AddVideoService.salvar(video);
  }
  
  return (
      <>
      <Link to={'/'} id='voltar'> Voltar </Link>
      <h1> Página de Adicionar Video </h1>
  <form>
      <div>
          <label> Descrição </label>
          <input type ='text' name='nome' value={video.descricao} onChange={valueChange}/>
      </div>
      <div>
          <label> Video (link) </label>
          <input type ='text' name='link' value={video.link} onChange={valueChange}/>
      </div>

      <button onClick={salvar}> Salvar </button>
  </form>

  
      </>
  )
}