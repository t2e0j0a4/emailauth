import React , {useState} from 'react'
// Link Import
import {Link} from "react-router-dom";
// Toaster
import {Toaster} from "react-hot-toast";
import toast from "react-hot-toast";
// Formik
import {useFormik} from "formik";
// Form Validation
import {loginValidate} from "../Helpers/formValidate"; 


export default function Login() {

  // Password Show / Hide State & Functionality.
  const [passShow,setPassShow] = useState('password');
  const toggleShow = () => {
    passShow==='password' ? setPassShow('text') : setPassShow('password');
  }

  // Login Form Submission.
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: loginValidate,
    onSubmit: async (values) => {
      toast.success(`Login Success, Welcome ${values.username}`);
    },
  });

  return (
    <div className="w-[100%] mx-auto h-[100vh] flex items-center justify-center gap-y-4 bg-gray-100">
      <div className="py-4">
        <Toaster position="top-right" reverseOrder={false}></Toaster>
      </div>

      <div className=" w-[300px] sm:w-[500px] px-6 py-4 flex flex-col items-center justify-center gap-y-3 bg-gray-50 shadow-sm rounded-[6px] ">
        <div className="w-[100%] text-[#232323] flex flex-col items-center justify-center gap-y-[0.4px]">
          <h3 className="text-center text-[24px] font-bold tracking-wider">
            Login
          </h3>
          <span className="text-center text-[16px] font-light">
            Welcome Back!!
          </span>
        </div>

        <form
          className=" w-[100%] flex flex-col items-center justify-center gap-y-[12px]"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-[100%] flex flex-col items-start justify-center gap-y-[0.2px]">
            <label
              htmlFor="username"
              className="w-[100%] text-[16px] tracking-wide text-[#232323] font-light"
            >
              Username
            </label>
            <input
              required
              type="text"
              className="font-light text-[18px] px-3 py-1 w-[100%] outline-none border-2 border-[#232323] rounded-[4px]"
              id="username"
              name="username"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>
          <div className="w-[100%] flex flex-col items-start justify-center gap-y-[0.2px]">
            <label
              htmlFor="password"
              className="w-[100%] text-[16px] tracking-wide text-[#232323] font-light"
            >
              Password
            </label>
            <input
              required
              type={passShow === "password" ? "password" : "text"}
              className="font-light text-[18px] px-3 py-1 w-[100%] outline-none border-2 border-[#232323] rounded-[4px]"
              id="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <div className='flex items-center w-[100%] justify-end my-1'>
              <button
                type="button"
                className="text-[#232323] text-[14px] hover:text-gray-500  transition-all duration-500 "
                onClick={() => {
                  toggleShow();
                }}
              >
                {passShow === "password" ? "Show" : "Hide"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-[100%] py-2 px-3 bg-white shadow-md rounded-[4px] transition-all duration-500 hover:bg-gray-100 hover:shadow-sm hover:scale-95"
          >
            Log In
          </button>
        </form>

        <div className="w-[100%] flex flex-row items-center justify-center my-2">
          <span className="text-[16px] text-gray-700 font-light ">
            Forgot Password?
            <Link
              to="/recovery"
              className="text-[18px] text-[#232323] ml-1 hover:text-gray-500 underline  hover:scale-95"
            >
              Recover.
            </Link>
          </span>
        </div>

        <div className="flex flex-row items-center justify-center gap-x-3">
          <div className=" w-[80px] sm:w-[130px] rounded-[50%] h-[1px] bg-[#232323]"></div>
          <div className="font-bold text-[18px] normal tracking-wider">OR</div>
          <div className=" w-[80px] sm:w-[130px] rounded-[50%] h-[1px] bg-[#232323]"></div>
        </div>

        <div className="w-[100%] flex flex-row items-center justify-center gap-x-2">
          <span className="text-[16px] text-gray-700 font-light">
            Create an Account?
            <Link
              to="/register"
              className="text-[18px] text-[#232323] ml-1 hover:text-gray-500 underline  hover:scale-95"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}