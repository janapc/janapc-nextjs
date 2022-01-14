import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { AppWrapper } from '../contexts/AppContext';

import Tab from '../components/Tab';

import GlobalStyle from '../styles/global';
import { PageApp } from '../styles/app';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AppWrapper>
      <PageApp>
      {router.pathname !== '/404' && <Tab />}
        <Component {...pageProps} />
        <GlobalStyle />
      </PageApp>
    </AppWrapper>
  );
}

export default MyApp;
