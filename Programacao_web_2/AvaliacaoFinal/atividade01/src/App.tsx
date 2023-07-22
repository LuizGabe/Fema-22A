import React from "react";
import "./App.css";

function App() {

    // Aqui fica a configuração de pessoas que fazem parte do grupo
    const pessoas = [
        {nome:'Luiz Gabriel Grumicker Pereira', imgUrl: 'https://github.com/LuizGabe.png'},
        {nome:'Matheus Henrique da Rosa Foliatti', imgUrl: 'https://pps.whatsapp.net/v/t61.24694-24/267151366_341398807321807_3616139534915186143_n.jpg?ccb=11-4&oh=01_AdQi2trhtivmsQAz_1QbSR1Winogs6ZDDIFkYqWBw1inQw&oe=63963C32'},
        {nome:'Carlos Sadi Mucha Zomer', imgUrl: 'https://pps.whatsapp.net/v/t61.24694-24/166204119_1297907090985116_4128885010499393852_n.jpg?ccb=11-4&oh=01_AdQM5QByVyTl1fdGYhDvWxKNbmphhqTSVcnQmbptaCuBfg&oe=63965916'}
    ]
    return (

    <div>
        <section className={"atividade1"}>

            <div className= "pessoas" >
                {/* Aqui fica o Titulo */ }
                <h1 id = "titulo" > Integrantes </h1>

                {/* Aqui começa a div com as pessoas (imagem e nome) EM GRUPO */ }
                <div id="grupo" >
                    {
                        /* Aqui fica a repetição para mostrar todas as pessoas */
                        pessoas.map((n) => (
                            /* Aqui inicia a div das pessoas INDIVIDUALMENTE */
                            <div id= "pessoa" >
                                {/* Aqui fica a imagem que aparecera para cada pessoa */ }
                                <img src = { n.imgUrl } alt = {`${n.nome} imagem`} id = "foto" />
                                {/* Aqui fica o nome da pessoa que aparecera para cada pessoa */ }
                                <p id = "nome" > { n.nome } </p>

                                {/* Aqui termina a div das pessoas INDIVIDUALMENTE */ }
                            </div>
                        ))
                    }</div>
            </div>
        </section>
        <section className={"atividade4"}>
            <div>
                <h1 id="texto" > Tarefa n° 4 </h1>
                < p id = "texto" >
                    Criar uma página para controlar a lista de vídeos do youtube para
                    estudar: { " " }
                </p>
                <ul id = "listagem" >
                    <li id="texto" >
                        Consiste no cadastro de um vídeo do youtube(link) e uma descrição;
                    </li>{" "}
                    < br />
                    <li id="texto" >
                        Pode ser editado o link do vídeo e a descrição;
                    </li>{" "}
                    < br />
                    <li id="texto" > Pode ser excluído.</li>
                </ul>
            </div>
        </section>
    </div>
);


}

export default App;
