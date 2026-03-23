import "./style.css"

import { useEffect, useState} from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

//https://api.themoviedb.org/3/movie/now_playing?api_key=a1df0f03470df6b9f1b3f027f5f5b119&language=pt-br

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                api_key: "a1df0f03470df6b9f1b3f027f5f5b119",
                language: "pt-br",
                page: 1,
            }
        })
            setFilmes(response.data.results)
            console.log(response.data.results)
            console.log(filmes)
        }
        loadFilmes();
    },[])
    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                         <article key={filme.id}>
                        <strong className="titulo">{filme.title}</strong>
                        <img className="capa" src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                        <Link className="acessar" to={`/sobre/${filme.id}`}>Acessar</Link>

                    </article>
                    )
                   
                })}
            </div>

        </div>
    );
}

export default Home;