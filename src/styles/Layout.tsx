import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;
