import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { BlurEvent } from '../../../vite-env';
import Editable from '../../customs/Editable';
import SectionHeading from '../SectionHeading';
import references from '../../../store/resume/short-details/references';

const References: React.FC = () => {
  const data = useAppSelector(({ resume }) => resume.references.data);
  const { setType, setValue } = references;
  const dispatch = useAppDispatch();
  return (
    <div>
      <SectionHeading placeholder='References' section='references' />
      {Object.entries(data).map(([id, { type, value }]) => (
        <Fragment>
          <Editable
            as='h4'
            content={type}
            placeholder='Person Name'
            className='input-primary'
            onBlur={(e: BlurEvent) =>
              dispatch(
                setType({
                  id: id,
                  content: e.target.innerText,
                })
              )
            }
          />
          <div className='flex'>
            <span className='desc-heading mr-2'>Contact :</span>
            <Editable
              as='p'
              className='border-b flex-grow'
              content={value}
              placeholder='Email/Phone'
              onBlur={(e: BlurEvent) =>
                dispatch(
                  setValue({
                    id: id,
                    content: e.target.innerText,
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

export default References;
