import React from "react";

interface ContactButtonProps {
  text: string;
  classname?: string;
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
}

const ContactButton: React.FC<ContactButtonProps> = ({ text, classname = "", icon, icon2 }) => {
  return (
    <button
      className={`flex items-center gap-2 font-semibold px-5 py-2 rounded-2xl shadow-md hover:shadow-lg ${classname}`}
    >
      {icon && <span>{icon}</span>} {text} {icon2 && <span>{icon2}</span>}
    </button>
  );
};

export default ContactButton;
