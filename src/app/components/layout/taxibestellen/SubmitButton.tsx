import React from "react";
import ContactButton from "../../ui/ContactButton";

const SubmitButton = () => {
  return (
    <div className="flex justify-center w-[40vw] items-center text-center mx-auto">
      <ContactButton
        classname="bg-amber-500 w-full text-center justify-center transition rounded-lg px-10 py-3 text-white font-semibold"
        text="VERZENDEN"
      />
    </div>
  );
};

export default SubmitButton;
