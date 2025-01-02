import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import "./UserModule.css";

const UserModule = () => {
  const { companies, communications, logCommunication } = useAppContext();
  const [newCommunication, setNewCommunication] = useState({
    companyId: "",
    type: "",
    date: "",
    notes: "",
  });

  const handleLogCommunication = () => {
    logCommunication(newCommunication);
    setNewCommunication({ companyId: "", type: "", date: "", notes: "" });
  };

  return (
    <div className="user-module">
      <h2 className="title">User Module</h2>

      <table className="company-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Communication</th>
            <th>Next Scheduled</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>
                {
                  communications
                    .filter((c) => c.companyId === company.id)
                    .slice(-1)[0]?.type || "No Communication"
                }
              </td>
              <td>{company.periodicity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="log-form">
        <h3>Log a Communication</h3>
        <select
          value={newCommunication.companyId}
          onChange={(e) =>
            setNewCommunication({ ...newCommunication, companyId: e.target.value })
          }
        >
          <option value="">Select Company</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Type (e.g., Email, Call)"
          value={newCommunication.type}
          onChange={(e) => setNewCommunication({ ...newCommunication, type: e.target.value })}
        />
        <input
          type="date"
          value={newCommunication.date}
          onChange={(e) => setNewCommunication({ ...newCommunication, date: e.target.value })}
        />
        <textarea
          placeholder="Notes about the communication"
          value={newCommunication.notes}
          onChange={(e) => setNewCommunication({ ...newCommunication, notes: e.target.value })}
        />
        <button className="submit-button" onClick={handleLogCommunication}>
          Log Communication
        </button>
      </div>
    </div>
  );
};

export default UserModule;
