import SlidesMercado from "../../componentes/Mercado de Trabalho";
import styles from "./Mercado.module.css"

function MercadoTrabalho() {
  return (
    <section>
      <figure className={styles.imgHead}>
        <img src="./assets/imgAp9.png" alt="banner" />
      </figure>
      <div className={styles.apresentacao}>
        <h1>Onde os profissionais de Ciências Ambientais atuam?</h1>
        <p>O curso de Ciências Ambientais forma profissionais capacitados para atuar em diversas frentes relacionadas à proteção, recuperação e gestão dos recursos naturais. Conheça algumas das principais áreas de atuação e imagine seu futuro profissional!</p>
        <img src="./assets/pattern2.svg" alt="pattern" />
      </div>
      <div className={styles.slides}>
        <SlidesMercado/>
      </div>
    </section>
  );
}

export default MercadoTrabalho;
