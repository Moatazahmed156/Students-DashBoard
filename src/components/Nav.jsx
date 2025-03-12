import { Link, NavLink } from "react-router-dom";
import logo from "../../public/180daraga-B9qyHRiz.png";
function Nav() {
  return (
    <div className="min-h-screen bg-[#222222] py-4 flex flex-col gap-4 items-center min-w-[17%]">
      <img src={logo} alt="180 Daraga Logo" className="size-24" />
      <ul className="flex flex-col gap-4 w-full text-white text-lg">
        <li className="w-full">
          <NavLink to="/" className="block px-2 py-2 mx-2 rounded">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/Students" className="block px-2 py-2 mx-2 rounded">
            Data
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
