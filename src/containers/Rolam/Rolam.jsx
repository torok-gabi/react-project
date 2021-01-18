import React from 'react';
import "./rolam.css";
import me from "./me.jpg";

const Rolam = () => {
    return (
        <section className="rolam-container">
            <div className="image">
                <h2 className="about">Rólam</h2>
                <img className="me-image" src={me} alt="rólam kép" />
                <p className="rolam-text">2017-ben kezdtem programozással foglalkozni, akkor még banki területen dolgoztam. 2020-ban megszereztem a megfelelő mélységű tudást és tapasztalatot (HTML5, CSS3, JS, Python, React, UX) a biztos karrierváltáshoz. Jelenleg készen állok egy front-end fejlesztő pozíció betöltésére.</p>
            </div>
        </section>  
    )
}

export default Rolam;
