"use client";

import React, { useState, FormEvent } from 'react';

// --- Data Types ---

// Shared fields for both directions
interface UserDetails {
  name: string;
  phone: string;
  email: string;
  date: string;
}

// Fields for "Brengen Naar Schiphol" (Drop-off at Schiphol)
interface DropOffDetails {
  pickupTime: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  extraAddressDetail: string;
  flightNumber: string;
  vehicleType: string;
  numAdults: string;
  numChildren: string;
  babySeatsRequired: string;
}

// Fields for "Ophaal Van Uit Schiphol" (Pick-up from Schiphol)
interface PickUpDetails {
  pickupTime: string;
  flightNumber: string;
  airline: string;
  extraWaiting: string;
  luggageType: string;
  numPeople: string;
}

// Fields for "Bestemmingen" (Destinations for Pick-Up)
interface PickUpDestination {
    addressName: string;
    street: string;
    houseNumber: string;
    postalCode: string;
    city: string;
    remarksChildrenLuggage: string;
}

// Full Form State
interface FullFormData {
  direction: 'dropOff' | 'pickUp';
  user: UserDetails;
  dropOff: DropOffDetails;
  pickUp: PickUpDetails;
  pickUpDestination: PickUpDestination;
  paymentMethod: 'pinnen' | 'contant' | 'ideal';
}

// --- Initial State ---

const initialUserDetails: UserDetails = {
    name: '', phone: '', email: '', date: '',
};

const initialDropOffDetails: DropOffDetails = {
    pickupTime: '', street: '', houseNumber: '', postalCode: '', city: '',
    extraAddressDetail: '', flightNumber: '', vehicleType: '', numAdults: '',
    numChildren: '', babySeatsRequired: '',
};

const initialPickUpDetails: PickUpDetails = {
    pickupTime: '', flightNumber: '', airline: '', extraWaiting: '',
    luggageType: '', numPeople: '',
};

const initialPickUpDestination: PickUpDestination = {
    addressName: '', street: '', houseNumber: '', postalCode: '', city: '',
    remarksChildrenLuggage: '',
};


// --- Component ---

