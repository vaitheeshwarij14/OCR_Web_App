import React, { createContext, useContext, useState } from 'react';

// Create the OCR context
const OCRContext = createContext();

// Custom hook to use the OCR context
export function useOCR() {
  return useContext(OCRContext);
}

// OCRProvider component to wrap around the part of the app that needs access to OCR state
export const OCRProvider = ({ children }) => {
  const [ocrResult, setOcrResult] = useState('');

  // The value object needs to be inside the component so it can access the state
  const value = {
    ocrResult,
    setOcrResult,
  };

  return (
    <OCRContext.Provider value={value}>
      {children}
    </OCRContext.Provider>
  );
};
