import React from 'react';
import { Link } from "react-router-dom";
import "./media/Style/home.css"

const Home = () => {
    return (
        <div>
            <h1>HOLA</h1>
            <Link to="/Login">Home</Link>
        </div>
    );
}

export default Home;
