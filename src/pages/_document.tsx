import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as snippet from '@segment/snippet';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
const {
  ANALYTICS_WRITE_KEY,
  NODE_ENV,
  GA_MEASUREMENT_ID,
} = serverRuntimeConfig;
class MyDocument extends Document {
  renderSnippet() {
    const opts = {
      apiKey: ANALYTICS_WRITE_KEY,
      page: true,
    };
    if (NODE_ENV === 'development') {
      return snippet.max(opts);
    }
    return snippet.min(opts);
  }

  renderGASnippet() {
    return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', '${GA_MEASUREMENT_ID}');
    `;
  }

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{ __html: this.renderGASnippet() }}
          />
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
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
