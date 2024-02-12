import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="contact-info">
                <h2>Entre em Contato</h2>
                <p>Instagram: <a style={{ color: 'white', textDecoration: 'none' }} href='https://www.instagram.com/mara_vilhosa_e_o_sabor/' target='_blank'>mara_vilhosa_e_o_sabor</a></p>
                <p>Telefone: <a style={{ color: 'white', textDecoration: 'none' }} href='https://api.whatsapp.com/send/?phone=5511989272470&text=Ol%C3%A1%2C+....&type=phone_number&app_absent=0' target='_blank'>(11) 989272470</a></p>
                {/* Adicione mais informações de contato conforme necessário */}
            </div>

            <div className="copyright">
                <p>&copy; 2024 Seus MaraVilhosa Salgados. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
