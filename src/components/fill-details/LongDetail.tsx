import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent } from '../../vite-env';
import Editable from '../customs/Editable';
import Tools from './Tools';
export type LongSection = 'experiences' | 'projects' | 'educations' | 'volunteers';

interface Props {
  id: string;
  section: LongSection;
  placeholder: {
    primary: string;
    secondary?: string;
    desc: string;
  };
  Fromtolocation: ReactNode;
}
const LongDetail: React.FC<Props> = ({
  id,
  section,
  placeholder,
  Fromtolocation,
}) => {
  const {
    setPrimary,
    setSecondary,
    createDescContent,
    setDescContent,
    setDescHeading,
  } = require(`../../store/resume/long-details/${section}`);

  const dispatch = useAppDispatch();
  const [{ primary, secondary, description }, listStyle] = useAppSelector(
    ({ resume, ui }) => [resume[section].data[id], ui.listStyle]
  );
  return (
    <>
      <Editable
        as='h3'
        className='input-primary'
        placeholder={placeholder.primary}
        content={primary}
        onBlur={(e: BlurEvent) =>
          dispatch(setPrimary({ id, content: e.currentTarget.value }))
        }
      />
      {secondary && (
        <Editable
          as='h3'
          className='input-primary'
          placeholder={placeholder.secondary}
          content={secondary}
          onBlur={(e: BlurEvent) =>
            dispatch(setSecondary({ id, content: e.currentTarget.value }))
          }
        />
      )}
      {Fromtolocation}
      <div className='flex flex-col space-y-2'>
        <Editable
          as='h4'
          className='desc-heading'
          placeholder={placeholder.desc}
          content={description.heading}
          onBlur={(e: BlurEvent) =>
            dispatch(setDescHeading({ id, content: e.currentTarget.value }))
          }
        />
        <div className={`input-container ${listStyle}`}>
          {description.contents.map((el, index) => (
            <Editable
              key={index}
              as='p'
              className='text-gray-700 w-full border-dashed empty:border-b'
              content={el}
              onBlur={(e: BlurEvent) =>
                dispatch(
                  setDescContent({
                    id,
                    descId: index,
                    content: e.currentTarget.value,
                  })
                )
              }
              onKeyDownCapture={(e: any) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  dispatch(createDescContent({ id }));
                }
              }}
            />
          ))}
        </div>
      </div>
      <Tools id={id} />
    </>
  );
};

export default LongDetail;
