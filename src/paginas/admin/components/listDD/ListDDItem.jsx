import "./style.css";

export const ListDDItem = ({
  title,
  description,
  date,
  image,
  tagline,
  onDelete,
}) => {
  return (
    <li className="containerLi">
      {image && (
        <div className="containerImg">
          <img src={image} className="imgDocenteList" alt={title} />
        </div>
      )}
      <div className="containerDetails">
        <h2>{title}</h2>
        {tagline && <span>{tagline}</span>}
        <p>{description}</p>
        <div className="containerDetails2">
          <span>{date}</span>
          <button onClick={onDelete}>Excluir</button>
        </div>
      </div>
    </li>
  );
};
