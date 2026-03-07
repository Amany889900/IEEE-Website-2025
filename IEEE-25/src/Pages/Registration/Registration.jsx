import { useEffect, useState } from "react";

const Registration = () => {
  const initialFormState = {
    name: "",
    email: "",
    whatsappNumber: "",
    nationalId: "",
    university: "",
    faculty: "",
    department: "",
    facultyId: "",
    linkedInUrl: "",
    level: "",
    firstPreference: "",
    secondPreference: "",
    interestReason: "",
    hoursPerWeek: "",
    willingToPayMembership: "",
    cv: null,
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [registrationId, setRegistrationId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [backendError, setBackendError] = useState("");

  const committees = [
    "Media and Marketing",
    "IT",
    "PR",
    "Logistics",
    "HR",
    "FR",
  ];
  const levels = ["Freshmen", "Sophomore", "Junior", "Senior 1 or 2"];
  const hourOptions = ["Less than 4", "4-6", "6-10", "More than 10"];

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name cannot be empty";
        }
        break;

      case "whatsappNumber":
        if (!/^(01[0-9]{9}|\+20(10|11|12|15)[0-9]{8})$/.test(value)) {
          error =
            "Enter a valid Egyptian number (01xxxxxxxxx or +201xxxxxxxxx)";
        }
        break;

      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format";
        }
        break;

      case "linkedInUrl":
        if (value && !/^(https?:\/\/)?(www\.)?linkedin\.com\/.+/.test(value)) {
          error = "Must be a valid LinkedIn URL";
        }
        break;

      case "nationalId":
        if (!/^[0-9]{14}$/.test(value)) {
          error = "National ID must be exactly 14 digits";
        }
        break;

      case "facultyId":
        if (!value.trim()) {
          error = "Faculty ID is required";
        }
        break;
      case "interestReason":
        if (!value.trim()) {
          error = "Motivation cannot be empty";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "Motivation cannot contain only numbers";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const error = validateField(name, value);

    setFormData((prev) => {
      const newData = { ...prev, [name]: value };

      if (name === "firstPreference" && value === prev.secondPreference) {
        newData.secondPreference = "";
      }

      return newData;
    });

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleCvChange = (e) => {
    const file = e.target.files?.[0] || null;

    if (file && file.type !== "application/pdf") {
      setErrors((prev) => ({ ...prev, cv: "CV must be a PDF file" }));
      return;
    }

    setFormData((prev) => ({ ...prev, cv: file }));
    setErrors((prev) => ({ ...prev, cv: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    if (!formData.cv && !isEditMode) {
      newErrors.cv = "CV required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEditClick = async () => {
    if (!registrationId) return;

    try {
      setIsSubmitting(true);

      const response = await fetch(
        `https://ieee-recruitment-backend-spring26.vercel.app/registration/${registrationId}`,
      );

      if (response.ok) {
        const json = await response.json();
        const d = json.data;

        setFormData({
          name: d.name || "",
          email: d.email || "",
          whatsappNumber: d.whatsappNumber || "",
          nationalId: d.nationalId || "",
          university: d.university || "",
          faculty: d.faculty || "",
          department: d.department || "",
          facultyId: d.facultyId || "",
          linkedInUrl: d.linkedInUrl || "",
          level: d.level || "",
          firstPreference: d.firstPreference || "",
          secondPreference: d.secondPreference || "",
          interestReason: d.interestReason || "",
          hoursPerWeek: d.hoursPerWeek || "",
          willingToPayMembership: d.willingToPayMembership || "",
          cv: null,
        });

        setIsEditMode(true);
        setSubmitStatus(null);

        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmitAttempt = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (isEditMode) {
      setShowConfirmModal(true);
    } else {
      processSubmission();
    }
  };

  const processSubmission = async () => {
    setShowConfirmModal(false);
    setIsSubmitting(true);
    setBackendError("");

    try {
      const data = new FormData();

      Object.keys(initialFormState).forEach((key) => {
        if (key === "cv") {
          if (formData.cv) {
            data.append("cv", formData.cv);
          }
        } else if (formData[key] !== "" && formData[key] !== null) {
          data.append(key, formData[key]);
        }
      });

      for (let pair of data.entries()) {
        console.log(pair[0], pair[1]);
      }

      const url = isEditMode
        ? `https://ieee-recruitment-backend-spring26.vercel.app/registration/${registrationId}`
        : "https://ieee-recruitment-backend-spring26.vercel.app/registration/register";

      const method = isEditMode ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        body: data,
      });

      if (response.ok) {
        const result = await response.json();

        if (!isEditMode && result.data?._id) {
          setRegistrationId(result.data._id);
        }

        setSubmitStatus("success");

        if (isEditMode) {
          setIsEditMode(false);
        } else {
          handleClearForm();
        }
      } else {
        const errorData = await response.json();
        setBackendError(errorData.message || "Something went wrong");
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClearForm = () => {
    setFormData(initialFormState);
    setErrors({});
  };

  const hasErrors =
    Object.values(errors).some((err) => err) ||
    Object.entries(formData).some(([key, val]) => {
      const optionalFields = ["linkedInUrl", "secondPreference", "cv"];
      if (optionalFields.includes(key)) return false;
      return !val;
    });
  return (
    <div className="min-h-screen py-12 px-4 selection:bg-cyan-500/30 ">
      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0a1d37] border border-cyan-500/30 p-8 rounded-3xl max-w-md w-full shadow-[0_0_50px_rgba(34,211,238,0.2)] animate-in fade-in zoom-in duration-200">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
              Confirm Changes?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              You are about to update your registration. This will overwrite
              your previous details.
            </p>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={processSubmission}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase py-4 rounded-xl transition-all flex justify-center items-center"
              >
                Yes, Update My Response
              </button>
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="w-full bg-transparent border border-white/10 hover:bg-white/5 text-white font-bold py-4 rounded-xl transition-all"
              >
                Wait, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-3">
            Team{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {isEditMode ? "Edit Response" : "Registration"}
            </span>
          </h1>
          <p className="text-gray-400 uppercase text-sm tracking-[0.4em]">
            Ignite your potential
          </p>
        </div>

        <div className="bg-[#0a1d37]/60 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl">
          <form onSubmit={handleFormSubmitAttempt} className="space-y-10">
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { id: "name", label: "Full Name", placeholder: "John Doe" },
                {
                  id: "whatsappNumber",
                  label: "WhatsApp Number",
                  placeholder: "01xxxxxxxxx",
                },
                {
                  id: "email",
                  label: "Email",
                  placeholder: "example@ieee.org",
                },
                {
                  id: "linkedInUrl",
                  label: "LinkedIn URL",
                  placeholder: "linkedin.com/in/...",
                  required: false,
                },
                {
                  id: "nationalId",
                  label: "National ID",
                  placeholder: "14-digit ID",
                },
                {
                  id: "facultyId",
                  label: "Faculty ID",
                  placeholder: "ID Number",
                },
                { id: "university", label: "University", placeholder: "ASU" },
                { id: "faculty", label: "Faculty", placeholder: "Engineering" },
                {
                  id: "department",
                  label: "Department",
                  placeholder: "e.g., Computer Systems",
                },
              ].map((field) => (
                <div
                  key={field.id}
                  className={
                    field.id === "name" || field.id === "email"
                      ? "md:col-span-2"
                      : ""
                  }
                >
                  <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-3 ml-1">
                    {field.label}{" "}
                    {field.required !== false && (
                      <span className="text-pink-500 text-lg">*</span>
                    )}
                  </label>
                  <input
                    type="text"
                    name={field.id}
                    value={formData[field.id] || ""}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-[#051124] border rounded-xl text-lg text-white focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-400 transition-all outline-none ${
                      errors[field.id]
                        ? "border-pink-500/50"
                        : "border-white/10"
                    }`}
                    placeholder={field.placeholder}
                  />
                  {errors[field.id] && (
                    <p className="mt-2 text-xs text-pink-500 font-bold">
                      {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Level Selection */}
            <div className="py-6 border-t border-white/5">
              <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-6">
                Level <span className="text-pink-500 text-lg">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {levels.map((lvl) => (
                  <label
                    key={lvl}
                    className={`text-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.level === lvl
                        ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                        : "border-white/10 text-gray-500 hover:border-white/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="level"
                      value={lvl}
                      checked={formData.level === lvl}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="text-sm font-black uppercase tracking-tight">
                      {lvl}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Position Interest */}
            <div className="bg-[#051124] p-8 rounded-2xl border border-white/10 shadow-inner">
              <h3 className="text-lg font-bold text-white mb-6">
                Positions of Interest:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-5">
                    First Preference *
                  </label>
                  <div className="space-y-4">
                    {committees.map((c) => (
                      <label
                        key={c}
                        className="flex items-center space-x-4 text-gray-300 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="firstPreference"
                          value={c}
                          checked={formData.firstPreference === c}
                          onChange={handleChange}
                          className="w-5 h-5 accent-cyan-400"
                        />
                        <span className="group-hover:text-white transition-colors">
                          {c}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-5">
                    Second Preference
                  </label>
                  <div className="space-y-4">
                    {committees
                      .filter((c) => c !== formData.firstPreference)
                      .map((c) => (
                        <label
                          key={c}
                          className="flex items-center space-x-4 text-gray-500 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="secondPreference"
                            value={c}
                            checked={formData.secondPreference === c}
                            onChange={handleChange}
                            className="w-5 h-5 accent-blue-500"
                          />
                          <span className="group-hover:text-gray-300 transition-colors">
                            {c}
                          </span>
                        </label>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interest Reason */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-3 ml-1">
                Briefly explain why you are interested in this role?{" "}
                <span className="text-pink-500 text-lg">*</span>
              </label>
              <textarea
                name="interestReason"
                value={formData.interestReason}
                onChange={handleChange}
                rows="4"
                placeholder="Your motivation..."
                className="w-full px-5 py-4 bg-[#051124] border border-white/10 rounded-xl text-lg text-white focus:border-cyan-400 transition-all outline-none resize-none shadow-inner"
              />
            </div>

            {/* Hours Per Week */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-5 ml-1">
                How many hours per week can you provide?{" "}
                <span className="text-pink-500 text-lg">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hourOptions.map((h) => (
                  <label
                    key={h}
                    className="flex items-center space-x-4 text-gray-300 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="hoursPerWeek"
                      value={h}
                      checked={formData.hoursPerWeek === h}
                      onChange={handleChange}
                      className="w-5 h-5 accent-cyan-400"
                    />
                    <span className="group-hover:text-white transition-colors">
                      {h} hours
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Willing to pay membership */}
            <div className="p-6 bg-cyan-400/5 border border-cyan-400/20 rounded-2xl">
              <label className="block text-sm font-bold text-white mb-3">
                Are you willing to claim an IEEE Membership Profile (cost 14$)?{" "}
                <span className="text-pink-500 text-lg">*</span>
              </label>
              <div className="flex space-x-8">
                {["Yes", "No", "Maybe"].map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center space-x-3 text-base text-gray-300 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="willingToPayMembership"
                      value={opt}
                      checked={formData.willingToPayMembership === opt}
                      onChange={handleChange}
                      className="w-5 h-5 accent-cyan-400"
                    />
                    <span className="group-hover:text-white transition-colors">
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* CV Upload */}
            <div className="py-4">
              <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-4">
                {isEditMode ? "Update CV (Optional)" : "Upload CV (PDF) *"}
              </label>
              <div className="relative p-6 border-2 border-dashed border-white/10 rounded-2xl bg-[#051124]">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleCvChange}
                  className="w-full text-sm text-gray-400 file:mr-6 file:py-3 file:px-8 file:rounded-full file:border-0 file:text-xs file:font-black file:uppercase file:bg-cyan-500 file:text-black hover:file:bg-cyan-400 transition-all cursor-pointer"
                />
              </div>
              {errors.cv && (
                <p className="mt-3 text-xs text-pink-500 font-bold uppercase tracking-widest text-center">
                  {errors.cv}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="pt-8 text-center space-y-6">
              {submitStatus === "success" && (
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl animate-in slide-in-from-bottom duration-300">
                  <p className="text-cyan-400 font-bold mb-3">
                    Response recorded!
                  </p>
                  {!isEditMode && (
                    <button
                      type="button"
                      onClick={handleEditClick}
                      className="text-white bg-white/5 hover:bg-white/10 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/10 transition-all"
                    >
                      Edit Response
                    </button>
                  )}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-pink-500/10 border border-pink-500/30 rounded-xl">
                  <p className="text-pink-400 font-bold text-sm text-center">
                    {backendError}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || hasErrors}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xl uppercase tracking-[0.2em] py-5 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] disabled:opacity-50 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : isEditMode ? (
                  "Apply Changes"
                ) : (
                  "Submit Application"
                )}
              </button>

              {isEditMode && (
                <button
                  type="button"
                  onClick={() => {
                    setIsEditMode(false);
                    handleClearForm();
                  }}
                  className="text-gray-500 hover:text-white text-xs uppercase font-bold tracking-widest"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
