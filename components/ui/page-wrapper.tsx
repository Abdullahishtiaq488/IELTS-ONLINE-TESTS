import React from 'react';
import { Container } from './container';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <Container className={`py-6 md:py-8 ${className}`}>
      {children}
    </Container>
  );
} 