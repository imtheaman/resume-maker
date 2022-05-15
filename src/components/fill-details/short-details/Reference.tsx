import { Fragment } from 'react';
import actions from '../../../store/resume/short-details/references';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { BlurEvent } from '../../../vite-env';
import Editable from '../../customs/Editable';
import SectionHeading from '../SectionHeading';

const Reference: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(({ resume }) => resume.references.data);
  const setReference = actions.setReference;
  return (
    <div className='space-y-4'>
      <SectionHeading placeholder='REFERENCES' section='references' />
      {data.map((el, index) => (
        <Fragment key={index}>
          <Editable
            as='h4'
            content={el.person}
            placeholder='Person Name'
            className='input-primary'
            onBlur={(e: BlurEvent) =>
              dispatch(
                setReference({
                  id: index,
                  content: {
                    person: e.target.innerText,
                    contact: el.contact,
                  },
                })
              )
            }
          />
          <div className='flex'>
            <span className='desc-heading mr-2'>Contact :</span>
            <Editable
              as='p'
              className='border-b flex-grow'
              content={el.contact}
              placeholder='Email/Phone'
              onBlur={(e: BlurEvent) =>
                dispatch(
                  setReference({
                    id: index,
                    content: {
                      person: el.person,
                      contact: e.target.innerText,
                    },
                  })
                )
              }
            />
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Reference;
