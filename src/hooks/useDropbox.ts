import { useEffect, useState } from 'react';

const useDropbox = (
  el: React.RefObject<HTMLElement>,
  initialState: boolean,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  useEffect(() => {
    const onClick = (e: any) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [el, isOpen]);

  return [isOpen, setIsOpen];
};

export default useDropbox;
