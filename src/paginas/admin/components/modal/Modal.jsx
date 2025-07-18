import "./style.css";

export const Modal = ({ children, handleClose }) => {
  return (
    <div onClick={handleClose} className="root">
      <div onClick={(e) => e.stopPropagation()} className="content">
        {children}
      </div>
    </div>
  );
};
