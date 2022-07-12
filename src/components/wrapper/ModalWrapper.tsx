import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalWrapperProps {
  show: boolean;
  children: React.ReactNode;
  closePortal?: () => void;
}

function ModalWrapper({ show, children, closePortal }: ModalWrapperProps) {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.getElementById('modal');
      ref.current = dom;
    }
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, [show]);

  if (!show) {
    return null;
  }

  if (ref.current && mounted) {
    return createPortal(
      <Wrapper>
        <Presentation role="presentation" onClick={closePortal} />
        {children}
      </Wrapper>,
      ref.current,
    );
  }
  return null;
}

export default ModalWrapper;

const Wrapper = styled.div`
  display: block;
`;

const Presentation = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;
