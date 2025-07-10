import { useState } from "react";
import { DocentesForm } from "./components/docentesForm/DocentesForm";
import { DepoimentosForm } from "./components/depoimentosForm/DepoimentosForm";

export const RegistrarDocentesDepoimentos = () => {
  const [selectedForm, setSelectedForm] = useState("docentes");

  return (
    <div>
      <main>
        <h1>Registrar Material</h1>

        <div style={{ marginBottom: "2rem" }}>
          <label>
            <input
              type="radio"
              name="tipo"
              value="docentes"
              checked={selectedForm === "docentes"}
              onChange={() => setSelectedForm("docentes")}
            />
            Docentes
          </label>

          <label style={{ marginLeft: "2rem" }}>
            <input
              type="radio"
              name="tipo"
              value="depoimentos"
              checked={selectedForm === "depoimentos"}
              onChange={() => setSelectedForm("depoimentos")}
            />
            Depoimentos
          </label>
        </div>

        {selectedForm === "docentes" ? <DocentesForm /> : <DepoimentosForm />}
      </main>
    </div>
  );
};
