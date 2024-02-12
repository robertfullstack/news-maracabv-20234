import React, { useState, useEffect } from "react";
import { database, storage } from "../firebaseConfig";
import "./Admin.css";
import ImageUpload from "../../components/ImageUpload";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Admin() {
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(""); // State for product price
    const [productCents, setProductCents] = useState(""); // State for product cents
    const [productFlavors, setProductFlavors] = useState(""); // State for product flavors
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsRef = database.ref("products");

        productsRef.on("value", (snapshot) => {
            const productsData = snapshot.val();
            if (productsData) {
                const productsArray = Object.entries(productsData).map(([key, value]) => ({
                    id: key,
                    ...value,
                }));
                setProducts(productsArray);
            }
        });

        return () => {
            productsRef.off("value");
        };
    }, []);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setProductImage(e.target.files[0]);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setIsPasswordCorrect(true);

        if (!productName || !productImage || !productDescription || !productPrice || !productCents || !productFlavors) { // Check for product cents
            alert("Preencha todos os campos antes de enviar.");
            return;
        }

        // Upload image to Firebase Storage
        const storageRef = storage.ref(`images/${productImage.name}`);
        await storageRef.put(productImage);

        // Get image URL from Firebase Storage
        const imageUrl = await storageRef.getDownloadURL();

        // Store product information in the Firebase Realtime Database
        await database.ref("products").push({
            name: productName,
            imageUrl: imageUrl,
            description: productDescription,
            price: productPrice, // Include product price
            cents: productCents, // Include product cents
            flavors: productFlavors // Include product flavors
        });

        // Clear the form after submitting
        setProductName("");
        setProductImage(null);
        setProductDescription("");
        setProductPrice(""); // Clear product price
        setProductCents(""); // Clear product cents
        setProductFlavors(""); // Clear product flavors
    };

    const promptForPassword = () => {
        const enteredPassword = prompt("Digite a senha:");
        if (enteredPassword === "MaraVilhosa2024") {
            setIsPasswordCorrect(true);
        } else {
            alert("Senha incorreta. A página não será carregada.");
        }
    };

    const handleDeleteProduct = async (productId) => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este produto?");
        if (confirmDelete) {
            await database.ref(`products/${productId}`).remove();
        }
    };

    // Renderiza a página somente se a senha estiver correta
    if (!isPasswordCorrect) {
        promptForPassword();
        return null;
    }

    return (
        <div className="container">
            <h1 className="text-center mt-5">Adicionar Novo Produto:</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Nome do Produto:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productImage" className="form-label">Imagem do Produto:</label>
                    <input type="file" className="form-control" id="productImage" onChange={handleImageChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">Descrição do Produto:</label>
                    <textarea
                        className="form-control"
                        id="productDescription"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Preço Unitário:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="productPrice"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productCents" className="form-label">O Valor do Cento:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="productCents"
                        value={productCents}
                        onChange={(e) => setProductCents(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productFlavors" className="form-label">Sabores:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="productFlavors"
                        value={productFlavors}
                        onChange={(e) => setProductFlavors(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Adicionar Novo Produto</button>
                </div>
            </form>

            <h1 className="text-center mt-5">Produtos Existentes:</h1>
            <div className="row justify-content-center">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <div className="card mb-3">
                            <img src={product.imageUrl} className="card-img-top" alt={`Product ${product.id}`} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">Preço: {product.price}</p>
                                <p className="card-text">Valor do Cento: {product.cents}</p>
                                <p className="card-text">Sabores: {product.flavors}</p>
                                <button onClick={() => handleDeleteProduct(product.id)} className="btn btn-danger">Excluir Produto</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
