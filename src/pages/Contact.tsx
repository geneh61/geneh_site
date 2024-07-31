import React from 'react';
import Navbar from "../components/navbar";

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Here's how you can contact me!</h1>
        <p className="text-lg">This is the contact page of my portfolio.</p>
      </div>
    </div>
  );
}

export default Contact;