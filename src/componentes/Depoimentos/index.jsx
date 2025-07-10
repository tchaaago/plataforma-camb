import { useEffect, useState } from "react";
import styles from "./Depoimentos.module.css";
import { DepoimentosService } from "../../services/depoimentos-service";

function CardsDepoimentos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDepoimentos = async () => {
      try {
        const data = await DepoimentosService.findAll();
        setData(data);
      } catch (err) {
        console.error("Erro ao carregar depoimentos:", err);
      }
    };

    fetchDepoimentos();
  }, []);

  if (!data || !data.length) return null;

  return (
    <>
      <div className={styles.card}>
        {data.map((depoimento, index) => {
          const { name, tagline, description } = depoimento;

          return (
            <div className={styles.depoimentos} key={index}>
              <div className={styles.info}>
                <span className={styles.depoimento}>"{description}"</span>
                <h1 className={styles.nome}>{name}</h1>
                <p className={styles.perfil}>{tagline}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardsDepoimentos;
