import React, { createContext, useState, useContext } from "react";

const ImageToggleContext = createContext();

export const ImageToggleProvider = ({ children }) => {
  const [areImagesVisible, setAreImagesVisible] = useState(true);

  const toggleImages = () => {
    setAreImagesVisible(!areImagesVisible);
  };
  const resetImages = () => {
    setAreImagesVisible(true);
  };

  return (
    <ImageToggleContext.Provider
      value={{ areImagesVisible, toggleImages, resetImages }}
    >
      {children}
    </ImageToggleContext.Provider>
  );
};

export const useImageToggle = () => useContext(ImageToggleContext);
