import { ReactNode } from 'react';
import './globals.css';

type LayoutProps = { children: ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};
