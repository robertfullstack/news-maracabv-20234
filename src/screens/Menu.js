import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { database } from "../services/firebaseConfig";
import "../Styles/Menu.css";
import imageLogo from "../images/image-logo.png";
import Footer from "../components/Footer";

export default function Menu() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from Firebase database
        const productsRef = database.ref("products");

        productsRef.on("value", (snapshot) => {
            const productsData = snapshot.val();
            if (productsData) {
                const productsArray = Object.values(productsData);
                setProducts(productsArray);
            }
        });

        // Cleanup function to remove the listener when component unmounts
        return () => {
            productsRef.off("value");
        };
    }, []);

    return (
        <div>
            <div id="main-container-menu-background">
                <div>
                    <img src={imageLogo} id="imageLogo-menu" width={200} style={{ marginLeft: '170px' }} />

                    <Header />

                </div>
            </div>
            <h1 id="text-h1-cardapio">CARDÁPIO ATUALIZADO</h1>
            <div id="main-containers-produtos">
                {products.map((product, index) => (
                    <div key={index} id="main-container-produto">
                        <img src={product.imageUrl} alt={`Product ${index}`} />
                        <h2 style={{ textAlign: 'center', fontSize: '26px', color: '#DB4A12', marginTop: '10px' }} >{product.name}</h2>
                        <p>{product.description}</p>
                        {/* Renderizando preço do produto */}
                        <p className="title-prod">Valores </p>
                        <ul className="list-detalhes-produtos">
                            <li>
                                Valor unitário: {product.price}
                            </li>
                            <li>
                                Valor do cento: {product.cents}
                            </li>
                        </ul>
                        <p className="title-prod">Sabores</p>
                        <ul className="list-detalhes-produtos">
                            <li>{product.flavors}</li>
                            {/* Adicione mais itens conforme necessário */}
                        </ul>
                        {/* Adicione outros preços aqui conforme necessário */}
                        <button className="button-menu-pedido">Realizar Pedido</button>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
