import {
  faAdd,
  faArrowDown,
  faArrowUp,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import useSection from '../../hooks/useSection';
import { useAppSelector } from '../../store/store';

const Tools: React.FC = () => {
  const dispatch = useDispatch();
  const [focused, screen] = useAppSelector(({ ui, editor }) => [
    editor.focused,
    ui.screen
  ]);
  // @ts-ignore
  const section = useSection(focused?.section);

  const managementHandler = (event: 'add' | 'up' | 'down' | 'delete') => {
    // @ts-ignore
    const { createEl, deleteEl, setOrderUp, setOrderDown } = section;
    switch (event) {
      case 'add':
        dispatch(createEl({ id: focused?.id!, descId: focused?.descId }));
        return;
      case 'up':
        setOrderUp && dispatch(setOrderUp({ id: focused?.id }));
        return;
      case 'down':
        setOrderDown && dispatch(setOrderDown({ id: focused?.id }));
        return;
      case 'delete':
        dispatch(deleteEl({ id: focused?.id!, descId: focused?.descId }));
        return;
    }
  };
  const styleHandler = () => {};
  return (
    <>
      {screen === 'edit' && (
        <div className='fixed top-1/2 text-white  px-2 py-8 -skew-y-12 -translate-y-1/3 left-12'>
          <div className='flex flex-col items-center space-y-8 skew-y-12'>
            <button
              className='rounded-btn-10'
              // @ts-ignore
              disabled={!focused || !section.setOrderUp}
              onClick={() => managementHandler('up')}
            >
              <FontAwesomeIcon icon={faArrowUp} width={20} height={20} />
            </button>
            <button
              className='rounded-btn-10'
              disabled={!focused}
              onClick={() => managementHandler('add')}
            >
              <FontAwesomeIcon icon={faAdd} width={20} height={20} />
            </button>
            <button
              className='rounded-btn-10'
              disabled={!focused}
              onClick={() => managementHandler('delete')}
            >
              <FontAwesomeIcon icon={faTrash} width={20} height={20} />
            </button>
            <button
              className='rounded-btn-10'
              // @ts-ignore
              disabled={!focused || !section.setOrderDown}
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
