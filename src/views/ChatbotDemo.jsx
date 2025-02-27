import React from 'react';
import "../ProjectModal.css"
import bot from "../img/bot.png"
import videobot from "../img/videobot.mp4"
const ChatbotDemo = () => {
    return (
        <div className='body'>
            <header className="header1">
                <h1>Demo Chatbot WhatsApp</h1>
            </header>

            <div className="chat-container">
                <div className="chat-header">
                    <img src={bot} alt="Bot Avatar" className="bot-avatar" />
                    <div>
                        <h2>Chat Bot</h2>
                        <small>en línea</small>
                    </div>
                </div>
                <div className="chat-body">
                    <div className="message user">
                        <div className="message-content">
                            Hola, quisiera hacer un pedido
                            <span className="message-time">10:01</span>
                        </div>
                    </div>
                    <div className="message bot">
                        <div className="message-content">
                            👋 *¡Bienvenido a Heladería Ice Cream!* 🍦
                            <span className="message-time">10:02</span>
                        </div>
                    </div>
                    <div className="message bot">
                        <div className="message-content">
                            👋 ¿Te gustaría realizar un pedido hoy? Responde con 'Sí' para continuar o 'No' para salir.
                            <span className="message-time">10:02</span>
                        </div>
                    </div>
                    <div className="message user">
                        <div className="message-content">
                            Si
                            <span className="message-time">10:03</span>
                        </div>
                    </div>
                    <div className="message bot">
                        <div className="message-content">
                            🍨 *¿Qué producto deseas ordenar hoy?*
                            <span className="message-time">10:04</span>
                        </div>
                    </div>
                    <div className="message bot">
                        <div className="message-content">
                            🍨 Elige tu helado favorito:
                            1️⃣ 1 Kilo de helado – $10.000
                            2️⃣ 1/2 Kilo de helado – $5.500
                            3️⃣ 1/4 Kilo de helado – $3.000
                            4️⃣ Caja de helados de palito 🍦 (8 unidades) – $8.000
                            5️⃣ Torta helada 🎂❄️ – $15.000

                            ¡Elige tu opción y disfruta de un momento dulce! 🥰
                            <span className="message-time">10:04</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-section">
                <h2>Video Demostrativo</h2>
                <p>Mira cómo funciona nuestro chatbot en tiempo real:</p>
                <div className="video-container">
                    <div className="video-placeholder">
                        <video src={videobot}  controls></video>
                    </div>
                </div>
                <p>
                    <small>
                        * Para insertar tu video, reemplaza el div "video-placeholder" con el código de inserción de tu video de YouTube o Vimeo.
                    </small>
                </p>
            </div>

            <div className="demo-notice">
                <h3>📱 Esta es una demostración visual</h3>
                <p>Esta es una representación estática de nuestro chatbot de WhatsApp. Para ver el chatbot en funcionamiento en tiempo real, contáctanos.</p>
                <button className="contact-button">Solicitar Demo en Vivo</button>
            </div>
        </div>
    );
};

export default ChatbotDemo;