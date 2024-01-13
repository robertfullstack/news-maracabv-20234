import React, { useState, useEffect } from "react";
import firebase from "../services/firebaseConfig";

export default function Produtos() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const storage = firebase.storage();
        const storageRef = storage.ref().child('images');

        storageRef.listAll()
            .then((result) => {
                // Mapeia todos os itens e obtém as URLs de download
                const promises = result.items.map((item) => item.getDownloadURL());
                return Promise.all(promises);
            })
            .then((downloadUrls) => {
                setImageUrls(downloadUrls);
            })
            .catch((error) => {
                console.error('Erro ao obter URLs de imagens:', error.code, error.message);
            });
    }, []);

    return (
        <div>
            <h4>Produtos :</h4>
            {imageUrls.map((url, index) => (
                <img key={index} src={url} alt={`Produto ${index}`} style={{ maxWidth: '300px', margin: '5px' }} />
            ))}
        </div>
    );
}
