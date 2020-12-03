import 'src/styles/main.scss';
import { createContext } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import tailwindConfig from 'tailwind.config';
import theme from 'src/styles/theme';

interface IAppContext {
  name?: string;
  theme: typeof tailwindConfig;
}

const appContext = {
  name: 'website',
  theme: tailwindConfig,
};

export const AppContext = createContext<IAppContext>(appContext);

function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Niftycrates</title>
        <link rel='icon' type='image/svg+xml' href='/images/logo.svg' />
      </Head>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={appContext}>
          <Component key={router.route} {...pageProps} />
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
