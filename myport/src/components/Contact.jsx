import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/1b9c99cc-f2d5-4dfe-9c3f-72b4c1d5d0c2"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {/* Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in */}
          </p>
        </div>
        <input
          className="bg-gray-200 p-3 mb-4 rounded-md"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-gray-200 p-3 mb-4 rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-gray-200 p-3 mb-4 rounded-md"
          name="message"
          rows="6"
          placeholder="Message"
        ></textarea>
        <button className="bg-pink-600 text-white border-2 hover:bg-pink-700 px-4 py-3 my-4 rounded-md">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
