import { useEffect, useState } from "react";
import "./style.css";
import { DocenteService } from "../../services/docente-service";

function DocentesCAMB() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const data = await DocenteService.findAll();
        setData(data);
      } catch (err) {
        console.error("Erro ao carregar docentes:", err);
      }
    };

    fetchDocentes();
  }, []);

  if (!data || !data.length) return null;

  return (
    <>
      <div className="carrossel">
        {data.map((docente) => {
          const { id, name, degree, imageUrl, lattes } = docente;
          console.log(degree);
          return (
            <div className="docentes" key={id}>
              <div className="container_image">
                <img src={imageUrl} alt={name} />
              </div>

              <div className="info">
                <span className="nome">{name}</span>
                <p className="infoDocente">{degree}</p>
                <div className="lattes">
                  <a href={lattes} target="_blank">
                    Currículo Lattes
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DocentesCAMB;
