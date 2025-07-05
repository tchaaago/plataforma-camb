import { useEffect, useState } from 'react'
import styles from "./Depoimentos.module.css"

function CardsDepoimentos (){
    
    const [data, setData] = useState([]);

    useEffect (() => {
    fetch('http://localhost:5173/json/Depoimentos.json')
    .then((response) => response.json())
    .then(setData);
}, []);

    if (!data || !data.length) return null;

    return (
        <>
        <div className={styles.card}>
            {data.map((depoimentos) => {
                const {nome, perfil, depoimento } = depoimentos;

                return (
                    <section className={styles.depoimentos} key={depoimento}>
                        <section className={styles.info}>
                            <span className={styles.depoimento}>{depoimento}</span>
                            <h1 className={styles.nome}>{nome}</h1>
                            <p className={styles.perfil}>{perfil}</p>
                        </section>
                    </section>
                )
            })}
        </div>
        </>
    )
}

export default CardsDepoimentos