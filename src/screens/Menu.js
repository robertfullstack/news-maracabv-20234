import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { database } from "../services/firebaseConfig";
import "../Styles/Menu.css";
import imageLogo from "../images/image-logo.png";

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
                    <img src={imageLogo} width={200} style={{ marginLeft: '170px' }} />
                    <div id="header">
                        <Header />
                    </div>
                </div>
            </div>
            <div id="main-containers-produtos">
                {products.map((product, index) => (
                    <div key={index} id="main-container-produto">
                        <h2>{product.name}</h2>
                        <img src={product.imageUrl} alt={`Product ${index}`} />
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
