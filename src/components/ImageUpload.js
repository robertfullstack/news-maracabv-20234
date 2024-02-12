import React, { useState } from "react";
import { storage, database } from "../services/firebaseConfig";

import "../services/admin/Admin.css";

const UploadPage = () => {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [productName, setProductName] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.error(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        // Store the image URL in the database
                        database.ref("uploadedImage").set({
                            url: url,
                        });
                    });
            }
        );
    };

    const enviarInfoFirebase = (e) => {
        e.preventDefault();

        // Assuming you have a "products" node in your Firebase database
        database.ref("products").push({
            name: productName,
            imageUrl: '', // You need to update this with the actual URL from storage
        });

        // Clear the form after submitting
        setProductName('');
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="imageUpload" className="form-label">Imagem Sobre:</label>
                            <input type="file" className="form-control" id="imageUpload" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <progress value={progress} className="form-control" max="100" />
                        </div>
                        <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadPage;
