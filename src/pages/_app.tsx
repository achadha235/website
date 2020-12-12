import 'src/styles/main.scss';
import { createContext } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import tailwindConfig from 'tailwind.config';
import theme from 'src/styles/theme';
import Router from 'next/router';
import type { NextWebVitalsMetric } from 'next/app';

interface IAppContext {
  name?: string;
  theme: typeof tailwindConfig;
}

const appContext = {
  name: 'website',
  theme: tailwindConfig,
};

Router.events.on('routeChangeComplete', (url) => {
  window.analytics.page(url);
});

export const AppContext = createContext<IAppContext>(appContext);

function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Abhishek Chadha</title>
        <link rel='icon' href='images/favicon.svg'></link>
      </Head>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={appContext}>
          <Component key={router.route} {...pageProps} />
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const { name, ...eventProps } = metric;
  window.analytics.track(name, { ...eventProps });
  window.dataLayer.push({
    event: name,
    ...eventProps,
  });
}

export default App;
