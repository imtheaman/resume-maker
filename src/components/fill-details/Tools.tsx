import {
  faAdd,
  faArrowDown,
  faArrowUp,
  faBrush,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import useSection from '../../hooks/useSection';
import { useAppSelector } from '../../store/store';

const Tools: React.FC = () => {
  const dispatch = useDispatch();
  const [focused, screen] = useAppSelector(({ ui, editor }) => [
    editor.focused,
    ui.screen,
  ]);
  const managementHandler = (event: 'add' | 'up' | 'down' | 'delete') => {
    const { create, deleteEl, setOrderUp, setOrderDown } =
      focused?.section && useSection(focused?.section);
    switch (event) {
      case 'add':
        dispatch(create())
      case 'up':
      case 'down':
      case 'delete':
    }
  };
  const styleHandler = () => {};
  return (
    <>
      {screen === 'edit' && (
        <div className='fixed top-1/2 text-white  px-2 py-8 -skew-y-12 -translate-y-1/3 left-12'>
          <div className='flex flex-col items-center space-y-5 skew-y-12'>
            <button
              className='rounded-btn-10'
              disabled={typeof focused?.descId === 'number'}
              onClick={() => managementHandler('up')}
            >
              <FontAwesomeIcon icon={faArrowUp} width={20} height={20} />
            </button>
            <button className='rounded-btn-10' onClick={styleHandler}>
              <FontAwesomeIcon icon={faBrush} width={20} height={20} />
            </button>
            <button className='rounded-btn-10'>
              <FontAwesomeIcon
                icon={faAdd}
                width={20}
                height={20}
                onClick={() => managementHandler('add')}
              />
            </button>
            <button className='rounded-btn-10'>
              <FontAwesomeIcon
                icon={faTrash}
                width={20}
                height={20}
                onClick={() => managementHandler('delete')}
              />
            </button>
            disabled={typeof focused?.descId === 'number'}
            <button
              className='rounded-btn-10'
              onClick={() => managementHandler('down')}
            >
              <FontAwesomeIcon icon={faArrowDown} width={20} height={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Tools;
