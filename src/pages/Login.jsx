import Logo from "../../public/180daraga-B9qyHRiz.png";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
function Login() {
  const [LoginData, setLoginData] = useState();
  const [isAuth, setIsAuth] = useState(false);
  const [message, setMessage] = useState(null);
  function handleChange(e) {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function HandleLogin(e) {
    e.preventDefault();
    let login = document.getElementById("login");
    login.innerText = "Wait for response...";
    login.setAttribute("disabled", "true");
    try {
      const response = await axios.post(
        "https://fake-form.onrender.com/api/login",
        LoginData
      );
      localStorage.setItem("token", [response.data.token, LoginData.email]);
      setIsAuth(true);
      login.innerText = "Login";
      login.removeAttribute("disabled");
    } catch (err) {
      console.error("Error:", err);
      login.innerText = "Login";
      login.removeAttribute("disabled");
      setMessage("Incorrect Email or Password");
    }
  }
  if (isAuth) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <div className="w-full h-screen bg-[#700608] flex items-center justify-center">
      <div className="h-[400px] bg-[#222] rounded-l-xl px-8 flex items-center">
        <img src={Logo} alt="" className="size-48 " />
      </div>

      <form
        onSubmit={HandleLogin}
        className="bg-white w-[650px] h-[400px] rounded-xl rounded-l-none flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl text-gray-900">Members Login</h1>
        <div className="w-[95%] text-2xl mt-4">
          <div className="relative top-[37px] w-fit ">
            <MdEmail />
          </div>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            className="h-[45px] p-2 pl-[30px] w-full border-b-2 border-[#222] outline-none"
          />
        </div>
        <div className="w-[95%] text-2xl">
          <div className="relative top-[35px] w-fit ">
            <FaLock />
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="h-[45px] pl-[30px] p-2 w-full border-b-2 border-[#222] outline-none"
          />
        </div>
        <p className="text-xl mt-4 font-bold text-[#222]">{message}</p>
        <button
          id="login"
          className="min-w-[30%] w-fit p-2 px-4 bg-[#700608] rounded-3xl mt-6 text-white text-xl hover:bg-[#222]"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
