import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../img/banner.svg";
import cvFile from "../assets/CardozoMartin(cbp).pdf";

const PortfolioBanner = () => {
  const [downloadError, setDownloadError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true);
      // Si el PDF está en la carpeta public, usa esta ruta
      const cvUrl = cvFile || '/CardozoMartin(cbp).pdf';

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
    } finally {
      setIsDownloading(false);
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
            Desarrollador Full Stack apasionado por crear soluciones escalables y eficientes.
            Especializado en el desarrollo de arquitecturas backend con Express.js, integrando bases de datos MySQL y MongoDB para garantizar rendimiento y seguridad.
            Experiencia en el diseño e implementación de APIs RESTful optimizadas para aplicaciones web modernas.
            Además, desarrollo interfaces intuitivas y responsivas con React.js, asegurando una experiencia de usuario fluida en múltiples dispositivos.
          </p>

          <div className="buttons-container">
            <button
              className={`btn primary ${isDownloading ? 'downloading' : ''}`}
              data-aos="fade-up"
              data-aos-delay="200"
              onClick={handleDownloadCV}
              disabled={isDownloading}
            >
              <svg viewBox="0 0 24 24" className="icon">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v6l5 3-1 2-6-4V7h2z" />
              </svg>
              {isDownloading ? 'Descargando...' : 'Descargar CV'}
            </button>
            <a
              href="https://github.com/CardozoMartin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <svg viewBox="0 0 24 24" className="icon">
                <path fill="currentColor" d="M12 2A10 10 0 002 12a10 10 0 006.8 9.5c.5 0 .7-.2.7-.5v-1.7C6.7 20 6.1 18 6.1 18c-.4-1.2-1-1.5-1-1.5-1-.6 0-.6 0-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.9 0-.7.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7 0-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0022 12 10 10 0 0012 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/martin-cardozo/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn linkedin"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <svg viewBox="0 0 24 24" className="icon">
                <path fill="currentColor" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {downloadError && (
            <div className="error-message" data-aos="fade-up">
              No se pudo descargar el CV. Por favor, inténtalo nuevamente.
            </div>
          )}
        </div>

        <div className="image-section" data-aos="fade-left">
          <div className="image-container">
            <img src={logo} alt="Developer" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Desplázate para ver más</p>
      </div>
    </div>
  );
};

// Estilos CSS mejorados
const styles = `
  .banner {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    display: flex;
    align-items: center;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }

  .banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.1) 0%, transparent 30%),
      radial-gradient(circle at 80% 70%, rgba(103, 178, 111, 0.1) 0%, transparent 30%);
    z-index: 1;
  }

  .banner-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    width: 100%;
    position: relative;
    z-index: 2;
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
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
    letter-spacing: -0.5px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  .info-section h2 {
    font-size: 2rem;
    color: #e0e0e0;
    margin: 10px 0;
    font-weight: 500;
  }

  .info-section h3 {
    font-size: 1.5rem;
    color: #4a90e2;
    margin: 10px 0 20px 0;
    position: relative;
    display: inline-block;
  }

  .info-section h3::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4a90e2, transparent);
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #bbbbbb;
    margin-bottom: 30px;
    max-width: 600px;
  }

  .image-section {
    flex: 1;
    max-width: 500px;
    perspective: 1000px;
  }

  .image-container {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
  }

  .image-container:hover {
    transform: translateY(-10px) rotateY(5deg);
  }

  .image-section img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    filter: brightness(1.05);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(103, 178, 111, 0.1));
    border-radius: 8px;
    z-index: 2;
    pointer-events: none;
  }

  .buttons-container {
    display: flex;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
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
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    text-decoration: none;
    outline: none;
    position: relative;
    overflow: hidden;
  }

  .btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }

  .btn:hover::after {
    transform: translateY(0);
  }

  .btn .icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .primary {
    background: linear-gradient(45deg, #4a90e2, #5a9ee6);
    color: white;
    box-shadow: 0 4px 15px rgba(74, 144, 226, 0.4);
  }

  .primary:hover {
    background: linear-gradient(45deg, #357abd, #468dd3);
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(74, 144, 226, 0.5);
  }

  .primary:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(74, 144, 226, 0.4);
  }

  .primary.downloading {
    opacity: 0.8;
    cursor: wait;
  }

  .secondary {
    background: #2c3e50;
    color: white;
    box-shadow: 0 4px 15px rgba(44, 62, 80, 0.3);
  }

  .secondary:hover {
    background: #34495e;
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(44, 62, 80, 0.4);
  }

  .linkedin {
    background: #0077B5;
    color: white;
    box-shadow: 0 4px 15px rgba(0, 119, 181, 0.3);
  }

  .linkedin:hover {
    background: #0369a0;
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(0, 119, 181, 0.4);
  }

  .error-message {
    margin-top: 15px;
    color: #ff6b6b;
    background-color: rgba(255, 107, 107, 0.1);
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 0.9rem;
    border-left: 3px solid #ff6b6b;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    z-index: 2;
    animation: fade-in-up 1.5s ease infinite alternate;
  }

  .mouse {
    width: 26px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    position: relative;
    margin-bottom: 10px;
  }

  .wheel {
    width: 4px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    animation: wheel-scroll 1.5s ease infinite;
  }

  @keyframes wheel-scroll {
    0% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(15px);
      opacity: 0;
    }
  }

  @keyframes fade-in-up {
    0% {
      opacity: 0.5;
      transform: translate(-50%, 10px);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  /* Responsive Design */
  @media (max-width: 992px) {
    .info-section h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    .banner {
      padding: 40px 20px;
    }
    
    .banner-container {
      flex-direction: column-reverse;
      text-align: center;
      gap: 40px;
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
    
    .info-section h3::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .description {
      margin-left: auto;
      margin-right: auto;
    }

    .buttons-container {
      justify-content: center;
    }

    .image-section {
      max-width: 80%;
    }
    
    .scroll-indicator {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .info-section h1 {
      font-size: 2rem;
    }
    
    .buttons-container {
      flex-direction: column;
      width: 100%;
      gap: 12px;
    }
    
    .btn {
      width: 100%;
      justify-content: center;
    }
    
    .image-section {
      max-width: 100%;
    }
  }
`;

// Inyectar los estilos
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default PortfolioBanner;