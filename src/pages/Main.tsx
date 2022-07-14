import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import TrackState from '../atom/TrackState';
import SearchModal from '../components/modal/SearchModal';

function MainPage() {
  const [show, setShow] = useState<boolean>(false);
  const track = useRecoilValue(TrackState);
  console.log(track);
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
