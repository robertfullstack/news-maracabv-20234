import React from "react";
import "../Styles/Contact.css";
import Header from "../components/Header";
import imageLocal from "../images/image-local-mara.jpg";

export default function Contact() {
    return (
        <div id="main-contact">
            <div id="headerContact">
                <Header />
            </div>

            <div>
                <h1 id="h1-contact">MaraVilhosa Salgados</h1>
                <img id="image-contact" src={imageLocal} />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.9767988777676!2d-46.417563425023474!3d-23.49734515924278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6349b2bd5343%3A0x9ac615340fb629d8!2sMara%20Vilhosa%20Salgados!5e0!3m2!1spt-BR!2sbr!4v1708276652971!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <button id="button-contact"><a href="https://api.whatsapp.com/send/?phone=5511989272470&text=Ol%C3%A1%2C+....&type=phone_number&app_absent=0">Entrar em Contato</a></button>
            </div>

        </div>
    )
}