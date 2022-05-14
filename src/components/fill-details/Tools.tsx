import {
  faAdd,
  faArrowDown,
  faArrowUp,
  faBrush,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/store';

const Tools = ({ ...otherProps }) => {
  const dispatch = useDispatch();
  const { theme, showTools } = useAppSelector(({ ui }) => ui);
  return (
    <>
      {
        <div
          className={`absolute top-1/2 text-white  px-2 py-4 -skew-y-12 -translate-y-1/2 -left-[4.8rem] ${theme}`}
          {...otherProps}
        >
          <div className='flex flex-col items-center space-y-4 skew-y-12'>
            <button className='rounded-btn-8 bg-gray-100 text-gray-800'>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <button className='rounded-btn-8 bg-gray-100 text-gray-800'>
              <FontAwesomeIcon icon={faBrush} />
            </button>
            <button className='rounded-btn-8 bg-gray-100 text-gray-800'>
              <FontAwesomeIcon icon={faAdd} />
            </button>
            <button className='rounded-btn-8 bg-gray-100 text-gray-800'>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className='rounded-btn-8 bg-gray-100 text-gray-800'>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default Tools;
