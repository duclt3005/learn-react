import { useFormik } from "formik";
import * as Yup from 'yup';
import React from "react";

// const validate = (values) => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = "Required!";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 characters or less."
//   }

//   return errors;
// }

const SignUpFormDemo = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
      .max(20, 'Must be 20 characters or less.')
      .required("Required!"),
      lastName: Yup.string()
      .max(20, 'Must be 20 characters or less.')
      .required("Required!")
    }),
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
          onBlur={formik.onBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (<div className="text-sm text-red-500">{formik.errors.firstName}</div>) : null}
      </div>
      <div className="flex flex-col gap-4 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-sd border border-gray-100"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.onBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (<div className="text-sm text-red-500">{formik.errors.lastName}</div>) : null}
      </div>
      <div>
        <button type="submit" className="p-4 w-full bg-green-600 text-white font-semibold">Submit</button>
      </div>
    </form>
  );
};

export default SignUpFormDemo;
