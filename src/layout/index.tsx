import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setLayout } from '../../store/styles';

const Layout = () => {
  const [theme, layout] = useAppSelector(({ ui, styles }) => [
    ui.theme,
    styles.layout
  ]);
  const dispatch = useAppDispatch();

  const HandleDrag = (result: DropResult) => {
    console.log(result);
    const { source, destination } = result;
    const temp = [...layout];
    if (!destination) return;

    if (source.index === destination.index) return;

    else {
      const [reorderedItem] = temp.splice(source.index, 1);
      temp.splice(destination.index, 0, reorderedItem);
      dispatch(setLayout(temp));
    }
  };

  return (
    <DragDropContext onDragEnd={HandleDrag}>
      <div className='w-[30rem] h-[100vh] bg-white p-8'>
        <h3 className='text-2xl mb-6 text-center '>Set Layout</h3>
        <div className='flex '>
          <Droppable droppableId='layout'>
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className='mt-4 space-y-7 px-5 pb-20 overflow-y-scroll w-full h-full'
                >
                {layout.slice(0, 6).map((el, index) => (
                  <Draggable draggableId={el} key={el} index={index}>
                    {(provided, snapshot) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className={`${theme}  layout-item ${
                          snapshot.isDragging
                            ? 'ring-4 ring-blue-100 bg-opacity-70'
                            : 'bg-opacity-100'
                        }`}
                      >
                        {el}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>

          <Droppable droppableId='layout2'>
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className='mt-4 space-y-7 px-5 pb-20 overflow-y-scroll w-full h-full'
              >
                {layout.slice(6).map((el, index) => (
                  <Draggable draggableId={el} key={el} index={5 + index}>
                    {(provided, snapshot) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className={`${theme}  layout-item ${
                          snapshot.isDragging
                            ? 'ring-4 ring-blue-100 bg-opacity-70'
                            : 'bg-opacity-100'
                        }`}
                      >
                        {el}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Layout;
