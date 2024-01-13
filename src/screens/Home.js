import React, { useEffect, useState } from "react";
import { database } from "../services/firebaseConfig";
import { Link } from "react-router-dom";

import "../Styles/Home.css";

import imagePrincipalHome from "../images/COXINHAhome.webp";
import imageLocal from "../images/image-local-mara.jpg"
import imageContainerTer from "../images/image-salgado-container-ter.png";
import Header from "../components/Header";

import { GrAchievement } from "react-icons/gr";
import { FaClock } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";


const HomePage = () => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        // Recupera a URL da imagem do banco de dados ao carregar a página
        const imageRef = database.ref("uploadedImage/url");
        imageRef.on("value", (snapshot) => {
            const url = snapshot.val();
            setImageUrl(url);
        });
    }, []);

    return (
        <div id="main-content-home">
            <div id="main-prim-container">
                <Header />
                <h1>MARA VILHOSA SALGADOS</h1>
                <h3>PRODUTOS FEITOS COM A QUALIDADE QUE VOCÊ MERECE</h3>
                <button id="main-home-button-visu-cardapio">Visualizar Cardápio</button>
            </div>
            <div id="main-container-seg">
                <h1 className="text-style-one">EXPERIÊNCIA <span>CULINÁRIA</span></h1>
                <p>Fabricamos salgados com alto padrão de qualidade e de sabores diferenciados, com destaque especial para os QUICHES e INTEGRAIS</p>
                <div className="main-containers-experiencia">
                    <div>
                        <GrAchievement style={{ fontWeight: '900' }} size={60} />
                        <h2>QUALIDADE</h2>
                        <p>Salgados para eventos com qualidade e sabor inigualável.</p>
                    </div>
                    <div>
                        <FaClock size={70} />
                        <h2>PRODUÇÃO</h2>
                        <p>Salgados de altíssimo padrão com diversos sabores.</p>
                    </div>
                    <div>
                        <TbTruckDelivery size={80} />
                        <h2>ENTREGA</h2>
                        <p>Entregamos em nossa região em minutos, faça seu pedido.</p>
                    </div>
                </div>
            </div>
            <div id="main-container-ter">
                <h1 style={{ textAlign: 'center' }}>QUALIDADE E EXELENCIA <br /> EM UM SÓ LUGAR!</h1>
                <img src={imageContainerTer} width={500} />
            </div>
            <div id="main-container-image-local-sobre">
                <figure>
                    {/* <img src={imageLocal} /> */}
                    {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
                    <figcaption>
                        <h2>Sobre</h2>
                        <p>Nosso comércio nasceu da necessidade de encontrar durante a pandemia um salgado leve e recheado, com bons ingredientes. Então, com o mesmo carinho e dedicação que produzimos para nós, começamos à atender a comunidade local. Nosso objetivo é crescer como negócio, mantendo a qualidade e valor acessível nos nossos produtos, para que você, Mara Vilhoso cliente, aproveite ao máximo os sabores da vida!</p>
                        <button>Visualizar Localização</button>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default HomePage;
