import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import "./AdminModule.css";

const AdminModule = () => {
  const { addCompany } = useAppContext();
  const [newCompany, setNewCompany] = useState({
    name: "",
    location: "",
    linkedIn: "",
    emails: "",
    phoneNumbers: "",
    periodicity: "",
  });

  const handleAddCompany = () => {
    addCompany({
      ...newCompany,
      emails: newCompany.emails.split(","),
      phoneNumbers: newCompany.phoneNumbers.split(","),
    });
    setNewCompany({
      name: "",
      location: "",
      linkedIn: "",
      emails: "",
      phoneNumbers: "",
      periodicity: "",
    });
  };

  return (
    <div className="admin-module">
      <h2 className="title">Admin Module</h2>
      <div className="form-container">
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            placeholder="Enter company name"
            value={newCompany.name}
            onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter location"
            value={newCompany.location}
            onChange={(e) => setNewCompany({ ...newCompany, location: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>LinkedIn Profile</label>
          <input
            type="text"
            placeholder="Enter LinkedIn profile URL"
            value={newCompany.linkedIn}
            onChange={(e) => setNewCompany({ ...newCompany, linkedIn: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Emails (comma-separated)</label>
          <input
            type="text"
            placeholder="Enter email addresses"
            value={newCompany.emails}
            onChange={(e) => setNewCompany({ ...newCompany, emails: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Phone Numbers (comma-separated)</label>
          <input
            type="text"
            placeholder="Enter phone numbers"
            value={newCompany.phoneNumbers}
            onChange={(e) => setNewCompany({ ...newCompany, phoneNumbers: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Periodicity</label>
          <input
            type="text"
            placeholder="Enter communication periodicity"
            value={newCompany.periodicity}
            onChange={(e) => setNewCompany({ ...newCompany, periodicity: e.target.value })}
          />
        </div>
        <button className="submit-button" onClick={handleAddCompany}>
          Add Company
        </button>
      </div>
    </div>
  );
};

export default AdminModule;
