import Table from "../components/Table";
import Nav from "../components/Nav";
import { Link, Navigate } from "react-router-dom";
function Data() {
  return (
    <div className="flex gap-4">
      <Nav />
      <div className="mt-4 flex flex-col  w-full">
        <p className="text-3xl font-bold">Form Data</p>
        <Table AllData="true" />
      </div>
    </div>
  );
}
export default Data;
