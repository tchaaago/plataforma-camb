import { useEffect, useState } from "react";
import "./style.css";

function DocentesCAMB() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/json/ListaDocentes.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  return (
    <>
      <div className="carrossel">
        {data.map((docentes) => {
          const { nome, infoDocente, img_docente, lattes } = docentes;
          return (
            <section className="docentes" key={nome}>
              <img className="img_docente" src={img_docente} alt={nome}></img>
              <section className="info">
                <span className="nome">{nome}</span>
                <p className="infoDocente">{infoDocente}</p> <br/>
                <section className="lattes">
                  <a  href={lattes} target="_blank">Currículo Lattes</a>
                </section>
              </section>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default DocentesCAMB;
