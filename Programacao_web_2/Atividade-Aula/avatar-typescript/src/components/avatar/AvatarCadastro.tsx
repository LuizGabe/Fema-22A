import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarService } from "./AvatarService";


export function AvatarCadastro () {

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');

    function salvar(event:any) {
        event.preventDefault();

        let avatar: Avatar = {
            nome: nome,
            imagem: imagem
        }

        AvatarService.salvar(avatar);
    }

    return (
        <>

            <h1>Cadastro</h1>
        
            <Link to={'/avatar'}>Voltar</Link>

            <div>
                <label>Nome</label>
                <input type="text" onChange={(event) => setNome(event.target.value)}/>
            </div>
            <div>
                <label>Avatar (imagem)</label>
                <input type="text" onChange={(event) => setImagem(event.target.value)}/>
            </div>

            <button>Salvar</button>
        </>
    )
}