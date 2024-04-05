import React, { useState } from "react";
import { loginMerchant } from "../../api/API";
import { useDispatch } from "react-redux";
import { loginUser } from "../../global/state";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const onHandleSubmit = async (e: any) => {
    e.preventDefault();
    loginMerchant(email).then((res: any) => {
      if (res.status === 201) {
        dispatch(loginUser(res));
        navigate("/");
      }
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <main className="flex items-center justify-center w-[300px] h-[200px] border rounded-md">
        <form className="flex flex-col" onSubmit={onHandleSubmit}>
          <input
            placeholder="Enter Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            className="px-2 w-[270px] h-12 border rounded-md"
          />
          <button
            className="mt-6 bg-black text-white py-3 rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default LoginScreen;
