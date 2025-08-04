import React from "react";
import "./HomePage.css";
import "../../index.css"
import { useState } from "react";

export const HomePage = () => {

    const [changebotton, setChangebotton] = useState('#21c063');


    const onMouseOver = () => {
        setChangebotton('#197c5dff');
    };

    const onMouseOut = () => {
        setChangebotton('#21c063');
    };
    return (

        <section className="home__content">

            <div className="home__content-container">

                <img className="home__content-img" src="https://static.whatsapp.net/rsrc.php/v4/y6/r/wa669aeJeom.png" alt="Whatsapp-Image" />

                <h1 className="home__content-title">Descarga WhatsApp para Windows</h1>

                <span className="home__content-description">Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</span>


                <button onMouseOver={onMouseOver} onMouseOut={onMouseOut} className="home__content-button" type="button" style={{ backgroundColor: changebotton }}>Descargar</button>

                <div className="home__content-privacy">

                    <i className="bi bi-lock"></i>

                    <span className="span-text">Tus mensajes personales están cifrados de extremo a extremo.</span>
                </div>


            </div>



        </section>

    );
};