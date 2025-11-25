"use client";
import React, { useState, FormEvent } from 'react';

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  pickupCity: string;
  pickupStreet: string;
  destinationCity: string;
  destinationStreet: string;
  subject: string;
  rideDate: string;
  pickupTime: string;
  numPeople: string;
  remark: string;
  preferredVehicle: string;
}

// Define the main component
const TrouwvervoerForm: React.FC = () => {
  // Initialize form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    pickupCity: '',
    pickupStreet: '',
    destinationCity: '',
    destinationStreet: '',
    subject: '',
    rideDate: '',
    pickupTime: '',
    numPeople: '',
    remark: '',
    preferredVehicle: '',
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Wedding Transport Form data submitted:', formData);
    // In a real application, you would send this data to an API endpoint here.
    alert('Formulier voor Trouw Vervoer is succesvol ingediend!');
  };

  // Reusable Input Field Component
  // Note: Added a 'rows' prop for the textarea type
  const FormField: React.FC<{
    label: string;
    name: keyof FormData;
    type?: string;
    placeholder?: string;
    required?: boolean;
    isTextArea?: boolean;
    rows?: number;
    className?: string;
  }> = ({
    label,
    name,
    type = 'text',
    placeholder = '',
    required = false,
    isTextArea = false,
    rows = 3,
    className = '',
  }) => (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label htmlFor={name} className="text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          rows={rows}
          required={required}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out text-gray-800 resize-none"
          placeholder={placeholder}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out text-gray-800 appearance-none"
        />
      )}
    </div>
  );

  // Helper function to create a section header
  const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-2xl font-bold text-center text-gray-900 mt-10 mb-6 border-b-2 border-gray-200 pb-2">
      {title}
    </h2>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white p-8 sm:p-12 shadow-2xl rounded-xl border-4 border-orange-500">
        
        {/* Header Title */}
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Gegevens Klant (Trouw Vervoer)
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* 1. Customer Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <FormField label="Uw naam" name="name" required />
            <FormField label="Emailadres" name="email" type="email" required />
            <FormField label="Telefoonnummer" name="phone" type="tel" className="md:col-span-1" required />
          </div>

          {/* 2. Pickup Address Section */}
          <SectionHeader title="Ophaal Adres" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <FormField label="Stad" name="pickupCity" required />
            <FormField label="Straat / Huisnummer" name="pickupStreet" required />
          </div>

          {/* 3. Destination Section */}
          <SectionHeader title="Bestemming" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <FormField label="Stad bestemming" name="destinationCity" />
            <FormField label="Straat / Huisnummer bestemming" name="destinationStreet" />
          </div>

          {/* 4. Transport Characteristics Section */}
          <SectionHeader title="Vervoers kenmerken" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Left Column Fields */}
            <div className="space-y-6">
                <FormField label="Onderwerp" name="subject" />
                <FormField label="Gewenste ophaaltijd" name="pickupTime" type="time" placeholder="00:00" />
            </div>
            {/* Right Column Fields */}
            <div className="space-y-6">
                <FormField label="Datum van de rit" name="rideDate" type="date" />
                <FormField label="Aantal personen" name="numPeople" type="number" placeholder="1" />
            </div>

            {/* Bottom Row - Remarks (Left, larger) and Preferred Vehicle (Right, smaller) */}
            <FormField 
                label="Opmerkingen" 
                name="remark" 
                isTextArea 
                rows={5} 
                className="md:col-span-1" 
                placeholder="Eventuele speciale wensen of details..."
            />
            <FormField label="Voorkeur voertuig" name="preferredVehicle" className="md:col-span-1 md:self-start" />
          </div>

          {/* Submission Button */}
          <div className="flex justify-center pt-8">
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

// Export the component as the default export
export default TrouwvervoerForm;