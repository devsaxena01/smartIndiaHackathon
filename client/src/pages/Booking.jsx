import React, { useState } from "react";

const Booking = () => {
  const [experienceType, setExperienceType] = useState("Guided Tour");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
        {/* Left Form */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Choose Your Experience</h2>
          <p className="text-gray-400 mb-4">
            Select your preferred tour, event, or retreat and provide your details.
          </p>

          {/* Experience Type */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Experience Type</h3>
            <div className="space-y-2">
              {["Guided Tour", "Cultural Event", "Custom Retreat"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={experienceType === type}
                    onChange={() => setExperienceType(type)}
                    className="text-orange-500 focus:ring-orange-500"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Select Tour/Event */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Tour/Event</h3>
            <div className="grid grid-cols-2 gap-4">
              <select className="p-3 rounded bg-gray-800 border border-gray-700">
                <option>Rumtek Monastery Guided Tour (₹ 2500)</option>
              </select>
              <input
                type="date"
                className="p-3 rounded bg-gray-800 border border-gray-700"
              />
            </div>
            <input
              type="number"
              placeholder="Number of Participants"
              className="p-3 rounded bg-gray-800 border border-gray-700 w-full mt-4"
              defaultValue={2}
            />
          </div>

          {/* Your Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Your Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded bg-gray-800 border border-gray-700"
                defaultValue="John Doe"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 rounded bg-gray-800 border border-gray-700"
                defaultValue="john.doe@example.com"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 rounded bg-gray-800 border border-gray-700"
                defaultValue="+91 12345 67890"
              />
              <input
                type="text"
                placeholder="Country/Region"
                className="p-3 rounded bg-gray-800 border border-gray-700"
                defaultValue="India"
              />
            </div>
            <textarea
              placeholder="Special Requests/Notes"
              className="p-3 rounded bg-gray-800 border border-gray-700 w-full mt-4"
            />
          </div>

          {/* Optional Services */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Optional Services</h3>
            <label className="flex items-center space-x-2 mb-3">
              <input type="checkbox" className="text-orange-500" />
              <span>Include local transport (extra charges may apply)</span>
            </label>
            <select className="p-3 rounded bg-gray-800 border border-gray-700 w-full">
              <option>Select accommodation type</option>
            </select>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Booking Summary */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Rumtek Monastery Guided Tour</span>
                <span>₹ 2500</span>
              </li>
              <li className="flex justify-between">
                <span>Participants</span>
                <span>2</span>
              </li>
              <li className="flex justify-between">
                <span>Transport</span>
                <span>₹ 500</span>
              </li>
              <li className="flex justify-between">
                <span>Accommodation</span>
                <span>₹ 1500</span>
              </li>
              <li className="flex justify-between font-semibold text-lg border-t border-gray-700 pt-3">
                <span>Total Amount</span>
                <span>₹ 4500</span>
              </li>
            </ul>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
            <div className="space-y-2 mb-4">
              {["Credit Card", "UPI", "Bank Transfer"].map((method) => (
                <label key={method} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                    className="text-orange-500"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>

            {/* Card Info */}
            {paymentMethod === "Credit Card" && (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="p-3 rounded bg-gray-800 border border-gray-700 w-full"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="p-3 rounded bg-gray-800 border border-gray-700"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="p-3 rounded bg-gray-800 border border-gray-700"
                  />
                </div>
              </div>
            )}

            <button className="w-full bg-orange-600 hover:bg-orange-700 transition text-white font-semibold py-3 rounded mt-6">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
