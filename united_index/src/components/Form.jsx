import React, { useState, useEffect } from "react";
import "./Form.css";
import PDFLayout from "../template/PDFLayout";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function FormUI() {
  const [form, setForm] = useState({
    studentName: "",
    courseName: "",
    subjectName: "",
    subjectCode: "",
    workType: "Assignment",
    session: "",
    teacherName: "",
    selectedCollege: "",
    affiliatedBy: "",
    rollNo: "",
    studentId: "",
    internalExam: false,
  externalExam: false,
  });

  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});
  const [showPDF, setShowPDF] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("studentForm");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("studentForm", JSON.stringify(form));
  }, [form]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function validateForm() {
    const newErrors = {};
    if (!form.studentName.trim()) newErrors.studentName = "Name is required";
    if (!form.studentId.trim()) newErrors.studentId = "Student ID is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) setShowPDF(true);
    else alert("❌ Please fill required fields");
  }

  const generatePDF = async () => {
    const element = document.getElementById("pdf-content");
    if (!element) return alert("PDF layout not found!");

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const margin = 5;
    const imgWidth = pdfWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const positionY = imgHeight < pdfHeight ? (pdfHeight - imgHeight) / 2 : 0;

    pdf.addImage(imgData, "PNG", margin, positionY, imgWidth, imgHeight);
    pdf.save(`${form.studentName || "student"}_lab_manual.pdf`);
  };

  function resetForm() {
    localStorage.removeItem("studentForm");
    setForm({
      studentName: "",
      courseName: "",
      subjectName: "",
      subjectCode: "",
      workType: "Assignment",
      session: "",
      teacherName: "",
      selectedCollege: "",
      affiliatedBy: "",
      rollNo: "",
      studentId: "",
    });
    setShowPDF(false);
  }

  const isFormIncomplete = !form.studentName || !form.studentId;

  return (
    <div className="form-index mt-6 px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-700 mb-8 md:mb-12">
    📘 Student Information Form
  </h1>

      <div className="Form-Page bg-white shadow-xl rounded-3xl p-6 md:p-10 border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          {/* --- INSTITUTE DETAILS --- */}
          <h3 className="section-title text-lg md:text-2xl font-semibold">🏫 Institute Details</h3>
          <div className="Field flex flex-col md:flex-row md:gap-6">
            <label className="w-full md:w-1/3">Select College</label>
            <select
              name="selectedCollege"
              value={form.selectedCollege}
              onChange={handleChange}
              className="w-full md:w-2/3 border border-gray-300 rounded-md p-2"
            >
              <option value="">Select College</option>
              <option value="United Institute of Management (FUGS)">United Institute of Management (FUGS)</option>
              <option value="United Institute of Management">United Institute of Management</option>
              <option value="United Institute of Pharmacy">United Institute of Pharmacy</option>
              <option value="United College of Engineering & Research">United College of Engineering & Research</option>
              <option value="United Institute of Technology">United Institute of Technology</option>

            </select>
          </div>

          <div className="Field flex flex-col md:flex-row md:gap-6">
            <label className="w-full md:w-1/3">Affiliated By</label>
            <select
              name="affiliatedBy"
              value={form.affiliatedBy}
              onChange={handleChange}
              className="w-full md:w-2/3 border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Affiliation</option>
              <option value="Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj">Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj</option>
              <option value="Dr. A.P.J. Abdul Kalam Technical University (APJAKTU) LUCKNOW">
                Dr. A.P.J. Abdul Kalam Technical University (APJAKTU) LUCKNOW
              </option>
              <option value="Board of Technical Education Uttar Pradesh Lucknow">Board of Technical Education Uttar Pradesh Lucknow</option>
            </select>
          </div>

          {/* --- STUDENT DETAILS --- */}
          <h3 className="section-title text-lg md:text-2xl font-semibold mt-4 md:mt-8">👨‍🎓 Student Information</h3>
          <div className="Field flex flex-col md:flex-row md:gap-6">
            <label className="w-full md:w-1/3">Name</label>
            <input
              type="text"
              name="studentName"
              value={form.studentName}
              onChange={(e) => setForm({ ...form, studentName: e.target.value.replace(/[^a-zA-Z\s]/g, "") })}
              placeholder="Enter student name"
              className="w-full md:w-2/3 border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="Field flex flex-col md:flex-row md:gap-6">
            <label className="w-full md:w-1/3">Roll No</label>
            <input
              type="text"
              name="rollNo"
              value={form.rollNo}
              onChange={(e) => setForm({ ...form, rollNo: e.target.value.replace(/[^0-9]/g, "") })}
              placeholder="Enter roll no"
              className="w-full md:w-2/3 border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="Field flex flex-col md:flex-row md:gap-6">
            <label className="w-full md:w-1/3">Student ID</label>
            <input
              type="text"
              name="studentId"
              value={form.studentId}
              onChange={(e) => setForm({ ...form, studentId: e.target.value.replace(/[^0-9]/g, "") })}
              placeholder="Enter student ID"
              className="w-full md:w-2/3 border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* --- COURSE & SUBJECT --- */}
          <h3 className="section-title text-lg md:text-2xl font-semibold mt-4 md:mt-8">📚 Course & Subject</h3>
          <div className="Field flex flex-col md:flex-row md:gap-6">
            <label className="w-full md:w-1/3">Course Name</label>
            <select
              name="courseName"
              value={form.courseName}
              onChange={handleChange}
              className="w-full md:w-2/3 border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Course</option>
              <option value="Master of Computer Application">Master of Computer Application</option>
              <option value="Bachelor of Computer Application">Bachelor of Computer Application</option>
              <option value="Bachelor of Business Administration">Bachelor of Business Administration</option>
              <option value="Master of Business Administration">Master of Business Administration</option>
              <option value="Bachelor of Technology">Bachelor of Technology</option>
              <option value="Bachelor of Pharmacy">Bachelor of Pharmacy</option>
              <option value="Diploma of Pharmacy">Diploma of Pharmacy</option>
            </select>
          </div>

          <div className="Field flex flex-col md:flex-row md:gap-6">
            <label className="w-full md:w-1/3">Session</label>
            <select
              name="session"
              value={form.session}
              onChange={handleChange}
              className="w-full md:w-2/3 border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Session</option>
              {Array.from({ length: 25 }, (_, i) => {
                const start = 2025 + i;
                return (
                  <option key={i} value={`${start}-${start + 1}`}>
                    {start}-{start + 1}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="Field flex flex-col md:flex-row md:gap-6">
            <label className="w-full md:w-1/3">Subject Name</label>
            <input
              name="subjectName"
              value={form.subjectName}
              onChange={handleChange}
              className="w-full md:w-2/3 border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="Field flex flex-col md:flex-row md:gap-6">
            <label className="w-full md:w-1/3">Subject Code</label>
            <input
              name="subjectCode"
              value={form.subjectCode}
              onChange={handleChange}
              className="w-full md:w-2/3 border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* --- WORK TYPE & TEACHER --- */}
          <h3 className="section-title text-lg md:text-2xl font-semibold mt-4 md:mt-8">📝 Work Type & Teacher</h3>
          <div className="Field flex flex-col md:flex-row md:gap-6 items-start md:items-center">
            <label className="w-full md:w-1/3">Work Type</label>
            <div className="radio-group flex gap-4 w-full md:w-2/3">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="workType"
                  value="Assignment"
                  checked={form.workType === "Assignment"}
                  onChange={handleChange}
                />
                Assignment
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="workType"
                  value="Lab File"
                  checked={form.workType === "Lab File"}
                  onChange={handleChange}
                />
                Lab File
              </label>
            </div>
          </div>

          {/* --- EXAMINATION CHECKBOX --- */}
<h3 className="section-title text-lg md:text-2xl font-semibold mt-4">
  📝 Checked Examiner
</h3>

<div className="Field flex flex-col md:flex-row md:gap-6 items-start">
  <label className="w-full md:w-1/3">Select Examination</label>

  <div className="flex flex-col gap-3 w-full md:w-2/3">

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={form.internalExam || false}
        onChange={() =>
          setForm({ ...form, internalExam: !form.internalExam })
        }
      />
      Internal Examination
    </label>

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={form.externalExam || false}
        onChange={() =>
          setForm({ ...form, externalExam: !form.externalExam })
        }
      />
      External Examination
    </label>

  </div>
</div>


          <div className="Field flex flex-col md:flex-row md:gap-6">
            <label className="w-full md:w-1/3">Teacher Name</label>
            <input
              name="teacherName"
              value={form.teacherName}
              onChange={handleChange}
              className="w-full md:w-2/3 border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* --- BUTTONS --- */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center mt-6 buttons">
            <button
              disabled={isFormIncomplete}
              type="submit"
              className={`px-10 py-4 md:px-16 md:py-6 text-white font-bold rounded-2xl shadow-lg 
                ${
                  isFormIncomplete
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 active:scale-95"
                } min-w-[150px] md:min-w-[180px] transition-all duration-200`}
            >
              Generate PDF →
            </button>

            <button
              onClick={resetForm}
              type="button"
              className="px-10 py-4 md:px-16 md:py-6 bg-red-600 text-white font-bold rounded-2xl shadow-lg hover:bg-red-700 active:scale-95 min-w-[150px] md:min-w-[180px] transition-all duration-200"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* ================= PDF PREVIEW ================= */}
      {showPDF && (
        <div className="mt-6">
          <PDFLayout data={form} />
          <div className="text-center mt-6 download">
            <button
              onClick={generatePDF}
              className="px-6 py-3 md:px-8 md:py-4 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition-all duration-200"
            >
              📄 Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

