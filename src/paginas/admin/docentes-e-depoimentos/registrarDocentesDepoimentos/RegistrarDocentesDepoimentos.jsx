import { useState } from "react";
import { DocentesForm } from "../../components/docentesForm/DocentesForm";
import { DepoimentosForm } from "../../components/depoimentosForm/DepoimentosForm";
import { Toggle } from "../../components/toggle/Toggle";
import "./style.css";

export const RegistrarDocentesDepoimentos = () => {
  const [selectedForm, setSelectedForm] = useState("docentes");
  const options = [
    { label: "Docentes", value: "docentes" },
    { label: "Depoimentos", value: "depoimentos" },
  ];

  return (
    <div className="board">
      <main>
        <h1>Registrar Material</h1>

        <div className="toggleContainer">
          <Toggle
            options={options}
            selected={selectedForm}
            onChange={setSelectedForm}
          />
        </div>

        {selectedForm === "docentes" ? <DocentesForm /> : <DepoimentosForm />}
      </main>
    </div>
  );
};
