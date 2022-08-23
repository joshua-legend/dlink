import Document, { DocumentContext, Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" as="style" type="text/css" href="/fonts/font.css" />
            <link href="//font.elice.io/EliceDigitalBaeum.css" rel="stylesheet" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
