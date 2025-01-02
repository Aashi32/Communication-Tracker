// import React, { useState } from "react";
// import { useAppContext } from "../../context/AppContext";
// import { Bar, Pie, Line } from "react-chartjs-2";
// import "chart.js/auto";
// import "./AnalyticsModule.css";

// const AnalyticsModule = () => {
//   const { communications } = useAppContext();
//   const [filter, setFilter] = useState({
//     companyId: "",
//     method: "",
//     dateRange: { start: "", end: "" },
//   });

//   // Helper functions for filtering
//   const filteredCommunications = communications.filter((comm) => {
//     const withinDateRange =
//       (!filter.dateRange.start || new Date(comm.date) >= new Date(filter.dateRange.start)) &&
//       (!filter.dateRange.end || new Date(comm.date) <= new Date(filter.dateRange.end));
//     const matchesCompany = !filter.companyId || comm.companyId === filter.companyId;
//     const matchesMethod = !filter.method || comm.type === filter.method;

//     return withinDateRange && matchesCompany && matchesMethod;
//   });

//   // Chart Data Preparation
//   const communicationMethods = ["LinkedIn Post", "LinkedIn Message", "Email", "Phone Call", "Other"];
//   const methodCounts = communicationMethods.map(
//     (method) => filteredCommunications.filter((comm) => comm.type === method).length
//   );

//   const overdueCommunications = communications.filter((c) => new Date(c.date) < new Date());
//   const overdueTrendData = overdueCommunications.reduce((acc, comm) => {
//     const date = new Date(comm.date).toDateString();
//     acc[date] = (acc[date] || 0) + 1;
//     return acc;
//   }, {});

//   const trendDates = Object.keys(overdueTrendData);
//   const trendCounts = Object.values(overdueTrendData);

//   return (
//     <div className="analytics-module">
//       <h2>Reporting and Analytics</h2>

//       {/* Filters */}
//       <div className="filters">
//         <select
//           value={filter.companyId}
//           onChange={(e) => setFilter({ ...filter, companyId: e.target.value })}
//         >
//           <option value="">Filter by Company</option>
//           {/* Replace with dynamic company list */}
//           <option value="1">Company 1</option>
//           <option value="2">Company 2</option>
//         </select>
//         <select
//           value={filter.method}
//           onChange={(e) => setFilter({ ...filter, method: e.target.value })}
//         >
//           <option value="">Filter by Method</option>
//           {communicationMethods.map((method) => (
//             <option key={method} value={method}>
//               {method}
//             </option>
//           ))}
//         </select>
//         <input
//           type="date"
//           value={filter.dateRange.start}
//           onChange={(e) => setFilter({ ...filter, dateRange: { ...filter.dateRange, start: e.target.value } })}
//         />
//         <input
//           type="date"
//           value={filter.dateRange.end}
//           onChange={(e) => setFilter({ ...filter, dateRange: { ...filter.dateRange, end: e.target.value } })}
//         />
//       </div>

//       {/* Communication Frequency Report */}
//       <div className="chart">
//         <h3>Communication Frequency</h3>
//         <Bar
//           data={{
//             labels: communicationMethods,
//             datasets: [
//               {
//                 label: "Frequency",
//                 data: methodCounts,
//                 backgroundColor: ["#3498db", "#1abc9c", "#f1c40f", "#e74c3c", "#9b59b6"],
//               },
//             ],
//           }}
//           options={{ responsive: true }}
//         />
//       </div>

//       {/* Overdue Communication Trends */}
//       <div className="chart">
//         <h3>Overdue Communication Trends</h3>
//         <Line
//           data={{
//             labels: trendDates,
//             datasets: [
//               {
//                 label: "Overdue Communications",
//                 data: trendCounts,
//                 borderColor: "#e74c3c",
//                 fill: false,
//               },
//             ],
//           }}
//           options={{ responsive: true }}
//         />
//       </div>

//       {/* Engagement Effectiveness (Placeholder for Response Metrics) */}
//       <div className="chart">
//         <h3>Engagement Effectiveness</h3>
//         <Pie
//           data={{
//             labels: communicationMethods,
//             datasets: [
//               {
//                 label: "Effectiveness",
//                 data: methodCounts.map((count) => count * 0.6), // Example multiplier
//                 backgroundColor: ["#3498db", "#1abc9c", "#f1c40f", "#e74c3c", "#9b59b6"],
//               },
//             ],
//           }}
//           options={{ responsive: true }}
//         />
//       </div>

//       {/* Real-Time Activity Log */}
//       <div className="activity-log">
//         <h3>Real-Time Activity Log</h3>
//         <ul>
//           {filteredCommunications.map((comm, index) => (
//             <li key={index}>
//               <span className="log-date">{new Date(comm.date).toLocaleDateString()}</span> - 
//               <span className="log-type">{comm.type}</span> for 
//               <span className="log-company"> Company ID: {comm.companyId}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Downloadable Reports */}
//       <button className="download-btn">Download CSV</button>
//       <button className="download-btn">Download PDF</button>
//     </div>
//   );
// };

