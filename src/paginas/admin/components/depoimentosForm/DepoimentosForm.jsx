import { useState } from "react";
import { InputText } from "../inputText/inputText";
import { DepoimentosService } from "../../../../services/depoimentos-service";
import { Textarea } from "../textArea/TextArea";

export const DepoimentosForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tagline: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = await DepoimentosService.create(
        {
          name: formData.name,
          description: formData.description,
          tagline: formData.tagline,
        },
        formData.image
      );
      console.log("Depoimento registrado com sucesso:", id);
    } catch (err) {
      console.error("Erro ao registrar depoimento:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Registrar</button>
    </form>
  );
};
