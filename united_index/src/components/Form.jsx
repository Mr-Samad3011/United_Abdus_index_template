import React, { useState, useEffect } from "react";
import "./Form.css";

export default function FormUI() {
  const [form, setForm,] = useState({
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
    semester: "",
    internalExam: false,
    externalExam: false,
    
  
  teacherPosition: "",
  teacherPositionCustom: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("studentForm");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("studentForm", JSON.stringify(form));
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.studentName.trim()) newErrors.studentName = "Name is required";
    if (!form.studentId.trim()) newErrors.studentId = "Student ID is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ PREVIEW BUTTON WORKING
  const openPreviewInNewTab = () => {
    if (!validateForm()) {
      alert("❌ Please fill required fields");
      return;
    }

    // Save preview data
    localStorage.setItem("previewData", JSON.stringify(form));

    // Open preview page
    window.open("/preview", "_blank");
  };

  const resetForm = () => {
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
      semester: "",
      internalExam: false,
      externalExam: false,
    });
    setErrors({});
  };

  const isFormIncomplete = !form.studentName || !form.studentId;

  return (
    <div className="form-index mt-6 px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-700 mb-8 md:mb-12">
        📘 Student Information Form
      </h1>

      <div className="Form-Page bg-white shadow-xl rounded-3xl p-6 md:p-10 border border-gray-200">
        <form className="space-y-6 md:space-y-8">
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
            <label className="w-full md:w-1/3">Student Name</label>
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

{/* Semester */}
           <div className="Field flex flex-col md:flex-row md:gap-6">
  <label className="w-full md:w-1/3">Semester</label>
  <select
    name="semester"
    value={form.semester}
    onChange={handleChange}
    className="w-full md:w-2/3 border border-gray-300 rounded-md p-2"
  >
    <option value="">Select Semester</option>
    <option value="I">I</option>
    <option value="II">II</option>
    <option value="III">III</option>
    <option value="IV">IV</option>
    <option value="V">V</option>
    <option value="VI">VI</option>
    <option value="VII">VII</option>
    <option value="VIII">VIII</option>
  </select>
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

    {/* --- TEACHER POSITION / DESIGNATION --- */}
<div className="Field flex flex-col md:flex-row md:gap-6">
  <label className="w-full md:w-1/3">Teacher Position / Designation</label>

  <div className="w-full md:w-2/3">
    <select
      name="teacherPosition"
      value={form.teacherPosition}
      onChange={(e) =>
        setForm({ ...form, teacherPosition: e.target.value })
      }
      className="w-full border border-gray-300 rounded-md p-2"
    >
      <option value="">Select Position</option>
      <option value="Professor">Professor</option>
      <option value="Associate Professor">Associate Professor</option>
      <option value="Assistant Professor">Assistant Professor</option>
      <option value="Lecturer">Lecturer</option>
      <option value="HOD">HOD</option>
      <option value="Director">Director</option>
      <option value="Other">Other (Write manually)</option>
    </select>

    {/* Custom Input When 'Other' is selected */}
    {form.teacherPosition === "Other" && (
      <input
        type="text"
        name="teacherPositionCustom"
        value={form.teacherPositionCustom}
        onChange={(e) =>
          setForm({ ...form, teacherPositionCustom: e.target.value })
        }
        placeholder="Enter custom designation"
        className="w-full border border-gray-300 rounded-md p-2 mt-2"
      />
    )}
  </div>
</div>


          <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">

            <button
              type="button"
              disabled={isFormIncomplete}
              onClick={openPreviewInNewTab}
              className={`px-10 py-4 text-white font-bold rounded-2xl shadow-lg ${
                isFormIncomplete
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              👁️ Generate & Preview PDF →
            </button>

            <button
              onClick={resetForm}
              type="button"
              className="px-10 py-4 bg-red-600 text-white font-bold rounded-2xl shadow-lg hover:bg-red-700"
            >
              Reset
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}
