import { useState } from "react";

const Dialog = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen((prevFullScreen) => !prevFullScreen);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
      
      {/* Dialog Container */}
      <div className="relative bg-dialogBgColor p-8 rounded-lg shadow-lg text-white">
        {/* Close Button */}
        <button
          className="absolute top-0 right-0 p-2 text-white"
          onClick={toggleFullScreen}
        >
          {/* Cross Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#324864"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        {/* Content */}
        <div className="p-4">
          <p className="text-lg mb-4">Would you like to enter fullscreen mode?</p>
          {/* Fullscreen Button */}
          <button
            className="bg-transparent border border-white text-white rounded-lg py-2 px-4"
            onClick={toggleFullScreen}
          >
            Fullscreen
          </button>
        </div>
        
        {/* Animated Line */}
        <div className="absolute top-0 left-0 w-20 h-3 bg-white">
          <div className="absolute top-0 left-0 h-full bg-white animate-moveLine"></div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
