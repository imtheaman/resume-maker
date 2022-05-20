import { useAppDispatch, useAppSelector } from '../../../store/store';
import { BlurEvent } from '../../../../vite-env';
import Editable from '../../customs/Editable';
import SectionHeading from '../SectionHeading';
import references from '../../../store/resume/short-details/references';
import { setFocused } from '../../../store/editor';

const References: React.FC = () => {
  const { order, data } = useAppSelector(({ resume }) => resume.references);
  const { setType, setValue } = references;
  const dispatch = useAppDispatch();
  return (
    <div className='space-y-8'>
      <SectionHeading placeholder='References' section='references' />
      {order.map((id) => (
        <div
          className='space-y-4'
          key={id}
          onFocus={() => dispatch(setFocused({ id, section: 'references' }))}
        >
          <Editable
            as='h4'
            content={data[id].type}
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
              content={data[id].value}
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
        </div>
      ))}
    </div>
  );
};

export default References;
