import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img
            className={styles.headerLogo}
            alt="logo"
            src="./assets/logotipo.svg"
          />
        </Link>
      </div>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/quemSomos">Quem Somos</Link>
        <Link to="/aprendizado">Aprendizado</Link>
        <Link to="/mercado">Mercado de Trabalho</Link>
        <Link to="/producoes">Produções Acadêmicas</Link>
        <Link to="/faleConosco">Fale Conosco</Link>
      </nav>
    </header>
  );
}

export default Header;
