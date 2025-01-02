// import React, { createContext, useState, useContext } from "react";

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [companies, setCompanies] = useState([
//     {
//       id: 1,
//       name: "Company A",
//       location: "New York",
//       linkedIn: "https://linkedin.com/companyA",
//       emails: ["contact@companya.com"],
//       phoneNumbers: ["123-456-7890"],
//       periodicity: "2 weeks",
//     },
//   ]);
//   const [communications, setCommunications] = useState([]);

//   const addCompany = (company) => setCompanies([...companies, company]);

//   const logCommunication = (communication) => {
//     setCommunications([...communications, communication]);
//   };

//   return (
//     <AppContext.Provider
//       value={{ companies, communications, addCompany, logCommunication }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);

import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [companies, setCompanies] = useState([
    { id: "1", name: "TechCorp", location: "New York", linkedIn: "https://linkedin.com/techcorp", periodicity: "Weekly" },
    { id: "2", name: "BizSolutions", location: "San Francisco", linkedIn: "https://linkedin.com/bizsolutions", periodicity: "Monthly" },
  ]);

  const [communications, setCommunications] = useState([
    { companyId: "1", type: "Email", date: "2024-12-25", notes: "Follow-up on project update" },
    { companyId: "1", type: "Phone Call", date: "2024-12-20", notes: "Discussed contract renewal" },
    { companyId: "2", type: "LinkedIn Message", date: "2024-12-23", notes: "Initial contact made" },
    { companyId: "2", type: "LinkedIn Post", date: "2024-12-15", notes: "Marketing campaign launch" },
  ]);

  const addCompany = (company) => setCompanies([...companies, { id: Date.now().toString(), ...company }]);
  const logCommunication = (communication) =>
    setCommunications([...communications, { ...communication, date: new Date(communication.date).toISOString() }]);

  return (
    <AppContext.Provider value={{ companies, communications, addCompany, logCommunication }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export { AppProvider };
