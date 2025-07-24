import { useState } from "react";
import { Button } from "../components/button/Button";
import "./style.css";
import { Modal } from "../components/modal/Modal";
import { Plus, X } from "lucide-react";
import { InputText } from "../components/inputText/inputText";
import { DisciplinasService } from "../../../services/disciplinas-service";

export const ConsultaPorSemestre = () => {
  const [open, setOpen] = useState(false);
  const [semestreSelecionado, setSemestreSelecionado] = useState(null);
  const [chMinima, setChMinima] = useState("");
  const [fields, setFields] = useState([
    Array.from({ length: 2 }, () => ({ codigo: "", nome: "", carga: "64h" })),
  ]);

  const handleChange = (index, key, value) => {
    const newFields = [...fields];
    newFields[index][key] = value;
    setFields(newFields);
  };

  const addField = () => {
    setFields((prev) => [...prev, { codigo: "", nome: "", carga: "64h" }]);
  };

  const handleOpen = (semestre) => {
    setSemestreSelecionado(semestre);
    setOpen(true);
    setFields(
      Array.from({ length: 2 }, () => ({
        codigo: "",
        nome: "",
        carga: "64h",
        chMinima: "",
      }))
    );
    setChMinima("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const camposInvalidos = fields.some(
      (f) => f.codigo.trim() === "" || f.nome.trim() === ""
    );

    if (camposInvalidos) {
      alert("Preencha todos os campos obrigatórios corretamente.");
      return;
    }

    const codigos = fields.map((f) => f.codigo.trim());
    const codigosUnicos = new Set(codigos);

    if (codigos.length !== codigosUnicos.size) {
      alert("Há códigos de disciplina duplicados. Corrija antes de enviar.");
      return;
    }

    try {
      for (const field of fields) {
        const payload = {
          ...field,
          semestre:
            semestreSelecionado === null ? "optativa" : semestreSelecionado,
        };

        await DisciplinasService.create(payload);
      }

      alert("Disciplinas criadas com sucesso!");
      setOpen(false);
    } catch (err) {
      console.error("Erro ao criar disciplinas:", err);
      alert("Erro ao enviar disciplinas.");
    }
  };

  return (
    <div className="board">
      <h1>Consulta por semestre</h1>
      <h2 className="semesterh2">
        Clique em um semestre para atualizar as disciplinas
      </h2>
      <div className="botoes">
        {Array.from({ length: 8 }).map((_, index) => (
          <Button
            key={index}
            text={`${index + 1}º Semestre`}
            className="semesterButton"
            onClick={() => handleOpen(index + 1)}
          />
        ))}
        <Button
          text="Optativa"
          className="semesterButton optativaButton"
          onClick={() => handleOpen(null)}
        />
      </div>

      {open && (
        <Modal handleClose={() => setOpen(false)}>
          <h2 className="modalH2">
            Adicionar disciplinas para{" "}
            {semestreSelecionado === null
              ? "Optativas"
              : `${semestreSelecionado}º semestre`}
          </h2>

          <div style={{ position: "relative" }}>
            <Button
              className="close-button"
              onClick={() => setOpen(false)}
              icon={<X />}
              style={{
                position: "absolute",
                top: "-12px",
                right: "-12px",
                background: "white",
                borderRadius: "50%",
                boxShadow: "0 0 6px rgba(0,0,0,0.2)",
                zIndex: 10,
              }}
            />
          </div>

          <form onSubmit={handleSubmit} className="formCampos">
            {fields.map((field, index) => (
              <div
                key={index}
                style={{ marginBottom: "1rem" }}
                className="formItem"
              >
                <input
                  type="text"
                  value={field.codigo}
                  onChange={(e) =>
                    handleChange(index, "codigo", e.target.value)
                  }
                  placeholder="Código"
                  className="campoCodigo"
                />

                <InputText
                  placeholder="Nome da disciplina"
                  value={field.nome}
                  onChange={(e) => handleChange(index, "nome", e.target.value)}
                  className="campoNome"
                />

                <select
                  value={field.carga}
                  onChange={(e) => handleChange(index, "carga", e.target.value)}
                  className="selectCarga"
                >
                  <option value="64h">64h</option>
                  <option value="96h">96h</option>
                </select>
              </div>
            ))}
            <div className="buttonsWrapper">
              <div className="formItem">
                <input
                  type="text"
                  value={chMinima}
                  onChange={(e) => setChMinima(e.target.value)}
                  placeholder="Carga horária mínima"
                  className="campoChMinimaGlobal"
                />
              </div>

              {fields.length < 8 ? (
                <Button
                  className={"buttonForm"}
                  type="button"
                  onClick={addField}
                  icon={<Plus />}
                  text="Adicionar Campo"
                ></Button>
              ) : (
                <p style={{ color: "red", marginBottom: "1rem" }}>
                  Máximo de 8 disciplinas atingido.
                </p>
              )}

              <Button type="submit" text="Salvar" className="buttonForm" />
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
