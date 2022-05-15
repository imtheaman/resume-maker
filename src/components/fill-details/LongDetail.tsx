import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent } from '../../vite-env';
import Editable from '../customs/Editable';

import experiences from '../../store/resume/long-details/experiences';
import educations from '../../store/resume/long-details/educations';
import projects from '../../store/resume/long-details/projects';
import volunteers from '../../store/resume/long-details/volunteers';
import organizations from '../../store/resume/long-details/organizations';

export type LongSection =
  | 'experiences'
  | 'projects'
  | 'educations'
  | 'volunteers'
  | 'organizations';

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
    //@ts-ignore
    setSecondary,
    createDescContent,
    setDescContent,
    setDescHeading,
  } =
    section === 'educations'
      ? educations
      : section === 'projects'
      ? projects
      : section === 'volunteers'
      ? volunteers
      : section === 'organizations'
      ? organizations
      : experiences;

  const dispatch = useAppDispatch();
  const [{ primary, secondary, description }, listStyle] = useAppSelector(
    ({ resume, ui }) => [resume[section].data[id], ui.listStyle]
  );
  return (
    <div className='fill-details' data-id={id}>
      <Editable
        as='h3'
        className='input-primary'
        placeholder={placeholder.primary}
        content={primary}
        onBlur={(e: BlurEvent) =>
          dispatch(setPrimary({ id, content: e.target.value }))
        }
      />
      {typeof secondary === 'string' && (
        <Editable
          as='h3'
          className='input-primary'
          placeholder={placeholder.secondary}
          content={secondary}
          onBlur={(e: BlurEvent) =>
            dispatch(setSecondary({ id, content: e.target.value }))
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
            dispatch(setDescHeading({ id, content: e.target.value }))
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
                    content: e.target.value,
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
    </div>
  );
};

export default LongDetail;
