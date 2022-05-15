import { Fragment } from 'react';
import actions from '../../../store/resume/short-details/references';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { BlurEvent } from '../../../vite-env';
import Editable from '../../customs/Editable';
import SectionHeading from '../SectionHeading';
import Tools from '../Tools';

const Reference: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(({ resume }) => resume.references.data);
  const setReference = actions.setReference;
  return (
    <div className='fill-details'>
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
                    person: e.target.value,
                    contact: el.contact,
                  },
                })
              )
            }
          />
          <div className='flex'>
            <span className='font-thin mr-2'>Email : </span>
            <Editable
              as='p'
              className='border-b flex-grow'
              content={el.contact}
              placeholder='email address'
              onBlur={(e: BlurEvent) =>
                dispatch(
                  setReference({
                    id: index,
                    content: {
                      person: el.person,
                      contact: e.target.value,
                    },
                  })
                )
              }
            />
          </div>
          <div className='flex'>
            <span className='font-thin mr-2'>Phone : </span>
            <Editable
              as='p'
              className='border-b flex-grow'
              content={el.contact}
              placeholder='phone details'
              onBlur={(e: BlurEvent) =>
                dispatch(
                  setReference({
                    id: index,
                    content: {
                      person: el.person,
                      contact: e.target.value,
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
