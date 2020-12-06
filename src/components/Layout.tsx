import Header from './Header';
import NextNprogress from 'nextjs-progressbar';
import { AppBarProps } from '@material-ui/core';

interface LayoutProps {
  children?: any;
  headerPosition?: AppBarProps['position'];
  className?: string;
}

function Layout({ children, headerPosition, className }: LayoutProps) {
  return (
    <div
      className={`h-screen w-full overflow-x-hidden overflow-y-scroll justify-center ${className}`}
    >
      <NextNprogress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Header position={headerPosition} />
      {children}
    </div>
  );
}

export default Layout;
