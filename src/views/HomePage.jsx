import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import petsqr from "../img/petqr.jpg"
import gym from "../img/gym.jpg"
import ventas from "../img/ventas.jpg"
import bot from "../img/botimg.jpg"
import bahia from "../img/bahia.png"
import { Link } from 'react-router-dom';
import PortfolioBanner from '../components/PortfolioBanner';

const HomePage = () => {
    const projects = [
        {
            id: 1,
            title: 'PetsQR',
            description: 'Aplicación web desarrollada para facilitar la seguridad y protección de mascotas mediante tecnología QR. Permite registrar información vital de tu mascota y generar códigos QR para su collar.',
            image: petsqr,
            technologies: ['React', "Express.js", "MongoDB", "Bootstrap", 'Firebase'],
            delay: 100,
            info: "https://github.com/CardozoMartin",
            demo: "https://petsqr.netlify.app/"
        },
        {
            id: 2,
            title: 'Gestión de Gimnasio',
            description: 'Sistema integral para administración de gimnasios que permite el control de clientes, seguimiento de asistencias, gestión de membresías y análisis de frecuencia.',
            image: gym,
            technologies: ['HTML', 'CSS', 'JavaScript', 'Express.js', "MongoDB"],
            delay: 200,
            info: "https://github.com/CardozoMartin",
            demo: "https://gestiongym.netlify.app/"
        },
        {
            id: 3,
            title: 'Gestión de Ventas',
            description: 'Plataforma completa para la gestión comercial que incluye control de inventario, registro de ventas, generación de tickets e informes detallados de rendimiento.',
            image: ventas,
            technologies: ['HTML', 'CSS', 'JavaScript', 'Express.js', "MongoDB"],
            delay: 300,
            info: "https://github.com/CardozoMartin",
            demo: "https://gestiondeventas.netlify.app/"
        },
        {
            id: 4,
            title: 'Chat Bot de WhatsApp',
            description: 'Solución automatizada para WhatsApp Business que permite brindar información, responder consultas y gestionar interacciones con clientes de forma inteligente y personalizada.',
            image: bot,
            technologies: ['JavaScript', 'Node.js', 'WhatsApp API'],
            delay: 400,
            info: "https://github.com/CardozoMartin",
            demo: "/chatbot"
        },
        {
            id: 5,
            title: 'Bahia App Joyeria',
            description: 'App web para la venta de joyeria de acero quirurgico, con carrito de compras y pagos con mercadoPago, integracion de mensajes por email',
            image: bahia,
            technologies: ['TypeScript', 'Node.js', 'React', 'MongoDB', 'Express', 'MercadoPago', 'TailwindCSS'],
            delay: 400,
            info: "https://github.com/CardozoMartin",
            demo: "https://bahiacc.netlify.app/"
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <>
            <section>
                <article>
                    <PortfolioBanner />
                </article>
                
                <article className="projects">
                    <h2 data-aos="fade-up">Mis Proyectos</h2>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div
                                className="project-card"
                                key={project.id}
                                data-aos="fade-up"
                                data-aos-delay={project.delay}
                            >
                                <img src={project.image} alt={project.title} />
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="technologies">
                                        {project.technologies.map((tech, index) => (
                                            <span className="tech-tag" key={index}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <Link className='link' to={project.info}>
                                        <i className="fab fa-github mr-2"></i> GitHub
                                    </Link>
                                    <Link className='link' to={project.demo}>
                                        <i className="fas fa-external-link-alt mr-2"></i> Demo
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>

                <article>
                    <section className="contact" id="contact">
                        <div className="contact-container">
                            <h2 data-aos="fade-up">Contacto</h2>
                            <div className="contact-content">
                                <div className="contact-info" data-aos="fade-right" data-aos-delay="100">
                                    <h3>¡Hablemos sobre tu proyecto!</h3>
                                    <ul className="contact-details">
                                        <li>
                                            <i className="fas fa-envelope"></i>
                                            <span>martincardozo1993xp@gmail.com</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-phone"></i>
                                            <span>+54 381 203 2666</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>San Miguel de Tucumán, Argentina</span>
                                        </li>
                                    </ul>
                                    <div className="social-links">
                                        <a href="https://github.com/CardozoMartin" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/cardozomartindaniel/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                       
                                        <a href="https://instagram.com/cardozo9698" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>

                                <form className="contact-form" data-aos="fade-left" data-aos-delay="200">
                                    <div className="form-group">
                                        <label htmlFor="name">Nombre</label>
                                        <input type="text" id="name" placeholder="Tu nombre completo" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="tu@email.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Mensaje</label>
                                        <textarea id="message" placeholder="Cuéntame sobre tu proyecto o consulta" required />
                                    </div>
                                    <button type="submit">
                                        <i className="fas fa-paper-plane mr-2"></i> Enviar mensaje
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </article>
            </section>
        </>
    );
};

export default HomePage;