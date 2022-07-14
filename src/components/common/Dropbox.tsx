import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface DropboxProps {
  dropDownref: React.RefObject<HTMLElement>;
  isOpen: boolean;
  children: ReactNode;
}

function Dropbox({ dropDownref, isOpen, children }: DropboxProps) {
  return (
    <Wrapper isOpen={isOpen} ref={dropDownref}>
      {children}
    </Wrapper>
  );
}

export default Dropbox;

const Wrapper = styled.article(
  ({ isOpen }: { isOpen: boolean }) => css`
    background: #fff;
    border-radius: 8px;
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 200px;
    overflow-y: auto;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: ${isOpen ? 1 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    transform: translateY(20%);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    padding: 10px;
  `,
);
