import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationalId: "",
    university: "",
    workshops: [],
    faculty: "",
    department:"",
    facultyID: "",
    technicalBackground: "",
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleCvChange = (e) => {
    const file = e.target.files?.[0] || null;

    setFormData((prev) => ({
      ...prev,
      cv: file,
    }));

    // Clear or set error based on file validity
    if (!file) {
      setErrors((prev) => ({
        ...prev,
        cv: "",
      }));
      return;
    }

    if (file.type !== "application/pdf") {
      setErrors((prev) => ({
        ...prev,
        cv: "CV must be a PDF file",
      }));
    } else if (errors.cv) {
      setErrors((prev) => ({
        ...prev,
        cv: "",
      }));
    }
  };

  const toggleWorkshop = (workshopName) => {
    setFormData((prev) => {
      const alreadySelected = prev.workshops.includes(workshopName);
      const updatedWorkshops = alreadySelected
        ? prev.workshops.filter((w) => w !== workshopName)
        : [...prev.workshops, workshopName];

      return {
        ...prev,
        workshops: updatedWorkshops,
      };
    });

    if (errors.workshops) {
      setErrors((prev) => ({
        ...prev,
        workshops: "",
      }));
    }
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      nationalId: "",
      university: "",
      workshops: [],
      faculty: "",
      department:"",
      facultyID: "",
      technicalBackground: "",
      cv: null,
    });
    setErrors({});
    setSubmitStatus(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.nationalId.trim()) {
      newErrors.nationalId = "National ID is required";
    }

    if (!formData.university.trim()) {
      newErrors.university = "University is required";
    }

    if (!formData.workshops || formData.workshops.length === 0) {
      newErrors.workshops = "Please select at least one workshop";
    }

    if (!formData.faculty.trim()) {
      newErrors.faculty = "faculty is required";
    }
     if (!formData.department.trim()) {
      newErrors.department = "department is required";
    }
    if (!formData.facultyID.trim()) {
      newErrors.facultyID = "faculty ID is required";
    }
    if (!formData.cv) {
      newErrors.cv = "CV is required";
    }

    if (formData.cv && formData.cv.type !== "application/pdf") {
      newErrors.cv = "CV must be a PDF file";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData2 = new FormData();

      formData2.append("name", formData.fullName);
      formData2.append("email", formData.email);
      formData2.append("phone", formData.phone);
      formData2.append("ID", formData.nationalId);
      formData2.append("university", formData.university);
      formData2.append('department',formData.department);
      formData2.append("faculty", formData.faculty);
      formData2.append("facultyID", formData.nationalId);
      formData2.append(
        "technicalBackground",
        formData.technicalBackground || " ",
      );
      formData2.append("workshop", formData.workshops.join(","));

      formData2.append("file", formData.cv ? formData.cv.name : "");

      try {
        const response = await fetch(
          "https://registration-form-backend-peach.vercel.app/registration/register",
          {
            method: "POST",
            redirect: "follow",
            body: formData2,
          },
        );

        const data = await response.json();
        console.log("Success:", data);

        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          nationalId: "",
          university: "",
          workshops: [],
          faculty: "",
          facultyID: "",
          technicalBackground: "",
          cv: null,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#00396B] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-[#00396B]">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#FFC425] mb-2">
            IEEE Workshop Registration
          </h1>
        </div>

        {/* Form Card */}
        <div className="bg-[#00396B] p-6 sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-[#D9D9D9] mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#D9D9D9] border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#D9D9D9] mb-2"
              >
                Phone Number (Whatsapp) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#D9D9D9] border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="01*********"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#D9D9D9] mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#D9D9D9] border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="email@gmail.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* National ID */}
            <div>
              <label
                htmlFor="nationalId"
                className="block text-sm font-medium text-[#D9D9D9] mb-2"
              >
                National ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nationalId"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#D9D9D9] border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.nationalId ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="National ID"
              />
              {errors.nationalId && (
                <p className="mt-1 text-sm text-red-500">{errors.nationalId}</p>
              )}
            </div>

            {/* University */}
            <div>
              <label
                htmlFor="university"
                className="block text-sm font-medium text-[#D9D9D9] mb-2"
              >
                University <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#D9D9D9] border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.university ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="University"
              />
              {errors.university && (
                <p className="mt-1 text-sm text-red-500">{errors.university}</p>
              )}
            </div>

            {/* Faculty */}
            <div>
              <label
                htmlFor="faculty"
                className="block text-sm font-medium text-[#D9D9D9] mb-2"
              >
                Faculty <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="faculty"
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#D9D9D9] border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.faculty ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g., Computer Science, Electrical Engineering"
              />
              {errors.faculty && (
                <p className="mt-1 text-sm text-red-500">{errors.faculty}</p>
              )}
            </div>
            {/* Department */}
              <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-[#D9D9D9] mb-2"
              >
                Department <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#D9D9D9] border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.faculty ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g., Computer and Systems Department"
              />
              {errors.department && (
                <p className="mt-1 text-sm text-red-500">{errors.department}</p>
              )}
            </div>
            {/* FacultyID */}
            <div>
              <label
                htmlFor="facultyID"
                className="block text-sm font-medium text-[#D9D9D9] mb-2"
              >
                Faculty ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="facultyID"
                name="facultyID"
                value={formData.facultyID}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#D9D9D9] border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.facultyID ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your Faculty ID"
              />
              {errors.facultyID && (
                <p className="mt-1 text-sm text-red-500">{errors.facultyID}</p>
              )}
            </div>

            {/* Workshop - checkboxes */}
            <div>
              <label className="block text-2xl font-medium text-[#D9D9D9] mb-2">
                Which workshop are you interested in{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#00396B]">
                {[
                  "computer arithmetic",
                  "system verilog verification",
                  "digital design",
                  "uvm",
                  "oop",
                  "analog ic fundamentals",
                  "automation & control",
                  "analog/mixed-signals",
                  "knx",
                ].map((workshopName) => (
                  <label
                    key={workshopName}
                    className="inline-flex items-center space-x-2 text-[#D9D9D9]"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked={formData.workshops.includes(workshopName)}
                      onChange={() => toggleWorkshop(workshopName)}
                    />
                    <span className="text-sm">{workshopName}</span>
                  </label>
                ))}
              </div>
              {errors.workshops && (
                <p className="mt-1 text-sm text-red-500">{errors.workshops}</p>
              )}
            </div>

            {/* CV (PDF only) */}
            <div>
              <label
                htmlFor="cv"
                className="block text-sm font-medium text-[#D9D9D9] mb-2"
              >
                CV <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept="application/pdf"
                onChange={handleCvChange}
                className="w-full text-sm text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#D9D9D9] file:text-black"
              />
              {errors.cv && (
                <p className="mt-1 text-sm text-red-500">{errors.cv}</p>
              )}
            </div>

            {/* Technical Background */}
            <div>
              <label
                htmlFor="technicalBackground"
                className="block text-sm font-medium text-[#D9D9D9] mb-2"
              >
                Technical Background
              </label>
              <textarea
                id="technicalBackground"
                name="technicalBackground"
                value={formData.technicalBackground}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-[#D9D9D9] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Briefly describe your technical background..."
              />
            </div>

            {/* Submit Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                <p className="font-medium">
                  ✓ Registration submitted successfully!
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                <p className="font-medium">
                  ✗ Error submitting form. Please try again.
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleClearForm}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 transition-colors"
              >
                Clear Form
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto flex-1 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Registration"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;