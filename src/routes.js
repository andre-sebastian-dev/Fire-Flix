import { BrowserRouter, Routes, Route } from "react-router-dom";

import Favoritos from "./pages/Favoritos";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Err from "./pages/Err";

import Header from "./components/Header";


function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/> 
            <Route path="/sobre/:id" element={<Sobre/>}/>


            <Route path="*" element={<Err/>}/>           
        </Routes>
        </BrowserRouter>
    );
}
export default RoutesApp;