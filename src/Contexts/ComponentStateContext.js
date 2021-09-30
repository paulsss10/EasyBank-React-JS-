import React, { useState, createContext } from 'react';

export const ComponentStateContext = createContext();

export const ComponentStateProvider = (props) => {
    const [overlayOpenState, setOverlayOpenState] = useState(false);

    return (
      <ComponentStateContext.Provider value={[overlayOpenState, setOverlayOpenState]}>
          {props.children}
      </ComponentStateContext.Provider>
    )
}
