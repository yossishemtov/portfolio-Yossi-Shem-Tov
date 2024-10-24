import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-3xl md:text-4xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Contact Me
      </h1>
      <div className="flex flex-col items-center mt-8">
        <div className="flex items-center text-xl text-content mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 11.25v9a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75v-9m19.5 0L12 3 2.25 11.25"
            />
          </svg>
          <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
            {email}
          </a>
        </div>
        <div className="flex items-center text-xl text-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h19.5v14.25H2.25V3zm18 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-15-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
            />
          </svg>
          <a href={`tel:${phone}`} className="text-blue-500 hover:underline">
            {phone}
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;
