import Table from "../components/Table";
import Nav from "../components/Nav";
import { Link, Navigate } from "react-router-dom";
function Data() {
  if (!localStorage.getItem("token")) {
    return <Navigate to={"/Login"} />;
  }
  return (
    <div className="flex gap-4">
      <Nav />
      <div className="mt-4 flex flex-col justify-center w-full">
        <p className="text-3xl font-bold">Form Data</p>
        <Table AllData="true" />
      </div>
    </div>
  );
}
export default Data;
