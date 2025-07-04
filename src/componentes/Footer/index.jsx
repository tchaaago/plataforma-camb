import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img
          className="footerLogo"
          src="assinatura.svg"
          alt="assinatura"
          width={158}
          height={92}
        />
      </div>
      <div class="footerAddress">
        <strong>Endereço</strong>
        <br /> Av. da Abolição 3207, Meireles, Fortaleza/CE
        <br /> CEP 60.165-081
      </div>
      <div class="footerText">
        <strong>Contato</strong>
        <br /> cienciasambientais@ufc.br
        <br /> (85) 3366.7059
      </div>
      <div class="footerText">
        <strong>Redes Sociais</strong>
        <br />
        <a
          href="https://www.instagram.com/cienciasambientaisufc/"
          target="_blank"
        >
          <img class="instagramIcon" src="instagram.svg" alt="instagram" width={50} height={50}/>
        </a>
        <a
          href="https://www.facebook.com/CienciasAmbientaisUfc/?locale=pt_BR"
          target="_blank"
        >
          <img class="facebookIcon" src="facebook.svg" alt="facebook" height={50}/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
