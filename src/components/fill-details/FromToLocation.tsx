import Editable from "../customs/Editable";

const FromToLocation = () => {
    return (
      <>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <label htmlFor="from">From -</label>
            <input type="month" name="from" className="ml-3 date" />
          </div>
          <div className="flex items-center">
            <label htmlFor="to">To -</label>
            <input type="month" name="to" className="ml-3 date" />
          </div>
        </div>
        <Editable className="italic" as="p" placeholder="Location"></Editable>
      </>
    );
}

export default FromToLocation