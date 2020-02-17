import React, { useState, createContext } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
     const [user, setUser] = useState(false);

     return (
          <EventContext.Provider value={[user, setUser]}>
               {children}
          </EventContext.Provider>
     );
};

export default EventProvider;
