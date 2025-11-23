import React from "react";
import PDFLayout from "../template/PDFLayout";
import IndexTemplate from "../template/IndexTemplate";
import CoverTemplate from "../template/CoverTemplate";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PDFPreview() {
  const data = JSON.parse(localStorage.getItem("previewData"));

  if (!data) {
    return <h2 style={{ textAlign: "center" }}>No Preview Data Found</h2>;
  }

  const generatePDF = async () => {
    const pages = document.querySelectorAll("#pdf-content > .pdf-page");

    const pdf = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
      compress: true
    });

    const pdfWidth = 210;
    const pdfHeight = 297;

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const rect = page.getBoundingClientRect();

      const canvas = await html2canvas(page, {
        scale: 3, // HD quality
        useCORS: true,
        backgroundColor: "#ffffff",
        width: rect.width,
        height: rect.height,
        scrollX: 0,
        scrollY: 0
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.75);

      if (i !== 0) pdf.addPage();

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight, "", "FAST");
    }

    pdf.save(`${data.studentName || "student"}_lab_manual.pdf`);
  };

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        id="pdf-content"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >

        <div className="pdf-page">
          <PDFLayout data={data} />
        </div>

        <div className="pdf-page">
          <IndexTemplate data={data} />
        </div>

        <div className="pdf-page">
          <CoverTemplate data={data} />
        </div>

      </div>

      <div className="text-center mt-6">
        <button
          onClick={generatePDF}
          style={{
            padding: "14px 28px",
            background: "#16a34a",
            color: "#fff",
            borderRadius: "12px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer"
          }}
        >
          📄 Download PDF
        </button>
      </div>
    </div>
  );
}
