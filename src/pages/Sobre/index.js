import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Style.css"

import api from "../../services/api";

function Sobre(){
    const [detalhes, setDetalhes] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadDetail(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:"a1df0f03470df6b9f1b3f027f5f5b119",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setDetalhes(response.data);
                setLoading(false)
            })
            .catch(()=>{
                console.log("Filme não encontrado",{
            position:"bottom-right"
        })
                navigate("/", {replace: true});
                return;
            })
        }
    loadDetail();
    return (()=>{    
    })
    },[id,navigate])

    function salvarFilme(){
        const favorito = localStorage.getItem("@favorito");

        let filmesSalvos = JSON.parse(favorito) || [];

        const hasFilmes = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === detalhes.id)
        if(hasFilmes){
            toast.warn("Esse filme já foi salvo!",{
            position:"bottom-right"
        })
            return;
        }
        else{
            filmesSalvos.push(detalhes)
            localStorage.setItem("@favorito", JSON.stringify(filmesSalvos))
            toast.success("Filme salvo com sucesso",{
            position:"bottom-right"
        })
        }
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando a página...</h1>
            </div>
        )  
    }

    

    return(
        <div className="container">
        <div className="filme-info">
            <h1>{detalhes.title}</h1>
           <img alt={detalhes.title} src={`http://image.tmdb.org/t/p/original/${detalhes.backdrop_path}`}/>
           <h3>Sinópse</h3>
           <p>{detalhes.overview}</p>
           <strong> Avaliação {detalhes.vote_average} / 10</strong>
           
           <div className="button">
            <button onClick={salvarFilme}>Favoritar</button>
            <Link rel="external" to={`https://www.youtube.com/results?search_query=${detalhes.title} trailer`} target="_blank">Trailer</Link>
           </div>
        </div>
        </div>
    );
}

export default Sobre;