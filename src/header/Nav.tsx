import {
  faPalette,
  faPenToSquare,
  faCheckCircle,
  faGlobe,
  faBold,
  faUnderline,
  faItalic,
  faLink,
  faGear,
  faSwatchbook,
  faPaintRoller
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeBtn from '../customs/ThemeBtn';
import { ReactElement, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setScreen } from '../../store/ui';
import Modal from '../modal/Modal';
import SaveOnline from '../auth';
import Layout from '../layout';
import Styles from '../styling';
import SideModal from '../modal/SideModal';

const Nav = () => {
  const [showThemes, setShowThemes] = useState(false);
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState<ReactElement | false>(false);
  const { screen, theme } = useAppSelector(({ ui }) => ui);
  const [layout, setLayout] = useState(false);
  const [showSideModal, setShowSideModal] = useState(false);
  const [linkText, setLinkText] = useState('');

  const HandleTextStyle = (type: 'bold' | 'italic' | 'underline' | 'link') => {
    const range = window.getSelection()?.getRangeAt(0);
    const text = range?.extractContents();
    if (!text) return;
    switch (type) {
      case 'bold':
        const b = document.createElement('b');
        b.appendChild(text);
        range?.insertNode(b);
        return;
      case 'italic':
        const i = document.createElement('i');
        i.appendChild(text);
        range?.insertNode(i);
        return;
      case 'underline':
        const u = document.createElement('u');
        u.appendChild(text);
        u;
        return;
      case 'link':
        setLinkText(text + '');
    }
  };

  

  return (
    <div className='flex space-x-6'>
      <div className='text-black flex'>
        <button className='btn' onClick={() => setShowThemes(!showThemes)}>
          <FontAwesomeIcon
            icon={faPalette}
            width={18}
            height={18}
            className='mr-2'
          />
          Themes
        </button>
        {showThemes && (
          <>
            <ThemeBtn theme='bg-orange-600' />
            <ThemeBtn theme='bg-yellow-600' />
            <ThemeBtn theme='bg-green-600' />
            <ThemeBtn theme='bg-blue-600' />
            <ThemeBtn theme='bg-blue-800' />
            <ThemeBtn theme='bg-purple-800' />
            <ThemeBtn theme='bg-pink-600' />
          </>
        )}
      </div>
      <button className='btn' onClick={() => dispatch(setScreen('templates'))}>
        <FontAwesomeIcon
          icon={faSwatchbook}
          width={18}
          height={18}
          className='mr-2'
        />
        Templates
      </button>
      <button
        className='btn'
        disabled={screen !== 'resume' && screen !== 'edit'}
        onClick={() => {
          setModal(<Layout />);
          setLayout(true);
        }}
      >
        <FontAwesomeIcon
          icon={faGear}
          width={18}
          height={18}
          className='mr-2'
        />
        Layout
      </button>
      <button className='btn' onClick={() => setModal(<Styles />)}>
        <FontAwesomeIcon
          icon={faPaintRoller}
          width={18}
          height={18}
          className='mr-2'
        />
        Styling
      </button>
      <button
        className={`custom-btn relative z-[9] ${theme + ' text-white'}`}
        onClick={() =>
          dispatch(setScreen(screen !== 'resume' ? 'resume' : 'edit'))
        }
      >
        {screen !== 'resume' ? (
          <>
            <FontAwesomeIcon
              icon={faCheckCircle}
              width={18}
              height={18}
              className='mr-2'
            />
            <span>See Resume</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faPenToSquare}
              width={18}
              height={18}
              className='mr-2'
            />
            <span>Fill Details</span>
          </>
        )}
      </button>
      <button className='btn' onClick={() => setModal(<SaveOnline />)}>
        <FontAwesomeIcon
          icon={faGlobe}
          width={18}
          height={18}
          className='mr-2'
        />
        Save Online
      </button>
      {modal && (
        <Modal
          exitButton={!layout}
          extraFunction={() => setLayout(false)}
          position={layout ? 'left' : 'center'}
          setModal={setModal}
          modal={modal}
        />
      )}
      {!showThemes && (
        <>
          <button
            disabled={screen !== 'edit'}
            className='rounded-btn-10'
            onClick={(e) => HandleTextStyle('bold')}
          >
            <FontAwesomeIcon icon={faBold} />
          </button>
          <button
            disabled={screen !== 'edit'}
            className='rounded-btn-10'
            onClick={(e) => HandleTextStyle('underline')}
          >
            <FontAwesomeIcon icon={faUnderline} />
          </button>
          <button
            disabled={screen !== 'edit'}
            className='rounded-btn-10'
            onClick={(e) => HandleTextStyle('italic')}
          >
            <FontAwesomeIcon icon={faItalic} />
          </button>
          <div className='relative'>
            <button
              disabled={screen !== 'edit'}
              className='rounded-btn-10'
              onClick={() => setShowSideModal((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faLink} />
            </button>
            {showSideModal && (
              <SideModal className='w-[20rem]'>
                <input
                  className='outline-none w-full border rounded-lg p-2 mb-6'
                  type='text'
                  placeholder='Enter the url'
                />
                <div className='flex justify-between'>
                  <button
                    className={`custom-btn text-red-500 border border-red-500 hover:bg-red-500 hover:text-white`}
                  >
                    Remove
                  </button>
                  <button
                    className={`custom-btn min-w-[6rem] ${theme} text-white`}
                  >
                    Add
                  </button>
                </div>
              </SideModal>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
