import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../img/banner.svg"
import cvFile from "../assets/CardozoMartin(cbp).pdf";

const PortfolioBanner = () => {
    const [downloadError, setDownloadError] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  const handleDownloadCV = async () => {
    try {
      // Si el PDF está en la carpeta public, usa esta ruta
      const cvUrl = '/CardozoMartin(cbp).pdf'; // o process.env.PUBLIC_URL + '/CardozoMartin(cbp).pdf'
      
      const response = await fetch(cvUrl);
      
      if (!response.ok) {
        throw new Error('No se pudo encontrar el archivo');
      }

      const blob = await response.blob();
      const fileUrl = window.URL.createObjectURL(blob);
      
      // Abrimos el PDF en una nueva pestaña primero
      window.open(fileUrl, '_blank');
      
      // Y también ofrecemos la descarga
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', 'CardozoMartin(cbp).pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(fileUrl);
      setDownloadError(false);
    } catch (error) {
      console.error('Error al descargar el CV:', error);
      setDownloadError(true);
      alert('Hubo un error al descargar el CV. Por favor, inténtalo de nuevo.');
    }
  };
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="info-section" data-aos="fade-right">
          <h1>Cardozo Martin Daniel</h1>
          <h2>Desarrollador Full Stack</h2>
          <h3>Especializado en Backend</h3>
          
          <p className="description">
            Desarrollador apasionado por crear soluciones robustas y escalables.
            Especializado en arquitecturas backend, expresjs y bases de datos Mysql y MongoDB.
            Con experiencia en el desarrollo de APIs RESTful.
            Tambien desarrollo interfaz de usuarios utilizando Reactjs
          </p>

          <div className="buttons-container">
          <button 
              className="btn primary" 
              data-aos="fade-up" 
              data-aos-delay="200"
              onClick={handleDownloadCV}
            >
              <svg viewBox="0 0 24 24" className="icon">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v6l5 3-1 2-6-4V7h2z"/>
              </svg>
              Descargar CV
            </button>
            <a href="https://github.com/CardozoMartin" target="_blank" rel="noopener noreferrer" 
               className="btn secondary" data-aos="fade-up" data-aos-delay="300">
              <svg viewBox="0 0 24 24" className="icon">
                <path fill="currentColor" d="M12 2A10 10 0 002 12a10 10 0 006.8 9.5c.5 0 .7-.2.7-.5v-1.7C6.7 20 6.1 18 6.1 18c-.4-1.2-1-1.5-1-1.5-1-.6 0-.6 0-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.9 0-.7.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7 0-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0022 12 10 10 0 0012 2z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="image-section" data-aos="fade-left">
          <img src={logo} alt="Developer" />
        </div>
      </div>
    </div>
  );
};

// Estilos CSS
const styles = `
  .banner {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .banner-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    width: 100%;
  }

  .info-section {
    flex: 1;
    color: white;
  }

  .info-section h1 {
    font-size: 3.5rem;
    margin: 0;
    background: linear-gradient(45deg, #4a90e2, #67b26f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
  }

  .info-section h2 {
    font-size: 2rem;
    color: #e0e0e0;
    margin: 10px 0;
  }

  .info-section h3 {
    font-size: 1.5rem;
    color: #4a90e2;
    margin: 10px 0 20px 0;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #a0a0a0;
    margin-bottom: 30px;
  }

  .image-section {
    flex: 1;
    max-width: 500px;
  }

  .image-section img {
    width: 100%;
    height: auto;
   
    transition: transform 0.3s ease;
  }

  .image-section img:hover {
    transform: translateY(-10px);
  }

  .buttons-container {
    display: flex;
    gap: 20px;
    margin-top: 30px;
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .btn .icon {
    width: 20px;
    height: 20px;
  }

  .primary {
    background: #4a90e2;
    color: white;
  }

  .primary:hover {
    background: #357abd;
    transform: translateY(-2px);
  }

  .secondary {
    background: #2c3e50;
    color: white;
  }

  .secondary:hover {
    background: #34495e;
    transform: translateY(-2px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .banner-container {
      flex-direction: column-reverse;
      text-align: center;
    }

    .info-section h1 {
      font-size: 2.5rem;
    }

    .info-section h2 {
      font-size: 1.5rem;
    }

    .info-section h3 {
      font-size: 1.2rem;
    }

    .buttons-container {
      justify-content: center;
    }

    .image-section {
      max-width: 100%;
    }
  }
`;

// Inyectar los estilos
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default PortfolioBanner;