import "./style.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <div className="inicio">
                <Link to="/">FireFlix</Link>
            </div>
            
            <div>
                <Link to="/favoritos" className="botao"> Favoritos</Link>
            </div>
        </header>
    )
}

export default Header;