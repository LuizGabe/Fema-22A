import { Link } from "react-router-dom";


export function AvatarList () {

    return (
        <>
            <h1>Olá Avatar</h1>

            <Link to={'/avatar/cadastro'}>Cadastrar</Link>
        </>
    )
}