// export default AnalyticsModule;
import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { Bar, Pie, Line } from "react-chartjs-2";
import "chart.js/auto";
import "./AnalyticsModule.css";

const AnalyticsModule = () => {
  const { communications } = useAppContext();
  const [filter, setFilter] = useState({
    companyId: "",
    method: "",
    dateRange: { start: "", end: "" },
  });

  // Filter logic
  const filteredCommunications = communications.filter((comm) => {
    const withinDateRange =
      (!filter.dateRange.start || new Date(comm.date) >= new Date(filter.dateRange.start)) &&
      (!filter.dateRange.end || new Date(comm.date) <= new Date(filter.dateRange.end));
    const matchesCompany = !filter.companyId || comm.companyId === filter.companyId;
    const matchesMethod = !filter.method || comm.type === filter.method;

    return withinDateRange && matchesCompany && matchesMethod;
  });

  // Chart data
  const communicationMethods = ["LinkedIn Post", "LinkedIn Message", "Email", "Phone Call", "Other"];
  const methodCounts = communicationMethods.map(
    (method) => filteredCommunications.filter((comm) => comm.type === method).length
  );

  const overdueCommunications = communications.filter((c) => new Date(c.date) < new Date());
  const overdueTrendData = overdueCommunications.reduce((acc, comm) => {
    const date = new Date(comm.date).toDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const trendDates = Object.keys(overdueTrendData);
  const trendCounts = Object.values(overdueTrendData);

  // Download handlers
  const downloadCSV = () => {
    const csvContent = `data:text/csv;charset=utf-8,Date,Type,CompanyID,Notes\n${communications
      .map((c) => `${c.date},${c.type},${c.companyId},${c.notes}`)
      .join("\n")}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "communications_report.csv");
    link.click();
  };

  const downloadPDF = () => {
    const pdfContent = communications.map((c) => `Date: ${c.date}, Type: ${c.type}, Company ID: ${c.companyId}, Notes: ${c.notes}`).join("\n");
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "communications_report.pdf";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="analytics-module">
      <h2>Reporting and Analytics</h2>

      {/* Filters */}
      <div className="filters">
        <select value={filter.companyId} onChange={(e) => setFilter({ ...filter, companyId: e.target.value })}>
          <option value="">Filter by Company</option>
          <option value="1">Company 1</option>
          <option value="2">Company 2</option>
        </select>
        <select value={filter.method} onChange={(e) => setFilter({ ...filter, method: e.target.value })}>
          <option value="">Filter by Method</option>
          {communicationMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={filter.dateRange.start}
          onChange={(e) => setFilter({ ...filter, dateRange: { ...filter.dateRange, start: e.target.value } })}
        />
        <input
          type="date"
          value={filter.dateRange.end}
          onChange={(e) => setFilter({ ...filter, dateRange: { ...filter.dateRange, end: e.target.value } })}
        />
      </div>

      {/* Charts */}
      <div className="chart-container">
        <div className="chart">
          <h3>Communication Frequency</h3>
          <Bar
            data={{
              labels: communicationMethods,
              datasets: [
                {
                  label: "Frequency",
                  data: methodCounts,
                  backgroundColor: ["#3498db", "#1abc9c", "#f1c40f", "#e74c3c", "#9b59b6"],
                },
              ],
            }}
            options={{ responsive: true, maintainAspectRatio:true }}
          />
        </div>
        <div className="chart">
          <h3>Overdue Communication Trends</h3>
          <Line
  data={{
    labels: trendDates,
    datasets: [
      {
        label: "Overdue Communications",
        data: trendCounts,
        borderColor: "#e74c3c",
        fill: false,
      },
    ],
  }}
  options={{
    responsive: true,
    maintainAspectRatio: true, // Set to false if you want full flexibility
    plugins: {
      legend: {
        position: "top", // Adjust legend position
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Dates",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
      },
    },
  }}
/>
</div>
        <div className="chart">
  <h3>Engagement Effectiveness</h3>
  <Pie
    data={{
      labels: communicationMethods,
      datasets: [
        {
          label: "Effectiveness",
          data: methodCounts.map((count) => count * 0.6),
          backgroundColor: ["#3498db", "#1abc9c", "#f1c40f", "#e74c3c", "#9b59b6"],
        },
      ],
    }}
    options={{
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    }}
  />
</div>

      </div>

      {/* Activity Log */}
      <div className="activity-log">
        <h3>Real-Time Activity Log</h3>
        <ul>
          {filteredCommunications.map((comm, index) => (
            <li key={index}>
              <span>{new Date(comm.date).toLocaleDateString()}</span> - <span>{comm.type}</span> for Company ID: {comm.companyId}
            </li>
          ))}
        </ul>
      </div>

      {/* Download Buttons */}
      <div style={{ textAlign: "center" }}>
        <button className="download-btn" onClick={downloadCSV}>
          Download CSV
        </button>
        <button className="download-btn" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default AnalyticsModule;


