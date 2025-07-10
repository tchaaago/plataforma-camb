import { useState } from "react";
import { ImageUpload } from "./components/imageUpload/ImageUpload";
import { InputText } from "./components/inputText/inputText";
import { DocenteService } from "../../services/docente-service";

export const RegistrarDocentesDepoimentos = () => {
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
    <div>
      <main>Registrar Material</main>
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
    </div>
  );
};
