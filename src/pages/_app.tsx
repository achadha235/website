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
        <title>Abhishek Chadha</title>
        <link rel='icon' href='images/favicon.svg'></link>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
              analytics.load("tUhC8yMzZjhLOzhclpJDv07Iw7ABQld1");
              analytics.page();
              }}();
            `,
          }}
        />

        {/* <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-L590B8S404'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-L590B8S404');
                  `,
          }}
        /> */}
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
