import React from "react";
import "../template/labTemplate.css";
import AutoFitText from "./AutoFitText";

export default function IndexTemplate({ data }) {
  return (
    <div className="pdf-page">
      <div className="double-border index-wrapper">

        {/* ================= TOP LINE ================= */}
        <div className="index-header">
          <h2 className="index-top-line">
           <AutoFitText text={data.selectedCollege} maxSize={28} />
          </h2>

          <h2 className="index-top-line collage-name">
      <AutoFitText
  text={
    data?.subjectCode
      ? `${data.subjectName} (${data.subjectCode})`
      : data?.subjectName
  }
  maxSize={25}
  minSize={12}
/>

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
