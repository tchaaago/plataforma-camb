import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <section className={ styles.home }>
        <div className={ styles.hero }>
          <p>Graduação em Ciências<br/> Ambientais: Transforme<br/> sua paixão pelo meio<br/> ambiente em uma<br/> carreira de impacto.</p><br />
          <span>Na UFC, você encontra estrutura de ponta, professores renomados e um<br/> mercado de trabalho cheio de oportunidades.</span>
        </div>
        <figure>
          <img className="img-home" src="./assets/grafismo-home.svg" alt="Imagem de Home"/>
        </figure>
      </section>
      <section className={ styles.homeNoticias }>
        <h1>Notícias</h1>
        <br />
      </section>
      <section className={ styles.homeParagrafo }>
        <p>O curso de <strong>Ciências Ambientais da UFC</strong> é para quem quer fazer a diferença no mundo. Aqui, você vai aprender a lidar com desafios urgentes, como sustentabilidade, biodiversidade, mudanças climáticas e bioeconomia, enquanto desenvolve habilidades técnicas e éticas para se tornar um profissional completo.</p> <br/>
        <img className="img-folha" src="./assets/grafismo-folha.svg" alt="Imagem de paragrafo"></img> <br/>
      </section>
    </>
  );
}

export default Home;