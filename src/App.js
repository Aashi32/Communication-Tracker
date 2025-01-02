import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminModule from "./components/AdminModule/AdminModule";
import UserModule from "./components/UserModule/UserModule";
import NotificationPanel from "./components/Notification/NotificationPanel";
import CalendarView from "./components/Calendar/CalendarView";
import AnalyticsModule from "./components/AnalyticsModule/AnalyticsModule"
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import { AppProvider } from "./context/AppContext";
import "./App.css";

const App = () => (
  <AppProvider>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<LandingPage />} />s
        <Route path="/admin" element={<AdminModule />} />
        <Route path="/user" element={<UserModule />} />
        <Route path="/notifications" element={<NotificationPanel />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/analytics" element={<AnalyticsModule/>} />
      </Routes>
    </Router>
  </AppProvider>
);

export default App;