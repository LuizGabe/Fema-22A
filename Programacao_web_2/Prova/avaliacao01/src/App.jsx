import Card from "./components/Card.tsx";
import variables from "./config/global.variables.ts";
import "./App.style.scss"

const App = () => {
  return (
    <>
    <h1>Vamos realizar a atividade 4</h1>
    <p>Criar uma página para controlar a lista de vídeos do youtube para estudar. </p> <br/>
    <p>Consiste no cadastro de um vídeo do youtube (link) e uma descrição. </p> <br/>
    <p>Pode ser editado o link do vídeo e a descrição pode ser excluído.</p> <br/>
   
      {
        variables.map((n) => (
          <Card 
            id={n.id} 
            nome={n.nome} 
            imgUrl={n.imgUrl}
            />
        ))}
    </>
  );
}

export default App;
