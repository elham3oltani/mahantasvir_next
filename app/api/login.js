export const loginHandler = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const res = await axios.post(
        "https://backend.mahantasvir.ir/api/login",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res?.status === 200) {
        setIsLoggedin(true);
        setTimeout(() => {
          navigate("/my-account/info-account");
          window.location.reload(true);
        }, 1000);
      } else {
        localStorage.clear();
        navigate("/signup");
      }

      setEmail("");
      setPass("");
    } catch (e) {
      // const { data } = e.response;
      // setWarning(data);
      console.log(e)
    }
  };