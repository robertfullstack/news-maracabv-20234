import React, { useState, useEffect } from "react";
import { database, storage } from "../firebaseConfig";
import "../../Styles/Admin.css";
import ImageUpload from "../../components/ImageUpload";

export default function Admin() {
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [productDescription, setProductDescription] = useState("");
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

        if (!productName || !productImage || !productDescription) {
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
        });

        // Clear the form after submitting
        setProductName("");
        setProductImage(null);
        setProductDescription("");
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
        <div id="main-admin">
            <h1 style={{ textAlign: 'center', paddingTop: '60px' }}>Sobre: </h1>
            <ImageUpload />

            <h1 style={{ textAlign: 'center', paddingTop: '60px' }}>Adicionar Novo Produto: </h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Nome do Produto:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Imagem do Produto:</label>
                    <input type="file" onChange={handleImageChange} />
                </div>
                <div>
                    <label>Descrição do Produto:</label>
                    <textarea
                        style={{ width: '100%', height: '100px', padding: '10px', fontSize: '16px', fontWeight: '700', margin: '10px 0' }}
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Adicionar Novo Produto</button>
                </div>
            </form>

            <h1 style={{ textAlign: 'center', paddingTop: '60px' }}>Produtos Existentes: </h1>
            <div id="main-admin-produtos">
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <img src={product.imageUrl} alt={`Product ${product.id}`} width={200} />
                        <p>{product.description}</p>
                        <button onClick={() => handleDeleteProduct(product.id)}>Excluir Produto</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
