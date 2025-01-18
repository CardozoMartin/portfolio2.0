import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../proyects.css"

const ProjectDetails = ({ project }) => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true
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
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      return (
        <>
          <style>{`
            :root {
                --primary: #8B5CF6;
                --primary-light: #A78BFA;
                --secondary: #F472B6;
                --accent: #22D3EE;
                --background: #F8FAFC;
                --surface: #FFFFFF;
                --text-primary: #1E293B;
                --text-secondary: #64748B;
                --gradient-soft: linear-gradient(135deg, #8B5CF6, #F472B6);
                --gradient-light: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(244, 114, 182, 0.1));
            }
    
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Outfit', sans-serif;
            }
    
            body {
                background: var(--background);
                color: var(--text-primary);
                line-height: 1.6;
            }
    
            .navbar {
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(10px);
                border-bottom: 1px solid rgba(139, 92, 246, 0.1);
                padding: 1rem 10%;
            }
    
            .nav-links a {
                color: var(--text-primary);
                font-weight: 500;
                text-decoration: none;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                transition: all 0.3s ease;
            }
    
            .nav-links a:hover {
                background: var(--gradient-light);
                color: var(--primary);
            }
    
            .project-details-hero {
                min-height: 60vh;
                background: var(--gradient-light);
                padding: 120px 10% 60px;
                position: relative;
            }
    
            .project-title {
                font-size: 3.5rem;
                font-weight: 700;
                color: var(--text-primary);
                margin-bottom: 2rem;
                line-height: 1.2;
            }
    
            .project-meta {
                display: flex;
                gap: 2rem;
                color: var(--text-secondary);
            }
    
            .meta-item {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                font-size: 1.1rem;
            }
    
            .project-gallery {
                margin-top: -100px;
                padding: 0 10% 5rem;
                position: relative;
                z-index: 2;
            }
    
            .gallery-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
            }
    
            .gallery-item {
                background: var(--surface);
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
                transition: all 0.3s ease;
            }
    
            .gallery-item:hover {
                transform: translateY(-8px);
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
            }
    
            .gallery-item img {
                width: 100%;
                height: 250px;
                object-fit: cover;
            }
    
            .project-content {
                background: var(--surface);
                padding: 5rem 10%;
            }
    
            .content-grid {
                display: grid;
                grid-template-columns: 2fr 1fr;
                gap: 4rem;
            }
    
            .project-description {
                background: var(--background);
                padding: 2.5rem;
                border-radius: 20px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
            }
    
            .project-description h2 {
                color: var(--primary);
                margin-bottom: 1.5rem;
                font-size: 1.8rem;
            }
    
            .project-description p {
                color: var(--text-secondary);
                font-size: 1.1rem;
                margin-bottom: 2rem;
            }
    
            .tech-stack {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
            }
    
            .tech-badge {
                background: var(--gradient-light);
                color: var(--primary);
                padding: 0.6rem 1.2rem;
                border-radius: 100px;
                font-weight: 500;
                font-size: 0.9rem;
                transition: all 0.3s ease;
            }
    
            .tech-badge:hover {
                background: var(--gradient-soft);
                color: white;
                transform: translateY(-3px);
            }
    
            .project-features {
                background: var(--background);
                padding: 2.5rem;
                border-radius: 20px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
            }
    
            .project-features h2 {
                color: var(--primary);
                margin-bottom: 1.5rem;
                font-size: 1.8rem;
            }
    
            .feature-item {
                background: var(--surface);
                padding: 1.2rem;
                border-radius: 12px;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 1rem;
                transition: all 0.3s ease;
                border: 1px solid rgba(139, 92, 246, 0.1);
            }
    
            .feature-item:hover {
                transform: translateX(8px);
                border-color: var(--primary-light);
            }
    
            .feature-item i {
                color: var(--primary);
                font-size: 1.2rem;
            }
    
            .demo-section {
                padding: 5rem 10%;
                background: var(--gradient-light);
                text-align: center;
            }
    
            .demo-section h2 {
                color: var(--primary);
                font-size: 2.5rem;
                margin-bottom: 2rem;
            }
    
            .demo-video {
                background: var(--surface);
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
                margin: 2rem auto;
                max-width: 1000px;
            }
    
            .project-links {
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin-top: 3rem;
            }
    
            .button {
                background: var(--surface);
                color: var(--primary);
                padding: 1rem 2rem;
                border-radius: 100px;
                text-decoration: none;
                font-weight: 500;
                transition: all 0.3s ease;
                border: 1px solid rgba(139, 92, 246, 0.2);
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
            }
    
            .button:hover {
                background: var(--gradient-soft);
                color: white;
                transform: translateY(-3px);
                box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
            }
    
            @media (max-width: 768px) {
                .content-grid {
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
    
                .project-title {
                    font-size: 2.5rem;
                }
    
                .project-meta {
                    flex-direction: column;
                    gap: 1rem;
                }
    
                .button {
                    padding: 0.8rem 1.5rem;
                }
            }
          `}</style>
    
          <nav className="navbar">
            <div className="nav-links">
              <a href="index.html">Inicio</a>
              <a href="#galeria">Galería</a>
              <a href="#detalles">Detalles</a>
              <a href="#demo">Demo</a>
            </div>
          </nav>
    
          <section className="project-details-hero">
            <h1 className="project-title" data-aos="fade-up">E-commerce Platform</h1>
            <div className="project-meta" data-aos="fade-up" data-aos-delay="100">
              <div className="meta-item">
                <i className="fas fa-calendar"></i>
                <span>2024</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-code-branch"></i>
                <span>Version 2.0</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-users"></i>
                <span>Team Project</span>
              </div>
            </div>
          </section>
    
          <section id="galeria" className="project-gallery">
            <div className="gallery-grid">
              <div className="gallery-item" data-aos="fade-up">
                <img src="/api/placeholder/400/300" alt="Dashboard View" />
              </div>
              <div className="gallery-item" data-aos="fade-up" data-aos-delay="100">
                <img src="/api/placeholder/400/300" alt="Mobile View" />
              </div>
              <div className="gallery-item" data-aos="fade-up" data-aos-delay="200">
                <img src="/api/placeholder/400/300" alt="Products Page" />
              </div>
            </div>
          </section>
    
          <section id="detalles" className="project-content">
            <div className="content-grid">
              <div className="project-description" data-aos="fade-right">
                <h2>Descripción del Proyecto</h2>
                <p>Una plataforma de comercio electrónico moderna y elegante que permite a los usuarios crear y gestionar sus propias tiendas online. El sistema incluye gestión de inventario intuitiva, procesamiento de pagos seguro, análisis detallado de ventas y herramientas de marketing efectivas.</p>
                
                <div className="tech-stack">
                  <span className="tech-badge">React.js</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">MongoDB</span>
                  <span className="tech-badge">AWS</span>
                  <span className="tech-badge">Docker</span>
                </div>
              </div>
    
              <div className="project-features" data-aos="fade-left">
                <h2>Características Principales</h2>
                <div className="feature-list">
                  <div className="feature-item">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Carrito de compras en tiempo real</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-credit-card"></i>
                    <span>Integración con múltiples pasarelas de pago</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-chart-line"></i>
                    <span>Dashboard analítico avanzado</span>
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
            

            <h2 >Demo del Proyecto</h2>
            
            <div className="demo-video" data-aos="fade-up">
              <img src="/api/placeholder/1000/562" alt="Demo Video" />
            </div>
            <div className="project-links">
              <a href="#" className="button">
                <i className="fas fa-play"></i>
                Ver Demo en Vivo
              </a>
              <a href="#" className="button">
                <i className="fab fa-github"></i>
                Repositorio GitHub
              </a>
            </div>
          </section>
        </>)
};

export default ProjectDetails;