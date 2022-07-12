import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetCarriers } from '../../query/useTrackerQuery';
import Dropbox from '../common/Dropbox';
import ModalWrapper from '../wrapper/ModalWrapper';

interface SearchModalProps {
  show: boolean;
  close: () => void;
}

function SearchModal({ show, close }: SearchModalProps) {
  const { register } = useForm();
  const dropDownRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const data = useGetCarriers();
  console.log(data);
  return (
    <ModalWrapper show={show} closePortal={close}>
      <Wrapper>
        <Section>
          <span>운송장 번호</span>
          <Input placeholder="운송장 번호를 입력해주세요." {...register('id')} />
        </Section>
        <Section>
          <span>택배사</span>
          <Test role="button" onClick={() => setIsOpen(!isOpen)}>
            테스트
            <Dropbox dropDownref={dropDownRef} isOpen={isOpen}>
              <ul>{data && data.map((item: any) => <li>{item.name}</li>)}</ul>
            </Dropbox>
          </Test>
        </Section>
      </Wrapper>
    </ModalWrapper>
  );
}

export default SearchModal;

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  background-color: white;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 1rem;
`;

const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  span {
    margin-right: 1.5rem;
  }
`;

const Input = styled.input`
  flex: 1;
  border-radius: 8px;
  border: 1px solid gray;
  padding: 0.5rem 0.4rem;
`;

const Test = styled.div`
  position: relative;
`;
