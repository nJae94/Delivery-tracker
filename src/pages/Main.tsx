import styled from '@emotion/styled';
import { useState } from 'react';
import SearchModal from '../components/modal/SearchModal';

function MainPage() {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Wrapper>
      <button type="button" onClick={() => setShow(!show)}>
        테스트
      </button>
      <SearchModal show={show} close={handleClose} />
    </Wrapper>
  );
}

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
