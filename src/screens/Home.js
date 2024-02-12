import React, { useEffect, useState } from "react";
import { database } from "../services/firebaseConfig";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import "../Styles/Home.css";

import imageContainerTer from "../images/image-salgado-container-ter.png";
import imageFritos from "../images/imagem-fritos.jpg";
import imageAssados from "../images/imagem-assados.jpg";
import imageCoxinhaQualidade from "../images/imaeg-coxinha.webp";
import Header from "../components/Header";

import { GrAchievement } from "react-icons/gr";
import { FaClock } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { TiArrowUp } from "react-icons/ti";

import imageClienteOne from "../images/image-cliente-01.png";
import imageClienteTwo from "../images/image-cliente-02.png";


import imageEspecialidadeOne from "../images/image-especialidade-one.jpg";
import imageEspecialidadeTwo from "../images/image-especialidade-two.jpg";
import imageEspecialidadeTree from "../images/image-especialidade-tree.jpeg";

import Footer from "../components/Footer";

import { FaStar } from "react-icons/fa";

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
                <h1><span style={{ fontSize: '55px' }}>M</span>ARA<span style={{ fontSize: '55px' }}>V</span>ILHOSA SALGADOS</h1>
                <h3>PRODUTOS FEITOS COM A QUALIDADE QUE VOCÊ MERECE</h3>
                <Link to="/Menu" className="link-none-style">
                    <button id="main-home-button-visu-cardapio">Visualizar Cardápio</button>
                </Link>

            </div>
            <h1 className="text-style-one" style={{ textAlign: 'center', margin: '40px 0', letterSpacing: '2px', fontWeight: '500' }}>NOSSOS <span>DIFERENCIAIS</span></h1>
            <div id="main-container-diferencias">
                <figure>
                    <figcaption className="primeiro-figcaption">
                        <h2 style={{ fontWeight: '600' }}>Exclusividade</h2>
                        <p>Nossas massas são exclusivas te proporcionando um sabor inesquecível e delicioso, experimente!</p>
                        <TiArrowUp size={100} style={{ rotate: '-50deg' }} className="setas-primeiro-figcaption" />
                        <TiArrowUp size={100} style={{ rotate: '-130deg' }} className="setas-primeiro-figcaption" />
                        <h2 style={{ fontWeight: '600' }}>Saboroso</h2>
                        <p>Gostinho caseiro. Todos nossos Salgados São temperados na medida certa.</p>
                    </figcaption>
                    <figcaption className="segundo-figcaption">
                        <h2 style={{ fontWeight: '600' }}>Qualidade</h2>
                        <p>Experimente a diferença que o compromisso com a qualidade faz em cada mordida!</p>
                        <TiArrowUp size={100} style={{ rotate: '50deg' }} className="setas-segundo-figcaption" /> <br />
                        <TiArrowUp size={100} style={{ rotate: '130deg' }} className="setas-segundo-figcaption" />
                        <h2 style={{ fontWeight: '600' }}>Atendimento </h2>
                        <p>Oferecemos um atendimento personalizado, onde cada pedido é preparado com cuidado e atenção.</p>
                    </figcaption>
                    <img src={imageCoxinhaQualidade} />
                </figure>
            </div>
            <div id="main-container-nossas-especialidades">
                <h1 className="text-style-one" style={{ fontWeight: 500, textAlign: 'center', marginTop: '50px', letterSpacing: '2px', fontWeight: '600' }}>NOSSAS <span>ESPECIALIDADES</span></h1>
                <div>
                    <figure>
                        <img src={imageEspecialidadeOne} />
                        <h2>Salgados tradicionais</h2>
                    </figure>
                    <figure>
                        <img src={imageEspecialidadeTwo} />
                        <h2>Salgados pequenos</h2>
                    </figure>
                    <figure>
                        <img src={imageEspecialidadeTree} />
                        <h2>Empadas</h2>
                    </figure>
                </div>
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
            <h1 style={{ textAlign: 'center' }}>VARIEDADES</h1>
            <div id="main-container-quar" style={{ marginBottom: '60px' }}>
                <div>
                    <h2>Fritos</h2>
                    <Link to="/Menu">
                        <img src={imageFritos} />
                    </Link>
                </div>
                <div>
                    <h2>Assados</h2>
                    <Link to="/Menu">
                        <img src={imageAssados} />
                    </Link>
                </div>
            </div>
            <div id="main-container-pedido-hoje">
                <h1>PRODUTOS EXCLUSIVOS</h1>
                <p>Todos os ingredientes são selecionados e de primeira linha. Nossos produtos são testados por um rigoroso teste de qualificação, é uma receita familiar aprovada por especialistas. Assim chegamos em uma massa exclusiva, com sabor inesquecível.</p>
                <button >
                    <a href="https://api.whatsapp.com/send/?phone=5511989272470&text=Ol%C3%A1%2C+....&type=phone_number&app_absent=0" target="_blank" >FAÇA SEU PEDIDO HOJE MESMO</a>
                </button>
            </div>
            <div id="main-contaier-depoimento">
                <h1 className="text-style-one"><span>Depoimentos de nosso clientes</span> </h1>
                <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000}>
                    <div>
                        <figure>
                            <img src={imageClienteOne} />
                        </figure>
                        <h3>Iago Pereira</h3>
                        <p>Eu realmente me surpreendi com o sabor e qualidade dos salgados da maravilhosasalgados!! Uma massa incrível eu recomendo para todos.</p>
                        <FaStar color="orange" style={{ margin: '10px' }} size={22} />
                        <FaStar color="orange" style={{ margin: '10px' }} size={22} />
                        <FaStar color="orange" style={{ margin: '10px' }} size={22} />
                        <FaStar color="orange" style={{ margin: '10px' }} size={22} />
                        <FaStar color="orange" style={{ margin: '10px' }} size={22} />
                    </div>
                    <div>
                        <figure>
                            <img src={imageClienteTwo} />
                        </figure>
                        <h3>Vitória Oliveira</h3>
                        <p>Excelente! Salgados quentinhos, sequinhos e muito saborosos. Comprarei mais vezes com certeza.</p>
                        <FaStar color="orange" style={{ margin: '10px' }} size={22} />
                        <FaStar color="orange" style={{ margin: '10px' }} size={22} />
                        <FaStar color="orange" style={{ margin: '10px' }} size={22} />
                        <FaStar color="orange" style={{ margin: '10px' }} size={22} />
                        <FaStar color="orange" style={{ margin: '10px' }} size={22} />
                    </div>
                </Carousel>
            </div>
            <div id="main-container-image-local-sobre">
                <figure>
                    {/* <img src={imageLocal} /> */}
                    {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
                    <figcaption>
                        <h2>Sobre</h2>
                        <p>Nosso comércio nasceu da necessidade de encontrar durante a pandemia um salgado leve e recheado, com bons ingredientes. Então, com o mesmo carinho e dedicação que produzimos para nós, começamos à atender a comunidade local. Nosso objetivo é crescer como negócio, mantendo a qualidade e valor acessível nos nossos produtos, para que você, Mara Vilhoso cliente, aproveite ao máximo os sabores da vida!</p>
                        <button><a href="https://www.google.com/maps/place/Mara+Vilhosa+Salgados/@-23.49735,-46.414988,20z/data=!4m6!3m5!1s0x94ce6349b2bd5343:0x9ac615340fb629d8!8m2!3d-23.4973501!4d-46.4149885!16s%2Fg%2F11rmr9_67h?hl=pt-BR&entry=ttu" target="_blank">Visualizar Localização</a></button>
                    </figcaption>
                </figure>
            </div>
            <Footer />
        </div >

    );
};

export default HomePage;
