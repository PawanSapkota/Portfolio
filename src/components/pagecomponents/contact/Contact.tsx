"use client";
import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const ContactData = [
  {
    name: "Contact",
    icons: <AiOutlinePhone />,
    details: "+977-98194063",
  },
  {
    name: "Website",
    icons: <AiOutlineGlobal />,
    details: "www.pawansapkota.com",
  },
  {
    name: "Address",
    icons: <CiLocationOn />,
    details: "Butwal,Rupandehi",
  },
  {
    name: "Email",
    icons: <AiOutlineMail />,
    details: "sapkotapawan33@gmail.com",
  },
];

const Contact = () => {
  const schema = yup.object().shape({
    name: yup.string().required("FullName is required."),
    email: yup.string().required("Email is required."),
    number: yup.number().required("Phone Number is required."),
  });
  return (
    <div className="mt-16 w-10/12 mx-auto ">
      <h1 className="text-[#3e64ff] text-4xl font-bold text-center">Contact</h1>
      <div className="mt-8  gap-4 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 ">
        {ContactData.map((val, i) => {
          return (
            <div
              key={i}
              className="  h-72 flex justify-center items-center flex-col gap-4 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-[#3e64ff] flex justify-center items-center">
                <h1 className="text-4xl text-white">{val.icons}</h1>
              </div>
              <h1 className="font-bold text-xl">{val.name}</h1>
              <p className="text-sm text-gray-300">{val.details}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6 ">
        <div>
          <h1 className="text-center text-sm text-[#3e64ff] py-4 font-bold">
            Get In Touch
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113060.35262374498!2d83.3501334522506!3d27.682190594973047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996864275d9755f%3A0x2b1e92d89d4bb3ae!2sButwal!5e0!3m2!1sen!2snp!4v1684311792160!5m2!1sen!2snp"
            className="w-full"
            height="450"
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Formik
          className="p-4"
          initialValues={{
            name: "",
            email: "",
            number: "",
          }}
          validationSchema={schema}
          onSubmit={(Values, { resetForm }) => {
            console.log(Values);
            resetForm();
          }}
        >
          {({ handleSubmit }) => {
            return (
              <Form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-6 w-full mx-auto  p-6  bg-[#d8e0ff]  "
              >
                <div className="w-full  flex flex-col gap-6 ">
                  <Field
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-200 rounded px-2 py-3 text-sm outline-none"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="name"
                    component={"div"}
                  />
                </div>

                <div className="w-full  flex flex-col gap-6 ">
                  <Field
                    name="email"
                    type="text"
                    placeholder="Your Email"
                    className="border border-gray-200 rounded px-2 py-3 text-sm outline-none"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="email"
                    component={"div"}
                  />
                </div>

                <div className="w-full  flex flex-col gap-6 ">
                  <Field
                    name="number"
                    type="text"
                    placeholder="Your Phone Number"
                    className="border border-gray-200 rounded px-2 py-3 text-sm outline-none"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="number"
                    component={"div"}
                  />
                </div>
                <div className="w-full full">
                  <textarea
                    className="w-full h-full text-sm "
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-1/2 p-2 mt-2 bg-blue-700 rounded text-white hover:to-blue-400"
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
