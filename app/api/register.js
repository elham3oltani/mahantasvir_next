
import axios from "axios";

export const postHandler = async (formData, setError, setIsLoggin, navigate) => {
  // console.log("formData", formData);
  try {
    const { name, mobile, email, password, password_confirmation } = formData;
    const data = { name, mobile, email, password, password_confirmation };
    const res = await axios.post("https://backend.mahantasvir.ir/api/register", data);
    
    if (res.data.message) {
      setIsLoggin(true);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("info", JSON.stringify(data.name));
      setTimeout(() => {
        navigate("signup/verify_code");
      }, 2000);
    }
  } catch (error) {
    console.error(error);
    setError(error.response.data);
  }
};