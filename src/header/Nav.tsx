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
import SaveOnline from '../save-online';
import Layout from '../layout';
import Styles from '../styling';

const Nav = () => {
  const [showThemes, setShowThemes] = useState(false);
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState<ReactElement | false>(false);
  const { screen, theme } = useAppSelector(({ ui }) => ui);
  const [layout, setLayout] = useState(false);

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
          <button disabled={screen !== 'edit'} className='rounded-btn-10'>
            <FontAwesomeIcon icon={faBold} />
          </button>
          <button disabled={screen !== 'edit'} className='rounded-btn-10'>
            <FontAwesomeIcon icon={faUnderline} />
          </button>
          <button disabled={screen !== 'edit'} className='rounded-btn-10'>
            <FontAwesomeIcon icon={faItalic} />
          </button>
          <button disabled={screen !== 'edit'} className='rounded-btn-10'>
            <FontAwesomeIcon icon={faLink} />
          </button>
        </>
      )}
    </div>
  );
};

export default Nav;
