import CardsDepoimentos from "../../componentes/Depoimentos";
import DocentesCAMB from "../../componentes/Docentes/CardsDocentes";
import styles from "./QuemSomos.module.css";
import labomar from "./imagens/labomar.jpeg";

function QuemSomos() {
  return (
    <>
      <figure className={styles.imgHead}>
        <img src="./assets/imgAp7.png" alt="banner" />
      </figure>
      <section className={styles.sobre}>
        <h2>Quem somos</h2>
        <p>
          Somos uma comunidade acadêmica dedicada à formação de profissionais
          comprometidos com a sustentabilidade, a ciência e a transformação
          social. A Plataforma CAMB nasce do curso de Ciências Ambientais da UFC
          com o propósito de aproximar o conhecimento científico da sociedade,
          valorizando a pesquisa, o ensino e a extensão. Aqui, mostramos o que
          fazemos, quem somos e como atuamos para construir um futuro mais justo
          e ambientalmente equilibrado.
          <p>
            Nosso curso reúne estudantes, professores, pesquisadores e
            profissionais que acreditam na força da ciência como ferramenta de
            transformação social. Atuamos de forma interdisciplinar, integrando
            conhecimentos das ciências naturais, sociais e tecnológicas para
            formar cidadãos críticos e preparados para enfrentar os desafios
            socioambientais contemporâneos. A Plataforma CAMB é um reflexo desse
            compromisso coletivo.
          </p>
        </p>
        <br />
        <h2>O que fazemos</h2>
        <p>
          Promovemos o acesso à ciência e ao conhecimento produzido dentro da
          universidade. Por meio desta plataforma, divulgamos projetos de
          extensão, pesquisas acadêmicas, experiências formativas, ações junto à
          comunidade e muito mais. Nosso objetivo é democratizar a informação,
          inspirar novos estudantes e conectar pessoas às causas ambientais que
          movem o curso e seus participantes.
        </p>
        <p>
          Além de divulgar conteúdos científicos, também promovemos a
          alfabetização científica, oferecendo informações em linguagem
          acessível para públicos diversos. Acreditamos que compartilhar saberes
          é fundamental para fortalecer a consciência ambiental e fomentar a
          participação cidadã em decisões que impactam o meio ambiente e a
          qualidade de vida. Aqui, a ciência encontra caminhos para alcançar
          mais pessoas.
        </p>
        <br />
        <figure className={styles.img}>
          <img
            className="imgFolha"
            src="./assets/grafismo-folha.svg"
            alt="Imagem de paragrafo"
          ></img>
        </figure>
      </section>
      <div className={styles.docentes}>
        <h3>Docentes</h3> <br />
      </div>
      <DocentesCAMB /> <br />
      <section className={styles.estrutura}>
        <div className={styles.laboratorios}>
          <div>
            <h4>Laboratórios e Infraestrutura</h4>
            <br />
            <p>
              O curso de Ciências Ambientais da UFC conta com uma infraestrutura
              moderna e laboratórios especializados que oferecem suporte
              essencial ao ensino, à pesquisa e à extensão. Esses espaços
              permitem que os estudantes desenvolvam habilidades práticas desde
              os primeiros semestres, atuando em atividades que envolvem
              análises físico-químicas, monitoramento ambiental, manejo de
              recursos naturais e estudos de ecossistemas. Além dos
              laboratórios, a estrutura do curso inclui salas multimídia,
              biblioteca setorial, auditório, áreas externas para práticas de
              campo e acesso a equipamentos tecnológicos atualizados. Esses
              recursos são fundamentais para a formação interdisciplinar e
              aplicada dos alunos, contribuindo diretamente para a produção
              científica e a realização de projetos de impacto social. A
              infraestrutura é pensada para integrar teoria e prática,
              garantindo uma formação sólida, crítica e voltada para a realidade
              ambiental brasileira.
            </p>
          </div>
          <img src={labomar} alt="Labomar" className={styles.labomar} />
        </div>
        <br />
        <div className={styles.img}>
          <img
            className="imgFolha"
            src="./assets/grafismo-folha.svg"
            alt="Imagem de paragrafo"
          ></img>
          <br />
          <p>
            Os laboratórios também funcionam como espaços de integração entre
            ensino, pesquisa e extensão, abrigando projetos desenvolvidos por
            professores e estudantes em parceria com comunidades locais e
            instituições externas. Essa vivência prática proporciona aos alunos
            uma formação diferenciada, incentivando o pensamento crítico, a
            autonomia científica e a aplicação do conhecimento em contextos
            reais. A infraestrutura do curso é um dos pilares que fortalecem sua
            qualidade e relevância social.
          </p>
        </div>
      </section>
      <section className={styles.depoimentos}>
        <h2>Depoimentos</h2><br />
      </section>
      <CardsDepoimentos /><br />
    </>
  );
}

export default QuemSomos;
