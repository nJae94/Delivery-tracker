import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import TrackState from '../atom/TrackState';
import TrackCard from '../components/main/TrackCard';
import SearchModal from '../components/modal/SearchModal';

function MainPage() {
  const [show, setShow] = useState<boolean>(false);
  const tracks = useRecoilValue(TrackState);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Wrapper>
      <h1>배송지 추적하기</h1>
      {tracks.length > 0 && tracks.map((track) => <TrackCard key={track.carrier.id} track={track} />)}
      <Add role="button" onClick={() => setShow(!show)}>
        + 배송조회 추가하기
      </Add>
      <SearchModal show={show} close={handleClose} />
    </Wrapper>
  );
}

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Add = styled.div`
  border: 1px dashed black;
  padding: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
`;
