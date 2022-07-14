import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiChevronDown } from 'react-icons/bi';
import { Carrier, CarrierForm } from '../../model/Carrier';
import { useGetCarriers, useGetTrack } from '../../query/useTrackerQuery';
import Dropbox from '../common/Dropbox';
import ModalWrapper from '../wrapper/ModalWrapper';

interface SearchModalProps {
  show: boolean;
  close: () => void;
}

function SearchModal({ show, close }: SearchModalProps) {
  const { register, setValue, handleSubmit, reset } = useForm<CarrierForm>();
  const dropDownRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const data = useGetCarriers();
  const { mutate } = useGetTrack();

  const handleSelect = (id: string, carrierName: string) => {
    setValue('name', id);
    setName(carrierName);
    setIsOpen(false);
  };

  const onSubmit: SubmitHandler<CarrierForm> = (info: CarrierForm) => {
    mutate({ id: info.name, trackId: info.id });
    setName('');
    reset();
    close();
  };

  return (
    <ModalWrapper show={show} closePortal={close}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <Section>
            <span>운송장 번호</span>
            <Input>
              <input
                type="number"
                placeholder="운송장 번호를 입력해주세요."
                {...register('id', {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </Input>
          </Section>
          <Section>
            <span>택배사</span>
            <Input role="button" onClick={() => setIsOpen(!isOpen)}>
              <input readOnly placeholder="택배사를 선택 해주세요." value={name} />
              <BiChevronDown />
            </Input>
            <Dropbox dropDownref={dropDownRef} isOpen={isOpen}>
              <ul>
                {data &&
                  data.map((item: Carrier) => (
                    <li key={item.id}>
                      <button type="button" onClick={() => handleSelect(item.id, item.name)}>
                        {item.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </Dropbox>
          </Section>
          <ButtonWrapper>
            <Button type="submit">검색</Button>
          </ButtonWrapper>
        </Wrapper>
      </form>
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
  position: relative;
  margin-top: 1rem;
  span {
    margin-right: 1.5rem;
    min-width: 70px;
  }

  ul {
    box-sizing: border-box;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    &:hover {
      background-color: #e8e5e5;
    }
  }
`;

const Input = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid gray;
  padding: 0.5rem 0.4rem;
  input {
    border: none;
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  padding: 1rem 0.8rem;
  display: flex;
  flex-direction: row-reverse;
`;

const Button = styled.button`
  border-radius: 8px;
  background-color: #68c6f2;
  color: white;
  padding: 10px;
`;
