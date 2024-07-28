import { AppProps } from 'next/app';
import '@/styles/globals.css';
import SideNav from '@/layouts/SideNav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <aside className="aside">
        <SideNav />
      </aside>
      <main className="main">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
