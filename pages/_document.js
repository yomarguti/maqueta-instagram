import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* {favicon} */}
          {/* {webfont} */}
          {/* {stylesheet} */}
          {/* {scriptjs} */}
          <script src="https://kit.fontawesome.com/6694d6286d.js" crossOrigin="anonymous"></script>
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
