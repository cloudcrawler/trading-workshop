import Document, { Html, Head, Main, NextScript } from "next/document";
import { render } from "sass";

const RootDocument = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
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
      </body>
    </Html>
  );
};

export default RootDocument;
