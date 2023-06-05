import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { extractCritical } from "@emotion/server";
import { renderToString } from "react-dom/server";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      let emotionStyles;

      ctx.renderPage = () => {
        const out = originalRenderPage({
          enhanceApp: (App) => (props) => {
            return sheet.collectStyles(<App {...props} />);
          },
        });

        emotionStyles = extractCritical(out.html).css;

        return out;
      };

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style>{emotionStyles}</style>
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
