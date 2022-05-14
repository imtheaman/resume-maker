import { Fragment } from 'react';
import { setReference } from '../../../store/resume/short-details/references';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { BlurEvent } from '../../../vite-env';
import Editable from '../../customs/Editable';
import SectionHeading from '../SectionHeading';
import Tools from '../Tools';

const Reference: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(({ resume }) => resume.references.data);
  return (
    <div className='fill-details'>
      <SectionHeading placeholder='REFERENCES' section='references' />
      {data.map((el, index) => (
        <Fragment key={index}>
          <Editable
            as='h4'
            content={el.person}
            onBlur={(e: BlurEvent) =>
              dispatch(
                setReference({
                  id: index,
                  content: {
                    person: e.currentTarget.value,
                    contact: el.contact,
                  },
                })
              )
            }
          />
          <span className='italic border-b'>Contact</span>
          <Editable
            as='p'
            className='font-thin'
            content={el.contact}
            onBlur={(e: BlurEvent) =>
              dispatch(
                setReference({
                  id: index,
                  content: {
                    person: el.person,
                    contact: e.currentTarget.value,
                  },
                })
              )
            }
          />
        </Fragment>
      ))}
      <Tools />
    </div>
  );
};

export default Reference;
