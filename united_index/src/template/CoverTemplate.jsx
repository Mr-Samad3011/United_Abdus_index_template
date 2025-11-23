import React from "react";
import "./CoverTemplate.css";

// ✅ Function to convert full course name to short form
const getCourseShort = (course = "") => {
  const map = {
    "Bachelor of Computer Application": "BCA",
    "Master of Computer Application": "MCA",
    "Bachelor of Business Administration": "BBA",
    "Master of Business Administration": "MBA",
    "Bachelor of Technology": "B.Tech",
    "Bachelor of Pharmacy": "B.Pharm",
    "Diploma of Pharmacy": "D.Pharm"
  };
  return map[course] || course;
};

export default function CoverTemplate({ data = {} }) {
  return (
    <div className="pdf-page">
      <div className="double-border cover-wrapper">

        <table className="cover-table">
          <tbody>

            {/* COLLEGE NAME */}
            <tr >
              <th colSpan="4" className="cover-title">
                {data.selectedCollege || "UNITED INSTITUTE OF MANAGEMENT"}
              </th>
            </tr>

            {/* WORK TYPE FROM FORM */}
            <tr>
              <th colSpan="4" className="cover-subtitle">
                {data.workType || "LAB MANUAL"}
              </th>
            </tr>

            <tr >
              <td rowSpan="4" className="cover-logo-box">
                <img src="/logounited1.png" alt="Logo" className="cover-logo" />
              </td>

              <td className="cover-cell" colSpan={2} >
                Subject Name : {data.subjectName || "__________"}
              </td>

              <td className="cover-cell">
                Experiment No : 1
              </td>
            </tr>

            <tr>
              <td className="cover-cell">
                <p>Course Code : {data.subjectCode || "__________"}</p>
                <p>Faculty : {data.teacherName || "__________"}</p>
              </td>

              <td className="cover-cell">
                <p>Semester : {data.semester || "__________"}</p>
              </td>

              <td className="cover-cell">
                <p>
                  Branch : {getCourseShort(data.courseName) || "__________"}
                </p>
              </td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
}
