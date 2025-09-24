import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Wallet, Plane, Sparkles, Eye } from "lucide-react";

// Mock data for budget and travellers options
const SelectBudgetOptions = [
  { icon: "💰", title: "Cheap", desc: "Stay conscious of costs", value: "cheap" },
  { icon: "💳", title: "Moderate", desc: "Keep cost on the average side", value: "moderate" },
  { icon: "💎", title: "Luxury", desc: "Don't worry about cost", value: "luxury" }
];

const SelectTravelsList = [
  { icon: "✈️", title: "Just Me", desc: "A sole traveller in exploration", people: "1 Person" },
  { icon: "🥂", title: "A Couple", desc: "Two travellers in tandem", people: "2 People" },
  { icon: "👨‍👩‍👧‍👦", title: "Family", desc: "A group of fun loving adventurers", people: "3 to 5 People" },
  { icon: "👫", title: "Friends", desc: "A bunch of thrill-seekers", people: "5 to 10 People" }
];

// Sikkim Monasteries data
const SikkimMonasteries = [
  'Rumtek Monastery, Gangtok',
  'Pemayangtse Monastery, Pelling',
  'Enchey Monastery, Gangtok',
  'Tashiding Monastery, West Sikkim',
  'Dubdi Monastery, Yuksom',
  'Ralang Monastery, Ravangla',
  'Phensang Monastery, Gangtok',
  'Sang Monastery, Sikkim'
];

