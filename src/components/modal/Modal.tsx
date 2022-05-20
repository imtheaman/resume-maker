import { Dispatch, ReactElement, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

const Modal: React.FC<{
  modal: ReactElement | false;
  setModal: Dispatch<SetStateAction<false | ReactElement>>;
}> = ({ modal, setModal }): ReactElement<any> | null => {
  if (!document.getElementById('modal')) {
    console.error('div with id `modal` is not defined in the html');
  }
  return createPortal(
    <div className={styles.modalContainer} onClick={(e) => setModal(false)}>
      <div className={styles.modalDiv} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalBtn} onClick={(e) => setModal(false)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='1'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
        {modal}
      </div>
    </div>,
    document.getElementById('modal')!
  );
};

export default Modal;
