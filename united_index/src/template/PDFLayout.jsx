import React from "react";
import "../template/labTemplate.css";

export default function PDFLayout({ data }) {
  const collegeLogo = "/logounited1.png"; // Public folder
  const universityLogos = {
    "Rajju Bhaiya University, Prayagraj": "/rajju_bhayya.png",
    "Dr. A.P.J. Abdul Kalam Technical University (APJAKTU) LUCKNOW": "/uptu_logo.png",
    "Board of Technical Education Uttar Pradesh Lucknow":"/bte_board.jpeg"
  };

  const affiliatedLogo = universityLogos[data.affiliatedBy] || "";

  return (
    <div id="pdf-content" className="pdf-page">
      {/* ================= INNER DIV WITH DOUBLE BORDER ================= */}
      <div className="double-border">
        {/* ================= LOGO ================= */}
        <div className="logo-container">
          <img src={collegeLogo} alt="College Logo" className="college-logo" />
        </div>

        {/* ================= TOP DETAILS ================= */}
        <h2 className="line college-full">{data.selectedCollege}</h2>
        <h3 className="line">{data.courseName}</h3>
        <h3 className="line">{data.subjectName}</h3>
        <h3 className="line">{data.subjectCode}</h3>

        <h1 className="main-title">{data.workType.toUpperCase()}</h1>

        <h3 className="line">Session {data.session}</h3>

        {/* ================= STUDENT INFORMATION ================= */}
        <h2 className="sub-heading">By</h2>
        <p className="line">Name: {data.studentName}</p>
        <p className="line">Roll No: {data.rollNo}</p>
        <p className="line">Student ID: {data.studentId}</p>

        {/* ================= GUIDE NAME ================= */}
        <h2 className="sub-heading">Under the guidance of</h2>
        <p className="line">{data.teacherName}</p>

        {/* ================= AFFILIATION SECTION ================= */}
        
        {affiliatedLogo && (
          <div className="affiliated-logo-container">
            <img
              src={affiliatedLogo}
              alt="University Logo"
              className="affiliated-logo"
            />
          </div>
        )}
        <h2 className="sub-heading">AFFILIATED TO</h2>
        <p className="line affiliated-full">{data.affiliatedBy}</p>
      </div>
    </div>
  );
}
