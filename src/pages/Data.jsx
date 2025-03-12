import Table from "../components/Table";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
function Data() {
  return (
    <div className="flex gap-4">
      <Nav />
      <div className="main flex flex-col justify-center w-full">
        <p className="text-2xl font-bold">Form Data</p>
        <Table AllData="true" />
      </div>
    </div>
  );
}
export default Data;
