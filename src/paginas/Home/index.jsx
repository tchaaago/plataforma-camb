import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.hero}>
        <article className={styles.heroTexto}>
          <h1>
            Graduação em Ciências Ambientais: Transforme sua paixão pelo meio
            ambiente em uma carreira de impacto.
          </h1>
          <span>
            Na UFC, você encontra estrutura de ponta, professores renomados e um
            mercado de trabalho cheio de oportunidades.
          </span>
        </article>
        <figure>
          <img
            className={styles.imgHero}
            src="./assets/grafismo-home.svg"
            alt="Imagem de Home"
          />
        </figure>
      </div>
      <div className={styles.homeNoticias}>
        <h1>Notícias</h1>
      </div>
      <section className={styles.homeApresentacao}>
        <article>
          <p>
            O curso de <strong>Ciências Ambientais da UFC</strong> é para quem
            quer fazer a diferença no mundo. Aqui, você vai aprender a lidar com
            desafios urgentes, como sustentabilidade, biodiversidade, mudanças
            climáticas e bioeconomia, enquanto desenvolve habilidades técnicas e
            éticas para se tornar um profissional completo.
          </p>
        </article>
        <img
          className={styles.grafFolha}
          src="./assets/grafismo-folha.svg"
          alt="Imagem de paragrafo"
        ></img>
        <article>
          <h1>O que você vai fazer no curso?</h1>
          <span>carrossel</span>
        </article>
        <article>
          <h1>E tem mais!</h1>
          <span>Além das disciplinas, você vai:</span>
          <p>Fazer estágios supervisionados para colocar a mão na massa.</p>
          <img
            className={styles.grafFolha}
            src="./assets/imgAp1.png"
            alt="Imagem de paragrafo"
          ></img>
          <p>
            Participar de atividades complementares, como workshops e eventos
            científicos.
          </p>
          <img
            className={styles.grafFolha}
            src="./assets/imgAp2.png"
            alt="Imagem de paragrafo"
          ></img>
          <p>
            Desenvolver um Trabalho de Conclusão de Curso (TCC) para mostrar
            todo o seu potencial.
          </p>
          <img
            className={styles.grafFolha}
            src="./assets/imgAp3.png"
            alt="Imagem de paragrafo"
          ></img>
        </article>
        <article>
          <h1>Por que escolher Ciências Ambientais?</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <img
            className={styles.grafFolha}
            src="./assets/grafismo-folha.svg"
            alt="Imagem de paragrafo"
          ></img>
        </article>
      </section>
    </main>
  );
}

export default Home;
