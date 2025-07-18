import React from "react";
import styles from "./ModalSemestre.module.css";

export const ModalSemestre = ({
  semestreInfo,
  nomeSemestre,
  aoFechar,
  onNavegar,
}) => {
  if (!semestreInfo) return null;

  return (
    <div className={styles.modalOverlay} onClick={aoFechar}>
      <div
        className={styles.modalConteudo}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.fecharBotao} onClick={aoFechar}>
          x
        </button>

        <button className={styles.botaoAnt} onClick={() => onNavegar(-1)}>
          <img src="/botaoLaranja.svg" alt="Semestre Anterior" />
        </button>
        <button className={styles.botaoProx} onClick={() => onNavegar(1)}>
          <img src="/botaoLaranja.svg" alt="Próximo Semestre" />
        </button>

        <h2>{nomeSemestre}</h2>

        <table>
          <thead>
            <tr>
              <th>CÓDIGO</th>
              <th>DISCIPLINA</th>
              <th>CH</th>
              <th>NATUREZA</th>
            </tr>
          </thead>
          <tbody>
            {semestreInfo.disciplinas.map((disciplina, index) => (
              <tr key={index}>
                <td>{disciplina.codigo}</td>
                <td>{disciplina.nome}</td>
                <td>{disciplina.ch}</td>
                <td>{disciplina.natureza}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.chInfo}>
          {semestreInfo.chMinima && <p>CH MÍNIMA: {semestreInfo.chMinima}</p>}
          <p>CH TOTAL: {semestreInfo.chTotal}</p>
        </div>
      </div>
    </div>
  );
};
