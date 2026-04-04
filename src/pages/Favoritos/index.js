import "./style.css"
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function Favoritos(){
    const [filmes,setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@favorito");
        setFilmes(JSON.parse(minhaLista) || []);
    },[])

    function excluirFilme(id){
        let filtrofilmes = filmes.filter((item)=>{ 
            return( item.id !== id)
        })
        setFilmes(filtrofilmes);
        localStorage.setItem("@favorito", JSON.stringify(filtrofilmes))
        toast.success("filme excluido com sucesso")
    }



    return(
        <div className="container">
            <h1 className="title-f">Meus Favoritos</h1>

            {filmes.length === 0 && <span> Você não tem nenhum filme salvo ; (</span>}

            <ul className="ul">
                {filmes.map((item)=>{
                    return(
                        <div className="hud">
                        <Link to={`/sobre/${item.id}`} className="posicao">

                            <img key={item.id} alt={item.title} src={`http://image.tmdb.org/t/p/original/${item.poster_path}`}/>
                            <div className="li">
                                <li className="bold" key={item.id}>{item.title}</li>
                                <li key={item.id}>{item.overview}</li>
                            </div>
                        </Link>
                                <button onClick={()=> excluirFilme(item.id) } className="excluir">excluir</button>
                        </div>
                        
                    )
                })}
            </ul>
        </div>
    );
}

export default Favoritos;