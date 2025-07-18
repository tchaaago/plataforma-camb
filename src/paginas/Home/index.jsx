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
          <div className={styles.heroImageWrapper}>
            <img
              className={styles.imgHero}
              src="./assets/grafismo-home.svg"
              alt="Imagem de Home"
            />
          </div>
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
            Porque é um curso que forma profissionais preparados para lidar com
            os principais desafios ambientais da atualidade. Em Ciências
            Ambientais, você desenvolve uma visão ampla e crítica sobre a
            relação entre sociedade e natureza, aprendendo a pensar soluções
            sustentáveis, propor políticas públicas e atuar em projetos que
            transformam realidades. É uma formação para quem deseja fazer
            diferença no mundo.
          </p>
          <p>
            Ao longo do curso, você será incentivado a participar de pesquisas
            científicas, ações de extensão e experiências práticas que
            fortalecem seu olhar técnico, ético e humano. A
            interdisciplinaridade é um dos pilares do curso, o que permite a
            atuação em diversas áreas do mercado de trabalho e em diferentes
            frentes sociais. Escolher Ciências Ambientais é escolher um caminho
            de compromisso com o conhecimento, a justiça social e o futuro do
            planeta.
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
