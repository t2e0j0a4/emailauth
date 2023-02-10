import React from "react";
// Toaster
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
// Formik
import { useFormik } from "formik";
// Form Validation
import { recoverOtpValidate } from "../Helpers/formValidate";

export default function PasswordRecovery() {
  
  // Login Form Submission.
  const formik = useFormik({
    initialValues: {
      otp : ''
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: recoverOtpValidate,
    onSubmit: async (values) => {
      toast.success(`OTP Verified...`);
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
            Password Recovery
          </h3>
          <span className="text-center text-[16px] font-light">
            Reset your password by entering OTP sent to you.
          </span>
        </div>

        <form
          className=" w-[100%] flex flex-col items-center justify-center gap-y-[12px] my-3"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-[100%] flex flex-col items-start justify-center gap-y-[0.2px]">
            <label
              htmlFor="otp"
              className="w-[100%] text-[16px] tracking-wide text-[#232323] font-light"
            >
              Enter 6 digit OTP
            </label>
            <input type="text" className="font-light text-[18px] px-3 py-1 w-[100%] outline-none border-2 border-[#232323] rounded-[4px]" id="otp" name="otp" placeholder="Enter OTP" value={formik.values.otp} onChange={formik.handleChange}/>
          </div>
          <button
            type="submit"
            className="w-[100%] py-2 px-3 bg-white shadow-md rounded-[4px] transition-all duration-500 hover:bg-gray-100 hover:shadow-sm hover:scale-95"
          >
            Submit OTP
          </button>
        </form>

        <div className="w-[100%] flex flex-row items-center justify-center gap-x-2">
          <span className="text-[16px] text-gray-700 font-light">
            Didn't Receive OTP?
            <button type="button" className="text-[18px] text-[#232323] ml-1 hover:text-gray-500 underline hover:scale-[0.98] transition-all duration-200">
              Resend
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
