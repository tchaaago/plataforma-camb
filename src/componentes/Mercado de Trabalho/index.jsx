import React, { useState } from 'react';
import styles from './SlideMercado.module.css';
import slides from './dadosMercado.json';


function SlidesMercado() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.carrosselEsq}>
          <h1 className={styles.carrosselTitulo}>{currentSlideData.titulo}</h1>
          <p className={styles.carrosselDesc}>{currentSlideData.descricao}</p>
          <h3 className={styles.carrosselSubt}>{currentSlideData.subtitulo}</h3>
          <p className={styles.carrosselTextoComp}>{currentSlideData.texto}</p>
        </div>
        <div className={styles.carrosselDir}>
          <div className={styles.imgPlaceholder}>
            <img src={currentSlideData.imagem} alt={currentSlideData.titulo} />
          </div>
        </div>
      </div>

      <button className={`${styles.botao} ${styles.botaoEsq}`} onClick={goToPrevSlide}>
        <img src="/botao.svg" alt="botão anterior" /> 
      </button>
      <button className={`${styles.botao} ${styles.botaoDir}`} onClick={goToNextSlide}>
        <img src="/botao.svg" alt="próximo botão" />
      </button>

      <div className={styles.carrosselDots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default SlidesMercado;