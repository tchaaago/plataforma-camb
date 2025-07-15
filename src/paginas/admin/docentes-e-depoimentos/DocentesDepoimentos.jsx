import { Plus } from "lucide-react";
import { LinkButton } from "../components/linkButton/LinkButton";
import { ListDDItem } from "../components/listDD/ListDDItem";
import { useEffect, useState } from "react";
import { DocenteService } from "../../../services/docente-service";
import { DepoimentosService } from "../../../services/depoimentos-service";
import { Toggle } from "../components/toggle/Toggle";
import "./style.css";

export const DocentesDepoimentos = () => {
  const [docentesData, setDocentesData] = useState([]);
  const [depoimentosData, setDepoimentosData] = useState([]);
  const [selectedList, setSelectedList] = useState("docentes");

  const options = [
    { label: "Docentes", value: "docentes" },
    { label: "Depoimentos", value: "depoimentos" },
  ];

  const fetchDocentes = async () => {
    try {
      const data = await DocenteService.findAll();
      setDocentesData(data);
    } catch (err) {
      console.error("Erro ao carregar docentes:", err);
    }
  };

  const fetchDepoimentos = async () => {
    try {
      const data = await DepoimentosService.findAll();
      setDepoimentosData(data);
    } catch (err) {
      console.error("Erro ao carregar depoimentos:", err);
    }
  };

  useEffect(() => {
    fetchDocentes();
    fetchDepoimentos();
  }, []);

  console.log(docentesData);

  const deleteDocente = async (id, imageUrl) => {
    const result = window.confirm("Você deseja mesmo excluir o docente?");
    if (result) {
      await DocenteService.deleteById(id, imageUrl);
      fetchDocentes();
      alert("Docente excluído com sucesso");
    }
  };

  const deleteDepoimento = async (id) => {
    const result = window.confirm("Você deseja mesmo excluir o depoimento?");
    if (result) {
      await DepoimentosService.deleteById(id);
      fetchDepoimentos();
      alert("Depoimento excluído com sucesso");
    }
  };

  return (
    <div className="board">
      <h1>Lista de materiais registrados</h1>
      <Toggle
        options={options}
        selected={selectedList}
        onChange={setSelectedList}
      />
      <ul>
        {selectedList === "docentes" &&
          docentesData.length !== 0 &&
          docentesData?.map((item) => (
            <ListDDItem
              key={item.id}
              image={item.imageUrl}
              title={item.name}
              description={item.degree}
              date={item.createdAt}
              onDelete={() => deleteDocente(item.id, item.imageUrl)}
            />
          ))}
        {selectedList === "depoimentos" &&
          depoimentosData.length !== 0 &&
          depoimentosData?.map((item) => (
            <ListDDItem
              key={item.id}
              title={item.name}
              tagline={item.tagline}
              description={item.description}
              date={item.createdAt}
              onDelete={() => deleteDepoimento(item.id)}
            />
          ))}
      </ul>
      <LinkButton
        className="registerButton"
        icon={<Plus />}
        text="Novo Material"
        link="registrar"
      ></LinkButton>
    </div>
  );
};
