import { useFormik } from "formik";
import React from "react";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-10 w-full max-w-[500px] mx-auto">
      <div className="flex flex-col gap-4 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-sd border border-gray-100"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <button type="submit" className="p-4 w-full bg-green-600 text-white font-semibold">Submit</button>
      </div>
    </form>
  );
};

export default SignUpForm;
