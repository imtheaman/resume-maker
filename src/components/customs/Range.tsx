import { ChangeEventHandler } from 'react';
import { BlurEvent } from '../../vite-env';

const Range: React.FC<{
  value: number;
  
}> = ({ value, setValue }) => {
  return (
    <div>
      <input
        type='radio'
        onChange={(e: BlurEvent) =>
          // @ts-ignore
          dispatch(setValue({ id, content: 1 }))
        }
      />
      <input
        type='radio'
        onChange={(e: BlurEvent) =>
          // @ts-ignore
          dispatch(setValue({ id, content: 1 }))
        }
      />
      <input
        type='radio'
        onChange={(e: BlurEvent) =>
          // @ts-ignore
          dispatch(setValue({ id, content: 1 }))
        }
      />
      <input
        type='radio'
        onChange={(e: BlurEvent) =>
          // @ts-ignore
          dispatch(setValue({ id, content: 1 }))
        }
      />
      
    </div>
  );
};

export default Range;
