import dados from "./dadosCards.json";
import "./style.css";

export const CarrosselHome = () => {
  return (
    <div className="carrossel-container">
      {dados.map(({ id, texto }) => (
        <div key={id} className="card">
          <div className="cardTexto">{texto}</div>
        </div>
      ))}
    </div>
  );
};
