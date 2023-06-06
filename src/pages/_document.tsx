import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { renderStatic } from "../shared/renderer";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = async () => {
        const out = await originalRenderPage({
          enhanceApp: (App) => (props) => {
            return sheet.collectStyles(<App {...props} />);
          },
        });

        return out;
      };

      const initialProps = await Document.getInitialProps(ctx);
      const { css, ids } = await renderStatic(initialProps.html);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style
              data-emotion={`css ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
