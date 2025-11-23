import React from "react";
import "../template/labTemplate.css";

export default function IndexTemplate({ data }) {
  return (
    <div className="pdf-page">
      <div className="double-border index-wrapper">

        {/* ================= TOP LINE ================= */}
        <div className="index-header">
          <h2 className="index-top-line">
            {data?.selectedCollege}
          </h2>

          <h2 className="index-top-line collage-name">
            {data?.subjectName}
            {data?.subjectCode && ` (${data.subjectCode})`}
          </h2>

          <h1 className="index-heading">INDEX</h1>
        </div>

        {/* ================= TABLE ================= */}
        <table className="index-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Practical’s Name</th>
              <th>Date</th>
              <th>Signature</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 18 }, (_, i) => (
              <tr key={i}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
