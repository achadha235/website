import Header from './Header';
import NextNprogress from 'nextjs-progressbar';

function Layout({ children }) {
  return (
    <div className='h-screen w-full overflow-x-hidden overflow-y-scroll'>
      <NextNprogress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Header />
      {children}
    </div>
  );
}

export default Layout;
