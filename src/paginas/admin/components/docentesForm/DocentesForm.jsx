import { useState } from "react";
import { DocenteService } from "../../../../services/docente-service";
import { ImageUpload } from "../imageUpload/ImageUpload";
import { InputText } from "../inputText/inputText";

export const DocentesForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    degree: "",
    lattes: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleImageChange = (file) => {
    setFormData((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = await DocenteService.create(
        {
          name: formData.name,
          degree: formData.degree,
          lattes: formData.lattes,
        },
        formData.image
      );
      console.log("Docente registrado com sucesso:", id);
    } catch (err) {
      console.error("Erro ao registrar docente:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ImageUpload onImageChange={handleImageChange} />
      <InputText
        id="name"
        placeholder="Nome do docente"
        value={formData.name}
        onChange={handleInputChange}
      />
      <InputText
        id="degree"
        placeholder="Formação"
        value={formData.degree}
        onChange={handleInputChange}
      />
      <InputText
        id="lattes"
        placeholder="Link do Currículo Lattes"
        value={formData.lattes}
        onChange={handleInputChange}
      />
      <button type="submit">Registrar</button>
    </form>
  );
};
