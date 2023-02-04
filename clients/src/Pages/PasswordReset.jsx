import React from "react";
// Toaster
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
// Formik
import { useFormik } from "formik";
// Form Validation
import { resetPasswordValidate } from "../Helpers/formValidate";

export default function PasswordRecovery() {
  // Login Form Submission.
  const formik = useFormik({
    initialValues: {
      rpass: "",
      rcpass: ""
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: resetPasswordValidate,
    onSubmit: async (values) => {
      toast.success(`Password Reset Successful...`);
    },
  });

  return (
    <div className="w-[100%] mx-auto h-[100vh] flex items-center justify-center gap-y-4 bg-gray-100">
      <div className="py-4">
        <Toaster position="top-right" reverseOrder={false}></Toaster>
      </div>

      <div className=" w-[300px] sm:w-[360px] px-6 py-4 flex flex-col items-center justify-center gap-y-3 bg-gray-50 shadow-sm rounded-[6px] ">
        <div className="w-[100%] text-[#232323] flex flex-col items-center justify-center gap-y-[0.4px]">
          <h3 className="text-center text-[24px] font-bold tracking-wider">
            Password Reset
          </h3>
          <span className="text-center text-[16px] font-light">
            C'mon change your password.
          </span>
        </div>

        <form
          className=" w-[100%] flex flex-col items-center justify-center gap-y-[12px] my-3"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-[100%] flex flex-col items-start justify-center gap-y-[0.2px]">
            <label htmlFor="rpass" className="w-[100%] text-[16px] tracking-wide text-[#232323] font-light">
              Password
            </label>
            <input type="text" className="font-light text-[18px] px-3 py-1 w-[100%] outline-none border-2 border-[#232323] rounded-[4px]" id="rpass" name="rpass" placeholder="Password" value={formik.values.rpass} onChange={formik.handleChange}/>
          </div>
          <div className="w-[100%] flex flex-col items-start justify-center gap-y-[0.2px]">
            <label htmlFor="rcpass" className="w-[100%] text-[16px] tracking-wide text-[#232323] font-light">
              Confirm Password
            </label>
            <input type="text" className="font-light text-[18px] px-3 py-1 w-[100%] outline-none border-2 border-[#232323] rounded-[4px]" id="rcpass" name="rcpass" placeholder="Confirm Password" value={formik.values.rcpass} onChange={formik.handleChange}/>
          </div>
          <button
            type="submit"
            className="w-[100%] py-2 px-3 bg-white shadow-md rounded-[4px] transition-all duration-500 hover:bg-gray-100 hover:shadow-sm hover:scale-95"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
