import { useState } from "react";
import { InputText } from "../inputText/inputText";
import { DepoimentosService } from "../../../../services/depoimentos-service";
import { Textarea } from "../textArea/Textarea";

export const DepoimentosForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tagline: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description, tagline } = formData;
    if (!name || !description || !tagline) {
      setError("Por favor, preencha todos os campos.");
      setSuccess("");
      return;
    }

    try {
      setError("");
      setSuccess("Depoimento registrado com sucesso!");

      const id = await DepoimentosService.create(
        {
          name: formData.name,
          description: formData.description,
          tagline: formData.tagline,
        },
        formData.image
      );
      console.log("Depoimento registrado com sucesso:", id);

      setFormData({
        name: "",
        description: "",
        tagline: "",
      });
    } catch (err) {
      console.error("Erro ao registrar depoimento:", err);
      setError("Erro ao registrar depoimento. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="erro">{error}</p>}
      {success && <p className="success">{success}</p>}

      <InputText
        id="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleInputChange}
      />
      <Textarea
        id="description"
        placeholder="Digite aqui o depoimento..."
        value={formData.description}
        onChange={handleInputChange}
        rows={6}
      />
      <InputText
        id="tagline"
        placeholder="Descrição da pessoa"
        value={formData.tagline}
        onChange={handleInputChange}
      />
      <button type="submit" className="registerButton">
        Registrar
      </button>
    </form>
  );
};
