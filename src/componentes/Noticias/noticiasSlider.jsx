import "./style.css";
import noticias from "./dadosNoticias.json";
import { useState, useEffect } from "react";

export const SlidesNoticias = () => {
  const [indexAtual, setIndexAtual] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setIndexAtual((prevIndex) =>
          prevIndex === noticias.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 200);
    }, 8000);

    return () => clearInterval(intervalo);
  }, []);

  const irPara = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndexAtual(index);
      setIsTransitioning(false);
    }, 200);
  };

  const noticia = noticias[indexAtual];

  return (
    <div className="slider">
      <div className="slider-imagem-wrapper">
        <img
          className={`slider-imagem ${isTransitioning ? "fade" : ""}`}
          src={noticia.imagem}
          alt={noticia.titulo}
        />
        <div className="slider-overlay">
          <div className="slider-texto">
            <h2>{noticia.titulo}</h2>
            <p>{noticia.texto}</p>
          </div>
          <div className="slider-dots">
            {noticias.map((_, i) => (
              <span
                key={i}
                className={`dot ${indexAtual === i ? "ativo" : ""}`}
                onClick={() => irPara(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
