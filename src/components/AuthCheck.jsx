import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("User Data"));

    if (!userData) {
      navigate("/Login", { replace: true });
      return;
    }

    axios
      .post("https://fake-form.onrender.com/api/login", userData)
      .then((response) => {
        if (!response.data.success) {
          navigate("/Login", { replace: true });
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, [navigate]);

  return null;
};

export default AuthCheck;
