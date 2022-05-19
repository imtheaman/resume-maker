import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { BlurEvent, LongSection } from '../../vite-env';
import Editable from '../customs/Editable';
import { setFocused } from '../../store/editor';
import useSection from '../../hooks/useSection';

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
    createEl,
    setDescContent,
    setDescHeading,
  } = useSection(section);

  const dispatch = useAppDispatch();
  const [{ primary, secondary, description }, listStyle] = useAppSelector(
    ({ resume, editor }) => [resume[section].data[id], editor.listStyle]
  );
  return (
    <div
      className='space-y-4'
      data-id={id}
      onFocus={() => dispatch(setFocused({ id, section }))}
    >
      <Editable
        as='h3'
        className='input-primary'
        placeholder={placeholder.primary}
        content={primary}
        onBlur={(e: BlurEvent) =>
          dispatch(setPrimary({ id, content: e.target.innerText }))
        }
      />
      {typeof secondary === 'string' && (
        <Editable
          as='h3'
          className='input-primary'
          placeholder={placeholder.secondary}
          content={secondary}
          onBlur={(e: BlurEvent) =>
            dispatch(setSecondary({ id, content: e.target.innerText }))
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
            dispatch(setDescHeading({ id, content: e.target.innerText }))
          }
        />
        {Object.entries(description.contents).map(([descId, el]) => (
          <div
            className='flex'
            key={descId}
            onFocus={(e) => {
              e.stopPropagation();
              dispatch(setFocused({ id, section, descId: descId }));
            }}
          >
            <span className={`${listStyle} mr-2`} />
            <Editable
              as='p'
              className='desc-content'
              content={el}
              onBlur={(e: BlurEvent) =>
                dispatch(
                  setDescContent({
                    id,
                    descId: descId,
                    content: e.target.innerText,
                  })
                )
              }
              onKeyDownCapture={(e: any) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  dispatch(createEl({ id, descId }));
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LongDetail;
