import React, { useEffect } from 'react'
import AOS from 'aos';
import portada from "../img/portadaPets.png"
const PetsQr = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <section>
        <div        >
            <nav className="navbar">
                <div className="nav-links">
                    <a href="#">Inicio</a>
                    <a href="#galeria">Galería</a>
                    <a href="#detalles">Detalles</a>
                    <a href="#demo">Demo</a>
                </div>
            </nav>

            <section className="project-details-hero">
                <h1 className="project-title" data-aos="fade-up">PetsQr </h1>
                <div className="project-description" data-aos="fade-right">
                        <h2>Descripción del Proyecto</h2>
                        <p>Una plataforma de comercio electrónico moderna y elegante que permite a los usuarios crear y gestionar sus propias tiendas online. El sistema incluye gestión de inventario intuitiva, procesamiento de pagos seguro, análisis detallado de ventas y herramientas de marketing efectivas.</p>

                        <div className="tech-stack">
                            <span className="tech-badge">React.js</span>
                            <span className="tech-badge">Node.js</span>
                            <span className="tech-badge">MongoDB</span>
                            <span className="tech-badge">JavaScript</span>
                            <span className="tech-badge">FireBase</span>
                            <span className="tech-badge">Boostrap</span>

                        </div>
                    </div>
            </section>

            <section id="galeria" className="project-gallery">
                <div className="gallery-grid">
                    <div className="gallery-item" data-aos="fade-up">
                        <img src={portada} alt="Dashboard View" />
                    </div>
                    <div className="gallery-item" data-aos="fade-up" data-aos-delay="100">
                        <img src="/api/placeholder/400/300" alt="Mobile View" />
                    </div>
                   
                </div>
            </section>

            <section id="detalles" className="project-content">
                <div className="content-grid">
                  

                    <div className="project-features" data-aos="fade-left">
                        <h2>Características Principales</h2>
                        <div className="feature-list">
                            <div className="feature-item">
                                <i className="fas fa-shopping-cart"></i>
                                <span>Generador de QR</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-credit-card"></i>
                                <span>Registro y Login</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-chart-line"></i>
                                <span>Desarrollo web</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-mobile-alt"></i>
                                <span>Diseño responsive y PWA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="demo" className="demo-section">
                <h2 data-aos="fade-up">Demo del Proyecto</h2>
                
                <div className="project-links">
                    <a href="https://petsqr.netlify.app/" className="button">
                        <i className="fas fa-play"></i>
                        Ver Demo en Vivo
                    </a>
                    <a href="https://github.com/CardozoMartin/reactBoostrapPetsQr" className="button">
                        <i className="fab fa-github"></i>
                        Repositorio GitHub
                    </a>
                </div>
            </section>
        </div>
    </section>
  )
}

export default PetsQr