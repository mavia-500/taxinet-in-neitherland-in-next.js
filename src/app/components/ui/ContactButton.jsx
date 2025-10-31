"use client";
import React from "react";  

const ContactButton   = ({ text, classname = "", icon,icon2 }) => {
    return (    
        <button className={`flex items-center gap-2  hover:bg-yellow-500font-semibold px-5 py-2 rounded-2xl shadow-md hover:shadow-lg ${classname}`}>
          {icon && <span >{icon}</span>}   {text} {icon2 && <span >{icon2}</span>}
        </button>
    );
};

export default ContactButton;   