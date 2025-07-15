import React, { useState } from "react";
import styles from "./Aprendizado.module.css";
import { dadosCurriculares } from "../../services/dados-currisculares";
import { ModalSemestre } from "../../componentes/ModalSemestre";

function Aprendizado() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const semestres = Object.keys(dadosCurriculares);

  const handleOpenModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const handleNavigate = (direction) => {
    const totalItems = semestres.length;
    const newIndex = (selectedIndex + direction + totalItems) % totalItems;
    setSelectedIndex(newIndex);
  };
  const selectedSemesterName = semestres[selectedIndex];
  const selectedSemesterData = dadosCurriculares[selectedSemesterName];

  return (
    <>
      <div className={styles.introducao}>
        <article className={styles.titulo}>
          <h1>Introdução ao Aprendizado</h1>
        </article>

        <div className={styles.card}>
          <article className={styles.cardTexto}>
            <h2>
              Conheça como se dá o processo de formação em Ciências Ambientais:
              da teoria à prática, da sala de aula ao campo.
            </h2>
            <p>
              A formação em Ciências Ambientais é pensada para integrar
              diferentes áreas do conhecimento e aproximar os estudantes da
              realidade social e ambiental do país. Desde os primeiros
              semestres, os alunos têm contato com conteúdos teóricos e
              metodológicos que ajudam a compreender os sistemas naturais, os
              impactos humanos e as alternativas para uma convivência mais
              sustentável. Além das aulas em sala, o curso valoriza experiências
              práticas, como saídas de campo, atividades em laboratório,
              participação em projetos de pesquisa e ações de extensão junto à
              comunidade. Essa combinação fortalece o aprendizado, estimula o
              pensamento crítico e prepara os futuros profissionais para atuar
              com responsabilidade, criatividade e compromisso com a
              transformação socioambiental.
            </p>
          </article>
          <img
            className={styles.imgAp4}
            src="/assets/imgAp4.png"
            alt="banner"
          ></img>
        </div>
      </div>
      <div className={styles.matriz}>
        <section className={styles.apresentacao}>
          <h1>Matriz Curricular do Curso</h1>
          <p>
            A matriz curricular do curso de Ciências Ambientais foi pensada para
            oferecer uma formação ampla, crítica e prática. A seguir, você pode
            explorar as disciplinas distribuídas ao longo dos semestres,
            entender a carga horária, os eixos temáticos e como elas se conectam
            com a prática profissional.
          </p>
        </section>

        <main className={styles.corpoMatriz}>
          <section>
            <img
              className={styles.banner}
              src="/assets/bannerMatriz.png"
              alt="banner"
            ></img>
            <span>
              Quer ver a matriz completa e oficial?
              <br /> Clique para conferir
            </span>
            <div className={styles.linkMatriz}>
              <a href="https://si3.ufc.br/sigaa/public/curso/curriculo.jsf">
                2010.1
              </a>
              <a href="https://si3.ufc.br/sigaa/public/curso/curriculo.jsf">
                2014.1
              </a>
              <a href="https://si3.ufc.br/sigaa/public/curso/curriculo.jsf">
                2025.1
              </a>
            </div>
          </section>

          <section className={styles.consultaSemestre}>
            <div className={styles.botoes}>
              {semestres.map((semestreNome, index) => (
                <button
                  key={semestreNome}
                  className={styles.botaoSemestre}
                  onClick={() => handleOpenModal(index)}
                >
                  {semestreNome}
                </button>
              ))}
            </div>
          </section>
        </main>
      </div>

      {isModalOpen && (
        <ModalSemestre
          nomeSemestre={selectedSemesterName}
          semestreInfo={selectedSemesterData}
          aoFechar={handleCloseModal}
          onNavegar={handleNavigate}
        />
      )}

      <div>
        <h1>Metodologias de Ensino</h1>
        <span>
          O curso de Ciências Ambientais adota uma abordagem pedagógica
          inovadora e interdisciplinar, que combina teoria e prática. As
          metodologias de ensino priorizam o aprendizado ativo, a experimentação
          e o envolvimento direto dos estudantes com problemas reais da
          sociedade e do meio ambiente.
        </span>
      </div>
    </>
  );
}

export default Aprendizado;
