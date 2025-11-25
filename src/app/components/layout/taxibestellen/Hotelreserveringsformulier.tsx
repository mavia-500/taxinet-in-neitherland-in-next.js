"use client";
import React, { useState, FormEvent } from "react";

// Define the shape of the form data
interface FormData {
  customerName: string;
  hotelName: string;
  pickupDate: string;
  roomNumber: string;
  time: string;
  remark: string;
}

// Define the main component
const Hotelreserveringsformulier: React.FC = () => {
  // Initialize form state
  const [formData, setFormData] = useState<FormData>({
    customerName: "",
    hotelName: "",
    pickupDate: "",
    roomNumber: "",
    time: "",
    remark: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // In a real application, you would send this data to an API endpoint here.
    alert("Form submitted successfully! Check the console for data.");
  };

  // Reusable Input Field Component
  const FormInput: React.FC<{
    label: string;
    name: keyof FormData;
    type?: string;
    placeholder?: string;
    required?: boolean;
  }> = ({ label, name, type = "text", placeholder = "", required = true }) => (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name] as string} // Type assertion safe here because it's only used for inputs
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out text-gray-800"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white p-8 sm:p-12 shadow-2xl rounded-xl border-4 border-orange-500">
        {/* Header Title */}
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
          Gegevens Klant(Hotel)
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Row 1 */}
            <FormInput label="Naam Klant" name="customerName" />
            <FormInput label="Naam Hotel" name="hotelName" />

            {/* Row 2 */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="pickupDate"
                className="text-sm font-semibold text-gray-800"
              >
                Ophaal Datum <span className="text-red-500">*</span>
              </label>
              {/* Using 'date' type for the calendar picker */}
              <input
                id="pickupDate"
                name="pickupDate"
                type="date"
                value={formData.pickupDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out text-gray-800 appearance-none"
              />
            </div>
            <FormInput label="Kamernummer" name="roomNumber" />

            {/* Row 3 */}
            <FormInput
              label="Tijdstip"
              name="time"
              type="time"
              placeholder="00:00"
            />

            {/* Remark/Note - takes up the second column space in this row */}
            <div className="md:row-span-2 flex flex-col space-y-2">
              <label
                htmlFor="remark"
                className="text-sm font-semibold text-gray-800"
              >
                Opmerking (Optioneel)
              </label>
              <textarea
                id="remark"
                name="remark"
                value={formData.remark}
                onChange={handleChange}
                rows={4} // Increased rows for better visual balance
                required={false}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out text-gray-800 resize-none"
                placeholder="Voer hier eventuele opmerkingen in..."
              />
            </div>

            {/* The time field needs to be followed by an empty div on desktop to align the Remark field */}
            <div className="hidden md:block"></div>
          </div>

          {/* Submission Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="w-full md:w-1/2 lg:w-1/3 px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-orange-600 transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              VERZENDEN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export the component as the default export (standard for Next.js pages/components)
export default Hotelreserveringsformulier;
