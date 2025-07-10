import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img
          className="footerLogo"
          src="./assets/assinatura.svg"
          alt="assinatura"
          width={158}
          height={92}
        />
      </div>
      <div className="footerAddress">
        <strong>Endereço</strong>
        <br /> Av. da Abolição 3207, Meireles, Fortaleza/CE
        <br /> CEP 60.165-081
      </div>
      <div className="footerText">
        <strong>Contato</strong>
        <br /> cienciasambientais@ufc.br
        <br /> (85) 3366.7059
      </div>
      <div className="footerText">
        <strong>Redes Sociais</strong>
        <br />
        <a
          href="https://www.instagram.com/cienciasambientaisufc/"
          target="_blank"
        >
          <img
            className="instagramIcon"
            src="./assets/instagram.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>
        <a
          href="https://www.facebook.com/CienciasAmbientaisUfc/?locale=pt_BR"
          target="_blank"
        >
          <img
            className="facebookIcon"
            src="./assets/facebook.svg"
            alt="facebook"
            height={50}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
