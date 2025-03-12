import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import Popup from "../components/Popup";
import { Link, Navigate } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { BiError } from "react-icons/bi";

function Student() {
  const { id } = useParams();
  const [StudentData, setStudentData] = useState(false);
  const [OpenPopup, setOpenPopup] = useState(false);
  const [foundID, setFoundID] = useState(true);
  const [message, setMessage] = useState({
    icon: null,
    text: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://fake-form.onrender.com/api/students/${id}`
        );
        setStudentData(response.data.data);
      } catch (err) {
        console.error("Error:", err);
        setFoundID(false);
      }
    }
    fetchData();
  }, [id]);

  function handleChange(e) {
    setStudentData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function UpdateData(e) {
    e.preventDefault();
    let updateBTN = document.getElementById("submit");
    updateBTN.innerText = "loading...";
    updateBTN.setAttribute("disabled", "true");
    try {
      await axios.patch(
        `https://fake-form.onrender.com/api/students/${id}`,
        StudentData
      );
      setOpenPopup(true);
      setMessage({ icon: <MdDone />, text: "Data Updated Successfully!" });
      updateBTN.innerText = "Update";
      updateBTN.removeAttribute("disabled");
    } catch (err) {
      console.error("Error: ", err);
      updateBTN.innerText = "Update";
      updateBTN.removeAttribute("disabled");
      setOpenPopup(true);
      setMessage({ icon: <BiError />, text: err.message });
    }
  }
  if (!foundID) {
    return <Navigate to={"*"} replace />;
  }
  if (!StudentData) {
    return (
      <div className="flex ">
        <Nav />
        <div className="loader absolute top-[40%] left-[55%]"></div>
      </div>
    );
  }

  return (
    <div className="flex ">
      <Nav />
      <form
        onSubmit={UpdateData}
        className=" flex flex-col items-center w-[90%] px-4 mt-8"
      >
        <div className="Name flex flex-col mx-4 w-full">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-200 h-[40px] w-full p-2"
            onChange={handleChange}
            value={StudentData.name}
          />
        </div>
        <div className="Email mt-4 flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-200 h-[40px] w-full p-2"
            onChange={handleChange}
            value={StudentData.email}
          />
        </div>
        <div className="Phone mt-4 flex flex-col w-full">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="border border-gray-200 h-[40px] w-full p-2"
            onChange={handleChange}
            value={StudentData.phone}
          />
        </div>
        <div className="Age flex flex-col mx-4 w-full">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            className="border border-gray-200 h-[40px] w-full p-2"
            onChange={handleChange}
            value={StudentData.age}
          />
        </div>
        <div className="University mt-4 w-full">
          <label htmlFor="university">University</label>
          <select
            name="university"
            id="university"
            className="border border-gray-200 h-[40px] w-full p-2"
            onChange={handleChange}
            value={StudentData.university}
          >
            <option value="Cairo">Cairo</option>
            <option value="Ain Shams">Ain Shams</option>
            <option value="Helwan">Helwan</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="Level mt-4 w-full">
          <label htmlFor="university_level">University Level</label>
          <select
            name="university_level"
            id="university_level"
            className="border border-gray-200 h-[40px] w-full p-2"
            onChange={handleChange}
            value={StudentData.level}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button
          id="submit"
          className="bg-[#700608] rounded-lg text-white p-2 text-xl w-full mt-8"
        >
          Update
        </button>
        <Link
          to={"/Students"}
          className="bg-[#700608] block rounded-lg text-white p-2 text-xl w-full text-center mt-4"
        >
          Back
        </Link>
      </form>
      {OpenPopup ? (
        <Popup message={message} setOpenPopup={setOpenPopup} />
      ) : null}
    </div>
  );
}
export default Student;
