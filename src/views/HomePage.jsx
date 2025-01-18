import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import petsqr from "../img/petqr.jpg"
import gym from "../img/gym.jpg"
import ventas from "../img/ventas.jpg"
import bot from "../img/botimg.jpg"
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import PortfolioBanner from '../components/PortfolioBanner';

const HomePage = () => {

    const projects = [
        {
            id: 1,
            title: 'PetsQR',
            description: 'App web desarrollada para mascotas, para ayudar a tener tus mascotas mas seguras',
            image: petsqr,
            technologies: ['React', "Expressjs", "MongoDB", "Boostrap", 'Firebase'],
            delay: 0,
            info: "https://github.com/CardozoMartin",
            demo: "https://petsqr.netlify.app/"

        },
        {
            id: 2,
            title: 'Gestion de Gym',
            description: 'App de gestion de gym para llevar el control de los clientes con la cantidad de dias',
            image: gym,
            technologies: ['Html', 'Css', 'JavaScript', 'Expressjs', "MongoDB"],
            delay: 100,
            info: "https://github.com/CardozoMartin",
            demo: "https://gestiongym.netlify.app/"
        },
        {
            id: 3,
            title: 'Gestion de Ventas',
            description: 'App para ventas,control de stock, historial de ventas, ticket',
            image: ventas,
            technologies: ['HTML', 'CSS', 'JavaScript', 'Expressjs',"MongoDB"],
            delay: 200,
            info: "https://github.com/CardozoMartin",
            demo: "https://gestiondeventas.netlify.app/"
        },
        {
            id: 3,
            title: 'Chat bot de Whatsapp',
            description: 'Chat bot de whatsapp para automatizar respuesta y brindar informacion ',
            image: bot,
            technologies: ['JavaScript'],
            delay: 200,
            info: "",
            demo: "https://github.com/CardozoMartin"
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <>

            <section>
                <article>
                   <PortfolioBanner></PortfolioBanner>
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
                                <div className=''>

                                    <Link className='link' to={project.info}>GitHub</Link>
                                    <Link className='link' to={project.demo}>Demo</Link>
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
                                <div className="contact-info" data-aos="fade-right">
                                    <h3>¡Hablemos!</h3>
                                    <ul className="contact-details">
                                        <li>
                                            <i className="fas fa-envelope"></i>
                                            <span>martincardozo1993xp@gmail.com</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-phone"></i>
                                            <span>3812032666</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>Argentina, Tucuman</span>
                                        </li>
                                    </ul>
                                    <div className="social-links">
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>

                                <form className="contact-form" data-aos="fade-left">
                                    <div className="form-group">
                                        <label htmlFor="name">Nombre</label>
                                        <input type="text" id="name" placeholder="Tu nombre completo" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="tu@email.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Mensaje</label>
                                        <textarea id="message" placeholder="¿En qué puedo ayudarte?" />
                                    </div>
                                    <button type="submit">Enviar mensaje</button>
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