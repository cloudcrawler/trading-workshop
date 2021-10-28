import styles from "./Footer.module.scss";

const Footer = ({ ...rest }) => {
  return (
    <>
      <footer className={styles.footer} {...rest}>
        &copy; Hyper Bros. Trading Cards, {new Date().getFullYear()}
      </footer>
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js"
      ></script>
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
        hidden
      ></div>
    </>
  );
};

export default Footer;
