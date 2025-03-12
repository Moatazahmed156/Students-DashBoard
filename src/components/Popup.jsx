import { Link } from "react-router-dom";
function Popup({ message, setOpenPopup }) {
  return (
    <div className="w-full h-screen flex items-center justify-center fixed ">
      <div className="flex z-30 flex-col gap-4  items-center justify-center bg-[#000000] rounded-lg w-[700px] h-[300px] text-white text-4xl">
        {message.text == "Data Updated Successfully!" ? (
          <p className="text-7xl text-white bg-[green] rounded-[50%] p-4">
            {message.icon}
          </p>
        ) : (
          <p className="text-7xl text-white bg-[red] rounded-[50%] p-4">
            {message.icon}
          </p>
        )}
        <h2>{message.text}</h2>
        <div className="buttons w-full flex gap-4 justify-center ">
          <button
            onClick={() => setOpenPopup(false)}
            className="bg-[#700608] rounded p-2 hover:bg-white hover:text-black"
          >
            Close
          </button>
          <Link
            to={"/Students"}
            className="bg-[#700608] block rounded p-2 hover:bg-white hover:text-black"
          >
            Back to table
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Popup;
