// src/pages/Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="px-4 py-10 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Feel free to reach out for more information or collaboration
          opportunities.
        </p>
        <div className="space-y-3 text-gray-800 dark:text-gray-200">
          <p>Email: contact@example.com</p>
          <p>Phone: +91 123 456 7890</p>
          <p>Location: Remote / India / Singapore</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
