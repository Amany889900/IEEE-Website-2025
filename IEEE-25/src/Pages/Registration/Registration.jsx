import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
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
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const committees = ['Media and Marketing', 'IT', 'PR', 'Logistics', 'HR', 'FR'];
  const levels = ['Freshmen', 'Sophomore', 'Junior 1 or 2', 'Senior'];
  const hourOptions = ['Less than 4', '4-6', '6-10', 'More than 10'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      // Mutual exclusion: if same as first, clear second
      if (name === "firstPreference" && value === prev.secondPreference) {
        newData.secondPreference = "";
      }
      return newData;
    });
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCvChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, cv: file }));
    if (file && file.type !== "application/pdf") {
      setErrors((prev) => ({ ...prev, cv: "CV must be a PDF file" }));
    } else {
      setErrors((prev) => ({ ...prev, cv: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    // Updated required fields list based on new state names
    const requiredFields = [
      "name", "email", "whatsappNumber", "nationalId", "university", 
      "faculty", "department", "facultyId", "level", 
      "firstPreference", "interestReason", "hoursPerWeek", "willingToPayMembership"
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) newErrors[field] = "Required";
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.cv) newErrors.cv = "CV required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const data = new FormData();
      // Dynamically append all text fields and the file
      Object.keys(formData).forEach(key => {
        if (key === 'cv') {
          data.append("cv", formData.cv);
        } else {
          data.append(key, formData[key]);
        }
      });
     
      // --- CONSOLE LOG SECTION ---
      console.log("--- Form Data Preview ---");
      data.forEach((value, key) => {
        if (key === 'cv') {
          console.log(`${key}:`, value.name, `(${value.type})`);
        } else {
          console.log(`${key}:`, value);
        }
      });
      console.log("-------------------------");
      // ---------------------------

      const response = await fetch(
        "https://ieee-recruitment-backend-spring26.vercel.app/registration/register",
        { method: "POST", body:data }
      );

      if (response.ok) {
        setSubmitStatus("success");
        handleClearForm();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleClearForm = () => {
    setFormData({
      name: "", email: "", whatsappNumber: "", nationalId: "", university: "",
      faculty: "", department: "", facultyId: "", linkedInUrl: "", level: "",
      firstPreference: "", secondPreference: "", interestReason: "",
      hoursPerWeek: "", willingToPayMembership: "", cv: null,
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen  py-12 px-4 selection:bg-cyan-500/30">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-3">
            Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">Registration</span>
          </h1>
          <p className="text-gray-400 uppercase text-sm tracking-[0.4em]">Ignite your potential</p>
        </div>

        <div className="bg-[#0a1d37]/60 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Input Grid using new IDs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { id: "name", label: "Full Name", placeholder: "John Doe" },
                { id: "whatsappNumber", label: "WhatsApp Number", placeholder: "01xxxxxxxxx" },
                { id: "email", label: "Email", placeholder: "example@ieee.org" },
                { id: "linkedInUrl", label: "LinkedIn URL", placeholder: "linkedin.com/in/...", required: false },
                { id: "nationalId", label: "National ID", placeholder: "14-digit ID" },
                { id: "facultyId", label: "Faculty ID", placeholder: "ID Number" },
                { id: "university", label: "University", placeholder: "ASU" },
                { id: "faculty", label: "Faculty", placeholder: "Engineering" },
                { id: "department", label: "Department", placeholder: "e.g., Computer Systems" },
              ].map((field) => (
                <div key={field.id} className={field.id === "name" || field.id === "email" ? "md:col-span-2" : ""}>
                  <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-3 ml-1">
                    {field.label} {field.required !== false && <span className="text-pink-500 text-lg">*</span>}
                  </label>
                  <input
                    type="text"
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-[#051124] border rounded-xl text-lg text-white focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-400 transition-all outline-none ${
                      errors[field.id] ? "border-pink-500/50" : "border-white/10"
                    }`}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>

            {/* Level Selection */}
            <div className="py-6 border-t border-white/5">
              <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-6">Level <span className="text-pink-500 text-lg">*</span></label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {levels.map((lvl) => (
                  <label key={lvl} className={`text-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.level === lvl ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]" : "border-white/10 text-gray-500 hover:border-white/30"
                  }`}>
                    <input type="radio" name="level" value={lvl} checked={formData.level === lvl} onChange={handleChange} className="hidden" />
                    <span className="text-sm font-black uppercase tracking-tight">{lvl}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Position Interest */}
            <div className="bg-[#051124] p-8 rounded-2xl border border-white/10 shadow-inner">
              <h3 className="text-lg font-bold text-white mb-6">Choose Which Position Interests you:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-5">First Preference <span className="text-pink-500 text-lg">*</span></label>
                  <div className="space-y-4">
                    {committees.map((c) => (
                      <label key={c} className="flex items-center space-x-4 text-base text-gray-300 cursor-pointer group">
                        <input type="radio" name="firstPreference" value={c} checked={formData.firstPreference === c} onChange={handleChange} className="w-5 h-5 accent-cyan-400" />
                        <span className="group-hover:text-white transition-colors">{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-5">Second Preference (Optional)</label>
                  <div className="space-y-4">
                    {committees.filter(c => c !== formData.firstPreference).map((c) => (
                      <label key={c} className="flex items-center space-x-4 text-base text-gray-500 cursor-pointer group">
                        <input type="radio" name="secondPreference" value={c} checked={formData.secondPreference === c} onChange={handleChange} className="w-5 h-5 accent-blue-500" />
                        <span className="group-hover:text-gray-300 transition-colors">{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* interestReason */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-3">Briefly explain why you are interested in this role? <span className="text-pink-500 text-lg">*</span></label>
              <textarea 
                name="interestReason" 
                value={formData.interestReason} 
                onChange={handleChange} 
                rows="4" 
                placeholder="Long answer text"
                className="w-full px-5 py-4 bg-[#051124] border border-white/10 rounded-xl text-lg text-white focus:border-cyan-400 transition-all outline-none resize-none shadow-inner" 
              />
            </div>

            {/* hoursPerWeek */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-5">How many hours per week can you provide? <span className="text-pink-500 text-lg">*</span></label>
              <div className="space-y-4">
                {hourOptions.map((h) => (
                  <label key={h} className="flex items-center space-x-4 text-base text-gray-300 cursor-pointer group">
                    <input type="radio" name="hoursPerWeek" value={h} checked={formData.hoursPerWeek === h} onChange={handleChange} className="w-5 h-5 accent-cyan-400" />
                    <span className="group-hover:text-white transition-colors">{h}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* willingToPayMembership */}
            <div className="p-6 bg-cyan-400/5 border border-cyan-400/20 rounded-2xl">
              <label className="block text-sm font-bold text-white mb-3">
                [If selected as Highboard]: Are you willing to claim an IEEE Membership Profile (cost 14$)? <span className="text-pink-500 text-lg">*</span>
              </label>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                High board members are the management of the student branch, such as: Chairman, Vice Chairman, Secretary, Treasurer, or Committee Heads
              </p>
              <div className="flex space-x-8">
                {["Yes", "No", "Maybe"].map((opt) => (
                  <label key={opt} className="flex items-center space-x-3 text-base text-gray-300 cursor-pointer group">
                    <input type="radio" name="willingToPayMembership" value={opt} checked={formData.willingToPayMembership === opt} onChange={handleChange} className="w-5 h-5 accent-cyan-400" />
                    <span className="group-hover:text-white transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* CV Upload */}
            <div className="group py-4">
              <label className="block text-xs uppercase tracking-widest font-bold text-cyan-400 mb-4">Upload CV (PDF) <span className="text-pink-500 text-lg">*</span></label>
              <div className="relative p-6 border-2 border-dashed border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all bg-[#051124]">
                <input 
                  type="file" 
                  accept="application/pdf" 
                  onChange={handleCvChange} 
                  className="w-full text-sm text-gray-400 file:mr-6 file:py-3 file:px-8 file:rounded-full file:border-0 file:text-xs file:font-black file:uppercase file:bg-cyan-500 file:text-black hover:file:bg-cyan-400 transition-all cursor-pointer" 
                />
              </div>
              {errors.cv && <p className="mt-3 text-xs text-pink-500 font-bold text-center uppercase tracking-widest">{errors.cv}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-8 text-center">
              {submitStatus === "success" && <p className="text-cyan-400 mb-4 font-bold">Registration successful! Redirecting...</p>}
              {submitStatus === "error" && <p className="text-pink-500 mb-4 font-bold">Submission failed. Please check your connection.</p>}
              
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xl uppercase tracking-[0.2em] py-5 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50`}
              >
                {isSubmitting ? "Processing..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;