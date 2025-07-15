import { useState } from "react";
import { DocentesForm } from "../../components/docentesForm/DocentesForm";
import { DepoimentosForm } from "../../components/depoimentosForm/DepoimentosForm";
import { Toggle } from "../../components/toggle/toggle";
import "./style.css";

export const RegistrarDocentesDepoimentos = () => {
  const [selectedForm, setSelectedForm] = useState("docentes");
  const options = [
    { label: "Docentes", value: "docentes" },
    { label: "Depoimentos", value: "depoimentos" },
  ];

  return (
    <div>
      <main>
        <h1>Registrar Material</h1>

        <Toggle
          options={options}
          selected={selectedForm}
          onChange={setSelectedForm}
        />

        {selectedForm === "docentes" ? <DocentesForm /> : <DepoimentosForm />}
      </main>
    </div>
  );
};
