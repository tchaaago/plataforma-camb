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
  const [fields, setFields] = useState([
    { codigo: "", nome: "", carga: "24h", natureza: "" },
  ]);

  const handleChange = (index, key, value) => {
    const newFields = [...fields];
    newFields[index][key] = value;
    setFields(newFields);
  };

  const addField = () => {
    setFields((prev) => [
      ...prev,
      { codigo: "", nome: "", carga: "24h", natureza: "" },
    ]);
  };

  const handleOpen = (semestre) => {
    setSemestreSelecionado(semestre);
    setOpen(true);
    setFields([{ codigo: "", nome: "", carga: "24h", natureza: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (semestreSelecionado === null) {
      alert("Selecione um semestre.");
      return;
    }

    const camposInvalidos = fields.some(
      (f) =>
        f.codigo.trim() === "" ||
        f.nome.trim() === "" ||
        f.natureza.trim() === "" ||
        isNaN(Number(f.codigo))
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
          semestre: semestreSelecionado,
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
          <Button onClick={() => setOpen(false)} icon={<X />} />

          <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                <input
                  type="number"
                  value={field.codigo}
                  onChange={(e) =>
                    handleChange(index, "codigo", e.target.value)
                  }
                  placeholder="Código"
                />

                <InputText
                  placeholder="Nome da disciplina"
                  value={field.nome}
                  onChange={(e) => handleChange(index, "nome", e.target.value)}
                />

                <select
                  value={field.carga}
                  onChange={(e) => handleChange(index, "carga", e.target.value)}
                >
                  <option value="64h">64h</option>
                  <option value="96h">96h</option>
                </select>

                <select
                  value={field.natureza}
                  onChange={(e) =>
                    handleChange(index, "natureza", e.target.value)
                  }
                >
                  <option value="" disabled hidden>
                    Selecione a natureza
                  </option>
                  <option value="obrigatoria">Obrigatória</option>
                  <option value="optativa">Optativa</option>
                </select>
              </div>
            ))}

            <Button type="button" onClick={addField} icon={<Plus />}>
              Adicionar campo
            </Button>

            <Button type="submit" text="Salvar" />
          </form>
        </Modal>
      )}
    </div>
  );
};
