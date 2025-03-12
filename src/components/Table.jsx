import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Table({ AllData }) {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(
          "https://fake-form.onrender.com/api/students"
        );
        setTableData(response.data.data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
    fetchData();
  }, []);
  async function Delete(id) {
    try {
      await axios.delete(`https://fake-form.onrender.com/api/students/${id}`);
      setTableData(tableData.filter((student) => student._id !== id));
      alert(`Student with ID ${id} deleted Successfully`);
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  }
  if (!tableData.length) {
    return (
      <div className="flex ">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="w-full">
      <table className="w-full mt-[20px]  border-collapse [&_tr]:border-y-[1px] [&_tr]:border-[#eee] table-auto">
        <thead>
          <tr className=" text-[20px] [&_th]:text-center [&_th]:py-[10px] [&_th]:px-[20px] [&_th]:overflow-hidden [&_th]:whitespace-nowrap [&_th]:text-clip">
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Level</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {(AllData == "true" ? tableData : tableData.slice(0, 5)).map(
            (e, i) => (
              <tr
                key={i}
                className="text-[18px] [&_td]:text-center [&_td]:py-[10px] [&_td]:px-[20px] [&_td]:whitespace-nowrap [&_td]:text-clip"
              >
                <td>{e._id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.level}</td>
                <td>{e.university}</td>
                {AllData == "true" ? (
                  <td className="flex gap-2 text-[17px] text-white">
                    <button
                      onClick={() => Delete(e._id)}
                      className="bg-red-500 text-md rounded p-1"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/Students/ID/${e._id}`}
                      className="block bg-green-500 text-md rounded p-1 px-2"
                    >
                      Edit
                    </Link>
                  </td>
                ) : null}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
