"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters long"),
  });

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Form data", values);

    toast.dismiss();
    toast.success("Message sent successfully!");
    resetForm();
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl text-center text-gray-800 dark:text-white mb-6">
        Contact Me
      </h2>
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 dark:text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 dark:text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 dark:text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-md mt-4 ${
                    !(isValid && dirty) ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!(isValid && dirty)}
                >
                  Send me a message!
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
