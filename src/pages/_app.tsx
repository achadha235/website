import 'src/styles/main.scss';
import Head from 'next/head';
import getConfig from 'next/config';
import Router from 'next/router';
import type { NextWebVitalsMetric } from 'next/app';
import { isNil } from 'lodash';

import { createContext, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import tailwindConfig from 'tailwind.config';
import theme from 'src/styles/theme';

import * as snippet from '@segment/snippet';
import CookieModal from 'src/components/CookieModal';
import { parseCookies, setCookie } from 'nookies';
interface IAppContext {
  name?: string;
  theme: typeof tailwindConfig;
}

const appContext = {
  name: 'website',
  theme: tailwindConfig,
};

const { publicRuntimeConfig } = getConfig();
const {
  ANALYTICS_WRITE_KEY,
  NODE_ENV,
  GA_MEASUREMENT_ID,
} = publicRuntimeConfig;

export const AppContext = createContext<IAppContext>(appContext);

function renderSnippet() {
  const opts = {
    apiKey: ANALYTICS_WRITE_KEY,
    page: true,
  };
  if (NODE_ENV === 'development') {
    return snippet.max(opts);
  }
  return snippet.min(opts);
}

function renderGASnippet() {
  return `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}');
  `;
}

function App({ Component, pageProps, router }) {
  const cookieTimeoutSec = 10 * 365 * 24 * 60 * 60;
  const cookies = parseCookies();
  const [useCookies, setUseCookies] = useState(
    isNil(cookies.enabledCookies)
      ? cookies.enabledCookies
      : cookies.enabledCookies === 'true'
  );
  const renderAnalytics = () => (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      ></script>
      <script dangerouslySetInnerHTML={{ __html: renderGASnippet() }} />
      <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
    </>
  );

  return (
    <>
      <Head>
        <title>Abhishek Chadha</title>
        <link rel='icon' href='images/favicon.svg'></link>
        {useCookies && renderAnalytics()}
      </Head>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={appContext}>
          <Component key={router.route} {...pageProps} />
        </AppContext.Provider>
        {isNil(cookies.enabledCookies) && (
          <CookieModal
            showPrompt={isNil(useCookies)}
            disableCookies={() => {
              setUseCookies(false);
              setCookie(null, 'enabledCookies', 'false', {
                maxAge: cookieTimeoutSec,
              });
            }}
            enableCookies={() => {
              setUseCookies(true);
              setCookie(null, 'enabledCookies', 'true', {
                maxAge: cookieTimeoutSec,
              });
            }}
          />
        )}
      </ThemeProvider>
    </>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const { name, ...eventProps } = metric;
  window.analytics && window.analytics.track(name, { ...eventProps });
  window.dataLayer &&
    window.dataLayer.push({
      event: name,
      ...eventProps,
    });
}

Router.events.on('routeChangeComplete', (url) => {
  window.analytics && window.analytics.page(url);
});

export default App;
