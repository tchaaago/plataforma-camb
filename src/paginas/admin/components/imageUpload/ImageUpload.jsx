import { useRef, useState } from "react";
import "./style.css";

export const ImageUpload = ({ id, label, onImageChange }) => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isValid = file.type === "image/png" || file.type === "image/jpeg";

    if (!isValid) {
      alert("Apenas arquivos PNG ou JPEG são permitidos.");
      fileInputRef.current.value = null;
      setPreview(null);
      onImageChange(null);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
    onImageChange(file);
  };

  const handleRemove = () => {
    setPreview(null);
    fileInputRef.current.value = null;
    onImageChange(null);
  };

  return (
    <div className="image-upload-wrapper">
      {label && (
        <label htmlFor={id} className="image-upload-label">
          {label}
        </label>
      )}

      <input
        id={id}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="image-upload-input"
      />

      {preview && (
        <div className="image-preview-container">
          <img src={preview} alt="Preview" className="image-preview" />
          <button
            type="button"
            onClick={handleRemove}
            className="remove-image-btn"
          >
            Remover
          </button>
        </div>
      )}
    </div>
  );
};
