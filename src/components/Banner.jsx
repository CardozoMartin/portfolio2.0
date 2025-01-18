
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // duración de las animaciones en ms
      easing: "ease", // función de tiempo para la animación
      once: true, // si se debe ejecutar la animación solo una vez
    });
  }, []);
  return (
    <>
      <section className=" content-around relative bg-[url()]  bg-center bg-no-repeat">
        <div className="absolute inset-0  dm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1
              className="text-3xl font-extrabold sm:text-4xl text-yellow-100"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <span className="text-red-700">
                H<span className="">o</span>la,
              </span>
              Soy Mart
              <span className="inline-block">
                <span className=" text-yellow-600">
                  i
                </span>
              </span>
              n Cardozo
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-yellow-100">
              <span
                className="fs-2 font-extrabold text-yellow-600 animate-bounce"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {"{'"}
              </span>{" "}
              <span
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                {" "}
                Soy un{" "}
                <span className=" font-extrabold text-red-700">
                  desarrollador front-end
                </span>{" "}
                con experiencia en la creación de interfaces utilizando{" "}
                <span className=" font-extrabold text-red-700">React</span> para
                aplicaciones web y{" "}
                <span className=" font-extrabold text-red-700">
                  React Native
                </span>{" "}
                para aplicaciones móviles. Mi enfoque se centra en desarrollar
                soluciones eficientes y atractivas que mejoren la experiencia
                del usuario.
              </span>{" "}
              <span
                className="fs-2 font-extrabold text-yellow-600"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {"'}"}
              </span>
            </p>
            <strong
              className="block font-extrabold text-red-700"
              data-aos="zoom-out"
              data-aos-delay="1000"
            >
              {" "}
              "SI LO PUEDES IMAGINAR, LO PUEDES PROGRAMAR"{" "}
            </strong>
            <div className="text-center mt-3 ">
              <div>
                <Link
                  to="https://www.linkedin.com/in/martin-cardozo-14b597238/"
                  blank
                >
                  <button
                    color="blue"
                    className="m-1"
                    data-aos="fade-down-right"
                  >
                    <i className="bi bi-linkedin fs-4"></i> LinKedin
                  </button>
                </Link>
                <Link to="https://github.com/CardozoMartin">
                  <button color="red" data-aos="fade-down-left">
                    <i className="bi bi-github fs-4"></i> Github
                  </button>
                </Link>
              </div>
              <div
                className="mt-2"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <button variant="outlined">
                  <p className="text-white  animate-bounce">
                    {" "}
                    <i className="bi bi-send-fill fs-4 animate-bounce"></i>{" "}
                    Contactame!!
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3" data-aos="fade-up" data-aos-duration="3000">
            <img src={``} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};


export default Banner