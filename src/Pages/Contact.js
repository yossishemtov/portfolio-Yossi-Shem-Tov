import React from "react";
import { contactDetails } from "../Details";
import resumeIcon from "../assets/resume.svg"; 

function Contact() {
  const { email, phone, resume } = contactDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section className="bg-gray-800 dark:bg-gray-900 p-10 rounded-xl shadow-lg max-w-xl mx-auto text-center text-white">
        <h1 className="text-4xl font-extrabold mb-6">Contact Me</h1>
        <p className="text-content py-4 lg:max-w-3xl mx-auto text-lg mb-8 text-gray-300">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex flex-col space-y-6 items-center">
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-xl">Email:</span>
            <a href={`mailto:${email}`} className="text-blue-400 underline text-xl hover:text-blue-300 transition duration-200">
              {email}
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <span className="font-semibold text-xl">Phone:</span>
            <a href={`tel:${phone}`} className="text-blue-400 underline text-xl hover:text-blue-300 transition duration-200">
              {phone}
            </a>
          </div>

          <div className="flex items-center space-x-4 mt-8">
            <img src={resumeIcon} alt="Resume Icon" className="h-12 w-12 filter invert" /> 
            <a
              href={resume}
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-400 underline text-xl font-semibold hover:text-blue-300 transition duration-200"
            >
              View My Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
