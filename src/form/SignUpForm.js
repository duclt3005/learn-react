import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  FormCheckboxComponent,
  FormInputComponent,
  FormSelectComponent,
  FormTextAreaComponent,
} from "./FormComponent";

const SignUpForm = () => {
  return (
    <>
    <h1>Using formik</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required!"),
        lastName: Yup.string().required("Required!"),
        email: Yup.string().email().required("Required!"),
        // intro: Yup.string().required("Required!"),
        job: Yup.string().required("Required!"),
        terms: Yup.boolean(),
      })}
      onSubmit={(values, actions) => {
        actions.resetForm({
          firstName: "",
          lastName: "",
          email: "",
          intro: "",
          job: "",
          terms: false,
        });
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 2000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="p-10 w-full max-w-[500px] mx-auto">
          <FormInputComponent
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
          ></FormInputComponent>
          {/* <div className="flex flex-col gap-4 mb-5">
    <label htmlFor="firstName">First name</label>
    <Field
      name="firstName"
      type="text"
      placeholder="Enter your first name"
      className="p-4 rounded-sd border border-gray-100"
    ></Field>
    <div className="text-sm text-red-500">
      <ErrorMessage name="firstName"></ErrorMessage>
    </div>
  </div> */}
          <FormInputComponent
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
          ></FormInputComponent>
          {/* <div className="flex flex-col gap-4 mb-5">
    <label htmlFor="lastName">Last name</label>
    <Field
      name="lastName"
      type="text"
      placeholder="Enter your last name"
      className="p-4 rounded-sd border border-gray-100"
    ></Field>
    <div className="text-sm text-red-500">
      <ErrorMessage name="lastName"></ErrorMessage>
    </div>
  </div> */}
          <FormInputComponent
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          ></FormInputComponent>
          {/* <div className="flex flex-col gap-4 mb-5">
    <label htmlFor="email">Email</label>
    <Field
      name="email"
      type="email"
      placeholder="Enter your email"
      className="p-4 rounded-sd border border-gray-100"
    ></Field>
    <div className="text-sm text-red-500">
      <ErrorMessage name="email"></ErrorMessage>
    </div>
  </div> */}
          <FormTextAreaComponent
            label="Introduction"
            name="intro"
            placeholder="Enter your email"
          ></FormTextAreaComponent>
          {/* <div className="flex flex-col gap-4 mb-5">
    <label htmlFor="intro">Introduction</label>
    <Field
      name="intro"
      type="text"
      placeholder="Enter your introduction"
      className="p-4 rounded-sd border border-gray-100 h-[150px] resize-none"
      as="textarea"
    ></Field>
    <div className="text-sm text-red-500">
      <ErrorMessage name="intro"></ErrorMessage>
    </div>
  </div> */}
          <FormSelectComponent label="Select your jobs" name="job">
            <option value="html">Html</option>
            <option value="css">CSS</option>
            <option value="javascript">Javascript</option>
          </FormSelectComponent>
          {/* <div className="flex flex-col gap-4 mb-5">
    <label htmlFor="job">Select your jobs</label>
    <Field
      name="job"
      type="text"
      className="p-4 rounded-sd border border-gray-100"
      as="select"
    >
        <option value="html">Html</option>
      <option value="css">CSS</option>
      <option value="javascript">Javascript</option>
    </Field>
    <div className="text-sm text-red-500">
      <ErrorMessage name="job"></ErrorMessage>
    </div>
  </div> */}
          <FormCheckboxComponent name="terms">
            <p>I accepted the terms</p>
          </FormCheckboxComponent>
          {/* <div className="flex item-center gap-4 mb-5">
    <Field
      name="terms"
      type="checkbox"
      className="p-4 rounded-sd border border-gray-100"
    ></Field>
    <p>I accepted the terms</p>
    <div className="text-sm text-red-500">
      <ErrorMessage name="terms"></ErrorMessage>
    </div>
  </div> */}
          <div>
            <button
              type="submit"
              className="p-4 w-full bg-green-600 text-white font-semibold"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
    </>
  );
};

export default SignUpForm;
