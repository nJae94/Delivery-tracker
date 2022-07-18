import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { Track } from '../../model/Carrier';
import TrackIcon from './TrackIcon';

interface TrackCardProps {
  track: Track;
}

function TrackCard({ track }: TrackCardProps) {
  return (
    <Wrapper>
      <Info>
        <p>운송 번호 : {track.carrier.id}</p>
        <div>{`보내는 이 : ${track.from.name} => 받는 이 : ${track.to.name}`}</div>
      </Info>
      <Progresses>
        {track.progresses.map((item) => (
          <div key={item.status.id}>
            <TrackIcon id={item.status.id} />
            <span>{item.status.text}</span>
            <span>{`${item.location.name} ${dayjs(item.time).format('YYYY-MM-DD HH:mm')}`}</span>
            <span>{item.description}</span>
          </div>
        ))}
      </Progresses>
    </Wrapper>
  );
}

export default TrackCard;

const Wrapper = styled.section`
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const Progresses = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 140px;
    padding: 5px;
  }

  span {
    word-break: break-all;
  }
`;