const AirportserviceForm: React.FC = () => {
  const [formData, setFormData] = useState<FullFormData>({
    direction: 'dropOff', // Default to Drop-off
    user: initialUserDetails,
    dropOff: initialDropOffDetails,
    pickUp: initialPickUpDetails,
    pickUpDestination: initialPickUpDestination,
    paymentMethod: 'pinnen',
  });
  
  // State for showing success message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generic handler for nested state
  const handleNestedChange = (
    section: keyof Omit<FullFormData, 'direction' | 'paymentMethod'>,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  // Handler for direct state changes (direction, payment)
  const handleDirectChange = (name: keyof FullFormData, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submission handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Final Booking Data:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5 seconds
  };

  // Reusable Input Field Component
  const FormField: React.FC<{
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    section: keyof Omit<FullFormData, 'direction' | 'paymentMethod'>;
    isTextArea?: boolean;
    rows?: number;
    value: string;
  }> = ({
    label, name, type = 'text', required = false, section, isTextArea = false, rows = 3, value
  }) => (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => handleNestedChange(section, e)}
          rows={rows}
          required={required}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out text-gray-800 resize-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => handleNestedChange(section, e)}
          required={required}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out text-gray-800 appearance-none"
        />
      )}
    </div>
  );

  // --- Rendering Drop-off Fields ---
  const DropOffForm = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Brengen Naar Schiphol</h2>

      {/* 1. Customer Details (Shared) */}
      <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Klantgegevens</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField label="Uw naam" name="name" section="user" required value={formData.user.name} />
        <FormField label="Emailadres" name="email" section="user" type="email" required value={formData.user.email} />
        <FormField label="Telefoonnummer" name="phone" section="user" type="tel" required value={formData.user.phone} />
        <FormField label="Ophaal Datum" name="date" section="user" type="date" required value={formData.user.date} />
        <FormField label="Ophaal Tijdstip" name="pickupTime" section="dropOff" type="time" required value={formData.dropOff.pickupTime} />
      </div>

      {/* 2. Pickup Address */}
      <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4 mt-8">Ophaal Adres</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Straat" name="street" section="dropOff" required value={formData.dropOff.street} />
        <FormField label="Huisnummer/Toev" name="houseNumber" section="dropOff" required value={formData.dropOff.houseNumber} />
        <FormField label="Postcode" name="postalCode" section="dropOff" required value={formData.dropOff.postalCode} />
        <FormField label="Stad" name="city" section="dropOff" required value={formData.dropOff.city} />
        <div className="md:col-span-2">
            <FormField label="Extra Adres Toelichting/Detailing" name="extraAddressDetail" section="dropOff" value={formData.dropOff.extraAddressDetail} />
        </div>
      </div>
      
      {/* 3. Destination (Schiphol) */}
      <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4 mt-8">Bestemming</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField label="Vluchtnummer" name="flightNumber" section="dropOff" value={formData.dropOff.flightNumber} />
        <FormField label="Voertuig type voorkeur" name="vehicleType" section="dropOff" value={formData.dropOff.vehicleType} />
        <FormField label="Aantal Personen (Volwassenen)" name="numAdults" section="dropOff" type="number" required value={formData.dropOff.numAdults} />
        <FormField label="Aantal Kinderen" name="numChildren" section="dropOff" type="number" value={formData.dropOff.numChildren} />
        <FormField label="Kinderzitjes Tegen Betaling" name="babySeatsRequired" section="dropOff" value={formData.dropOff.babySeatsRequired} />
      </div>
    </div>
  );

  // --- Rendering Pick-up Fields ---
  const PickUpForm = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Ophaal Van Uit Schiphol</h2>
      
      {/* 1. Customer Details (Shared) */}
      <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Klantgegevens</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField label="Uw naam" name="name" section="user" required value={formData.user.name} />
        <FormField label="Emailadres" name="email" section="user" type="email" required value={formData.user.email} />
        <FormField label="Telefoonnummer" name="phone" section="user" type="tel" required value={formData.user.phone} />
        <FormField label="Ophaal Datum" name="date" section="user" type="date" required value={formData.user.date} />
        <FormField label="Ophaal Tijdstip" name="pickupTime" section="pickUp" type="time" required value={formData.pickUp.pickupTime} />
      </div>

      {/* 2. Pick-up Details at Schiphol */}
      <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4 mt-8">Ophaal Details Schiphol</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField label="Vluchtnummer" name="flightNumber" section="pickUp" value={formData.pickUp.flightNumber} />
        <FormField label="Vliegmaatschappij" name="airline" section="pickUp" value={formData.pickUp.airline} />
        <FormField label="Extra wachttijd" name="extraWaiting" section="pickUp" value={formData.pickUp.extraWaiting} />
        <FormField label="Vluchtnummer (Herhaling)" name="flightNumber" section="pickUp" value={formData.pickUp.flightNumber} />
        <FormField label="Aantal personen" name="numPeople" section="pickUp" type="number" required value={formData.pickUp.numPeople} />
      </div>

      {/* 3. Destination Address (From Schiphol) */}
      <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4 mt-8">Bestemmingen</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField label="Adresnaam (Bijv. Thuis, Werk)" name="addressName" section="pickUpDestination" required value={formData.pickUpDestination.addressName} />
        <FormField label="Straat" name="street" section="pickUpDestination" required value={formData.pickUpDestination.street} />
        <FormField label="Huisnummer" name="houseNumber" section="pickUpDestination" required value={formData.pickUpDestination.houseNumber} />
        <FormField label="Postcode" name="postalCode" section="pickUpDestination" required value={formData.pickUpDestination.postalCode} />
        <FormField label="Stad" name="city" section="pickUpDestination" required value={formData.pickUpDestination.city} />
        <div className="md:col-span-3">
            <FormField label="Bijdragen/Kinderzitjes/Tegen Betaling" name="remarksChildrenLuggage" section="pickUpDestination" isTextArea rows={2} value={formData.pickUpDestination.remarksChildrenLuggage} />
        </div>
      </div>
    </div>
  );
  
  // --- Main Render ---
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-5xl bg-white p-8 sm:p-12 shadow-2xl rounded-xl border-4 border-orange-500">
        
        {/* Success Message */}
        {isSubmitted && (
            <div className="p-4 mb-6 text-sm text-green-700 bg-green-100 rounded-lg text-center font-medium" role="alert">
                Boeking succesvol verzonden!
            </div>
        )}

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 border-b border-gray-200">
          <button
            type="button"
            onClick={() => handleDirectChange('direction', 'dropOff')}
            className={`py-3 px-6 text-lg font-semibold transition duration-200 ease-in-out ${
              formData.direction === 'dropOff'
                ? 'text-orange-600 border-b-4 border-orange-600'
                : 'text-gray-500 hover:text-orange-500'
            }`}
          >
            Brengen Naar Schiphol
          </button>
          <button
            type="button"
            onClick={() => handleDirectChange('direction', 'pickUp')}
            className={`py-3 px-6 text-lg font-semibold transition duration-200 ease-in-out ${
              formData.direction === 'pickUp'
                ? 'text-orange-600 border-b-4 border-orange-600'
                : 'text-gray-500 hover:text-orange-500'
            }`}
          >
            Ophaal Van Uit Schiphol
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Conditional Form Rendering */}
          {formData.direction === 'dropOff' ? <DropOffForm /> : <PickUpForm />}

          {/* Payment Method Section (Always visible) */}
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mt-12 mb-6">Betalingen Methode</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {['Pinnen', 'Contant', 'iDeal'].map((method) => (
              <label key={method} className="flex items-center space-x-2 cursor-pointer p-3 bg-white rounded-lg border-2 border-gray-200 hover:border-orange-500 transition duration-150">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.toLowerCase()}
                  checked={formData.paymentMethod === method.toLowerCase()}
                  onChange={(e) => handleDirectChange('paymentMethod', e.target.value)}
                  className="form-radio text-orange-500 h-5 w-5 border-gray-300 focus:ring-orange-500"
                />
                <span className="text-gray-700 font-medium">{method}</span>
              </label>
            ))}
          </div>


          {/* Submission Button */}
          <div className="flex justify-center pt-10">
            <button
              type="submit"
              className="w-full md:w-1/3 px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-orange-600 transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              VERZENDEN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AirportserviceForm;