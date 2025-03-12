import Logo from "../../public/180daraga-B9qyHRiz.png";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="w-full h-screen bg-[#222222] flex items-center justify-center">
      <form className="bg-gray-100 w-[25%] h-[78%] rounded-xl flex flex-col justify-center items-center">
        <img src={Logo} alt="" className="size-48" />
        <div className="mt-6 flex gap-2 flex-col mx-4 w-[95%] text-2xl">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Username"
            className="h-[45px]  p-2"
          />
        </div>
        <div className="mt-4 gap-2 flex flex-col w-[95%] text-2xl">
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            name="password"
            placeholder="Password"
            className="h-[45px] p-2"
          />
        </div>
        <Link
          to={"/"}
          className="ml-auto text-[21px] text-gray-800 underline mt-4 mr-2"
        >
          Forgot Password?
        </Link>
        <button className="w-[95%] p-2 bg-[#700608] mt-4 text-white text-xl">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
