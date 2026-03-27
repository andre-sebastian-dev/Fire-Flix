import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Style.css"

import api from "../../services/api";

function Sobre(){
    const [detalhes, setDetalhes] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

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
                console.log("Filme não encontrado")
            })
        }

    loadDetail();

    return (()=>{
        
    })
    },[])

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
           <img src={`http://image.tmdb.org/t/p/original/${detalhes.backdrop_path}`}/>
           <h3>Sinópse</h3>
           <p>{detalhes.overview}</p>
           <strong> Avaliação {detalhes.vote_average} / 10</strong>
           <button>Favoritar</button>
        </div>
        </div>
    );
}

export default Sobre;