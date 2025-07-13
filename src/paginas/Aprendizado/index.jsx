import React, { useState } from 'react';
import styles from "./Aprendizado.module.css";
import { dadosCurriculares } from '../../services/dados-currisculares';
import { ModalSemestre } from '../../componentes/ModalSemestre';


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
      <div>
        <h1>Introdução ao Aprendizado</h1>
        <h2>Conheça como se dá o processo de formação em Ciências Ambientais: da teoria à prática, da sala de aula ao campo.</h2>
        <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>
      </div>
      <div className={styles.matriz}>
        <header className={styles.apresentacao}>
          <h1>Matriz Curricular do Curso</h1>
          <p>A matriz curricular do curso de Ciências Ambientais foi pensada para oferecer uma formação ampla, crítica e prática. A seguir, você pode explorar as disciplinas distribuídas ao longo dos semestres, entender a carga horária, os eixos temáticos e como elas se conectam com a prática profissional.</p>
        </header>

        <main className={styles.corpoMatriz}>
          <section>
            <img className={styles.banner} src='/assets/bannerMatriz.png' alt='banner'></img>
            <span>Quer ver a matriz completa e oficial?<br/> Clique para conferir</span>
            <div className={styles.linkMatriz}>
              <a href="https://si3.ufc.br/sigaa/public/curso/curriculo.jsf">2010.1</a>
              <a href="https://si3.ufc.br/sigaa/public/curso/curriculo.jsf">2014.1</a>
              <a href="https://si3.ufc.br/sigaa/public/curso/curriculo.jsf">2025.1</a>
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
        <span>O curso de Ciências Ambientais adota uma abordagem pedagógica inovadora e interdisciplinar, que combina teoria e prática. As metodologias de ensino priorizam o aprendizado ativo, a experimentação e o envolvimento direto dos estudantes com problemas reais da sociedade e do meio ambiente.</span>
      </div>
    </>
  );
}

export default Aprendizado;