import Table from "../components/Table";
import Nav from "../components/Nav";
import { Link, Navigate } from "react-router-dom";
function Dashboard() {
  if (!localStorage.getItem("token")) {
    return <Navigate to={"/Login"} />;
  }
  return (
    <div className="flex gap-4">
      <Nav />
      <div className="main flex flex-col justify-center w-full items-center">
        <div className="flex w-full flex-col items-start">
          <h1 className="text-9xl">Hello !</h1>
          <h3 className="text-2xl">Welcome to Dashboard</h3>
        </div>
        <Table AllData="false" />
        <Link
          to="/Students"
          className="block py-2 px-4 mt-4 text-xl rounded-lg text-white bg-[#700608] w-fit hover:bg-[#222]"
        >
          View All Data
        </Link>
      </div>
    </div>
  );
}
export default Dashboard;
