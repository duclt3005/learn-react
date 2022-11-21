import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

const schema = Yup.object({
  firstName: Yup.string().required().max(),
  lastName: Yup.string().required().max(),
}).required();

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <>
      <h1 className="text-center">Using react hook form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 w-full max-w-[500px] mx-auto"
      >
        <div className="flex flex-col gap-4 mb-5">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="p-4 rounded-sd border border-gray-100"
            defaultValue="ABC"
            {...register("firstName", {
              required: true,
              max: 20,
            })}
          />
          {errors?.firstName?.type === 'required' && (<div className="text-sm text-red-500">Required!</div>)}
        </div>
        <div className="flex flex-col gap-4 mb-5">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="p-4 rounded-sd border border-gray-100"
            {...register("lastName")}
          />
          {errors?.lastName?.type === 'required' && (<div className="text-sm text-red-500">{errors.lastName.message}</div>)}
        </div>
        <div className="flex flex-col gap-4 mb-5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="p-4 rounded-sd border border-gray-100"
            {...register("email")}
          />
        </div>
        <div>
          <button
            type="submit"
            className="p-4 w-full bg-green-600 text-white font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpFormHook;
