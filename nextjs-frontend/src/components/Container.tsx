// components/Container.tsx
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  bgColor?: string;
}

const Container = ({ children, bgColor = 'bg-blue-500' }: ContainerProps) => {
  return <div className={`container mx-auto px-4 ${bgColor}`}>{children}</div>;
};

export default Container;
