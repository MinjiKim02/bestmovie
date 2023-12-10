import React from "react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="contact-container p-8 mx-auto border border-gray-300 rounded bg-white">
      <h1 className="text-3xl font-bold text-blue-500">Contact Us</h1>
      <p className="mt-4">
        Welcome to our contact page! You can reach us at{" "}
        <a href="mailto:example@email.com" className="text-blue-500 font-semibold">
          example@email.com
        </a>
        .
      </p>
      <div className="block mt-4 text-blue-500 font-semibold">
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default ContactPage;