function CreateTrip() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [AiTripDone, setAiTripDone] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const steps = [
    { id: 'name', title: 'Tell us your name', icon: <Users className="w-5 h-5" /> },
    { id: 'destination', title: 'Choose destination', icon: <MapPin className="w-5 h-5" /> },
    { id: 'days', title: 'Trip duration', icon: <Calendar className="w-5 h-5" /> },
    { id: 'budget', title: 'Select budget', icon: <Wallet className="w-5 h-5" /> },
    { id: 'travellers', title: 'Who\'s coming?', icon: <Users className="w-5 h-5" /> }
  ];

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const OnGenerateTrip = () => {
    setProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setProcessing(false);
      setAiTripDone(true);
    }, 3000);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.Name;
      case 1: return formData.Location;
      case 2: return formData.Days && formData.Days > 0 && formData.Days < 8;
      case 3: return formData.Budget;
      case 4: return formData.Travellers;
      default: return false;
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8 space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-500
            ${index <= currentStep 
              ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white shadow-lg transform scale-110' 
              : 'bg-gray-700 text-gray-400'}
          `}>
            {index < currentStep ? '✓' : step.icon}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-8 h-1 mx-2 transition-all duration-500 ${
              index < currentStep ? 'bg-gradient-to-r from-emerald-400 to-cyan-400' : 'bg-gray-700'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                What should we call you?
              </h2>
              <p className="text-gray-400 text-lg">Let's personalize your journey</p>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm text-white text-xl py-4 px-6 rounded-2xl border-2 border-gray-700 focus:border-emerald-400 focus:outline-none transition-all duration-300 shadow-xl"
                onChange={(e) => handleInputChange('Name', e.target.value)}
                value={formData.Name || ''}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-xl -z-10" />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Choose Your Sacred Destination
              </h2>
              <p className="text-gray-400 text-lg">Discover the spiritual monasteries of Sikkim</p>
            </div>
            <div className="relative">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 text-xl w-5 h-5" />
                <input
                  type="text"
                  value={query}
                  placeholder="Search for a monastery..."
                  className="w-full max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm text-white text-xl py-4 pl-12 pr-6 rounded-2xl border-2 border-gray-700 focus:border-emerald-400 focus:outline-none transition-all duration-300 shadow-xl"
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-xl -z-10" />
              </div>
              
              {showSuggestions && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-md bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl z-50">
                  {SikkimMonasteries.filter(monastery => 
                    query === '' || monastery.toLowerCase().includes(query.toLowerCase())
                  ).map((monastery, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 hover:bg-emerald-400/10 cursor-pointer transition-all duration-200 border-b border-gray-700 last:border-b-0"
                      onClick={() => {
                        setQuery(monastery);
                        handleInputChange('Location', monastery);
                        setShowSuggestions(false);
                      }}
                    >
                      <span className="text-2xl">🏛️</span>
                      <div className="text-left">
                        <div className="text-white font-medium">{monastery.split(', ')[0]}</div>
                        <div className="text-emerald-400 text-sm">{monastery.split(', ')[1]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                How long is your adventure?
              </h2>
              <p className="text-gray-400 text-lg">Plan the perfect duration</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => {
                  const newDays = Math.max(1, (formData.Days || 1) - 1);
                  handleInputChange('Days', newDays);
                }}
                className="w-12 h-12 bg-gray-700 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl transition-all duration-200 hover:scale-110"
              >
                -
              </button>
              <div className="relative">
                <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 p-1 rounded-2xl">
                  <div className="bg-gray-900 px-8 py-4 rounded-xl">
                    <span className="text-4xl font-bold text-white">{formData.Days || 1}</span>
                    <span className="text-emerald-400 ml-2">days</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  const newDays = Math.min(7, (formData.Days || 1) + 1);
                  handleInputChange('Days', newDays);
                }}
                className="w-12 h-12 bg-gray-700 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl transition-all duration-200 hover:scale-110"
              >
                +
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                What's your budget?
              </h2>
              <p className="text-gray-400 text-lg">Choose what works for you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange('Budget', item.title)}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    formData.Budget === item.title
                      ? 'bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border-emerald-400 shadow-2xl'
                      : 'bg-gray-800/50 border-gray-700 hover:border-emerald-400/50'
                  }`}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Who's joining the adventure?
              </h2>
              <p className="text-gray-400 text-lg">Select your travel companions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {SelectTravelsList.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange('Travellers', item.people)}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    formData.Travellers === item.people
                      ? 'bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border-emerald-400 shadow-2xl'
                      : 'bg-gray-800/50 border-gray-700 hover:border-emerald-400/50'
                  }`}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-2">{item.desc}</p>
                  <p className="text-emerald-400 font-semibold">{item.people}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Plan Your Perfect Trip
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tell us your preferences and we'll craft an amazing journey just for you
          </p>
        </div>

        {/* Step Indicator */}
        <StepIndicator />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800 shadow-2xl p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentStep === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 text-white hover:bg-gray-600 transform hover:scale-105'
              }`}
            >
              Previous
            </button>

            <div className="flex space-x-4">
              {currentStep === steps.length - 1 ? (
                <>
                  <button
                    onClick={OnGenerateTrip}
                    disabled={!canProceed() || processing}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      canProceed() && !processing
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 transform hover:scale-105 shadow-lg'
                        : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {processing ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                        <span>Creating Magic...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        <span>Generate Trip</span>
                      </>
                    )}
                  </button>
                  {AiTripDone && (
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                      <Eye className="w-5 h-5" />
                      <span>Review Trip</span>
                    </button>
                  )}
                </>
              ) : (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    canProceed()
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 transform hover:scale-105 shadow-lg'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>Continue</span>
                  <Plane className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Trip Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-gray-400">Name: <span className="text-emerald-400">{formData.Name || 'Not set'}</span></div>
              <div className="text-gray-400">Destination: <span className="text-emerald-400">{formData.Location || 'Not set'}</span></div>
              <div className="text-gray-400">Duration: <span className="text-emerald-400">{formData.Days ? `${formData.Days} days` : 'Not set'}</span></div>
              <div className="text-gray-400">Budget: <span className="text-emerald-400">{formData.Budget || 'Not set'}</span></div>
              <div className="text-gray-400 col-span-2">Travellers: <span className="text-emerald-400">{formData.Travellers || 'Not set'}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;