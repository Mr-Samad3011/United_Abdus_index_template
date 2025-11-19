import React from "react";
import "../template/labTemplate.css";

export default function PDFLayout({ data }) {
  const collegeLogo = "/logounited1.png";

  const universityLogos = {
    "Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj": "/rajju_bhayya.png",
    "Dr. A.P.J. Abdul Kalam Technical University (APJAKTU) LUCKNOW": "/uptu_logo.png",
    "Board of Technical Education Uttar Pradesh Lucknow": "/bte_board.jpeg"
  };

  const affiliatedLogo = universityLogos[data.affiliatedBy] || "";

  // Exam Checkbox ON/OFF
  const showExam = data.internalExam || data.externalExam;

  return (
    <div id="pdf-content" className="pdf-page">
      <div className="double-border">

        {/* ================= COLLEGE LOGO ================= */}
        <div className="logo-container">
          <img src={collegeLogo} alt="College Logo" className="college-logo" />
        </div>

        {/* ================= BASIC DETAILS ================= */}
        <h2 className="line college-full">{data.selectedCollege}</h2>
        <h3 className="line">{data.courseName}</h3>
        <h3 className="line">{data.subjectName}</h3>
        <h3 className="line">{data.subjectCode}</h3>

        <h1 className="main-title">{data.workType.toUpperCase()}</h1>

        <h3 className="line">Session {data.session}</h3>

        {/* ================= STUDENT DETAILS ================= */}
        <h2 className="sub-heading">By</h2>
        <p className="line">Name: {data.studentName}</p>
        <p className="line">Roll No: {data.rollNo}</p>
        <p className="line">Student ID: {data.studentId}</p>

        {/* ================= GUIDE ================= */}
        <h2 className="sub-heading">Under the guidance of</h2>
        <p className="line">{data.teacherName}</p>

        {/* ================= FINAL BLOCK (Exam + Logo + Affiliated To) ================= */}
        <div className={showExam ? "affiliated-row" : "affiliated-center"}>

          {/* ---------- LEFT SIDE: Only when exam checkbox selected ---------- */}
          {showExam && (
            <div className="examinerandlogo">

              {/* Exam names (Internal/External) */}
              <div className="examalign">
                {data.internalExam && (
                  <p className="exam-type-box">
                    Internal Examination: ..................
                  </p>
                )}

                {data.externalExam && (
                  <p className="exam-type-box">
                    External Examination: ..................
                  </p>
                )}
              </div>

              {/* Small Affiliated Logo (Left Side) */}
              {affiliatedLogo && (
                <img
                  src={affiliatedLogo}
                  alt="University Logo"
                  className="affiliated-logo-left"
                />
              )}
            </div>
          )}

          {/* ---------- CENTER BIG LOGO: Only when NO exam selected ---------- */}
          {!showExam && affiliatedLogo && (
            <img
              src={affiliatedLogo}
              alt="University Logo"
              className="affiliated-logo-center"
            />
          )}

          {/* ---------- RIGHT SIDE: Affiliated Text ---------- */}
          <div className="affiliated-text-container">
            <h2 className="sub-heading">AFFILIATED TO</h2>
            <p className="line affiliated-full">{data.affiliatedBy}</p>
          </div>

        </div>

      </div>
    </div>
  );
}
