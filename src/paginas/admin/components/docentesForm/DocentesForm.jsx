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

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

    const { name, degree, lattes, image } = formData;
    if (!name || !degree || !lattes || !image) {
      setError("Por favor, preencha todos os campos.");
      setSuccess("");
      return;
    }

    try {
      setError("");
      setSuccess("Docente registrado com sucesso!");

      const id = await DocenteService.create({ name, degree, lattes }, image);

      console.log("Docente registrado com sucesso:", id);

      setFormData({
        name: "",
        degree: "",
        lattes: "",
        image: null,
      });
    } catch (err) {
      console.error("Erro ao registrar docente:", err);
      setError("Erro ao registrar docente. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="erro">{error}</p>}
      {success && <p className="success">{success}</p>}

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
