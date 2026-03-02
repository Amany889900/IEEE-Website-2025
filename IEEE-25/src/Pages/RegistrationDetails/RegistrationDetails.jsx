import React from 'react';
import { Palette, Users, Globe, Settings, Code, ArrowRight } from 'lucide-react';

const teams = [
  {
    title: "Media & Marketing",
    icon: <Palette className="text-pink-500" size={32} />,
    color: "hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]",
    description: "Where imagination meets impact! From content writing and strategy to graphic design and video editing.",
    tags: ["Content", "Design", "Social Media", "Strategy"]
  },
  {
    title: "Human Resources (HR)",
    icon: <Users className="text-blue-500" size={32} />,
    color: "hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
    description: "Building positive environments through recruitment, onboarding, and team-building activities.",
    tags: ["Recruitment", "Engagement", "Training"]
  },
  {
    title: "Public Relations (PR)",
    icon: <Globe className="text-purple-500" size={32} />,
    color: "hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
    description: "The professional face of IEEE ASUSB. Managing external partners and official communications.",
    tags: ["Networking", "Outreach", "Communication"]
  },
  {
    title: "Logistics",
    icon: <Settings className="text-orange-500" size={32} />,
    color: "hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
    description: "The backbone of our events. Coordinating venues, materials, and seamless execution.",
    tags: ["Planning", "Coordination", "Execution"]
  },
  {
    title: "IT Technical Team",
    icon: <Code className="text-cyan-400" size={32} />,
    color: "hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
    description: "Developing digital platforms using HTML, CSS, and JS. Turning code into community impact.",
    tags: ["Web Dev", "Git", "Innovation"]
  }
];

function RegistrationDetails() {
  return (
    <div className="min-h-screen  text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">IEEE ASUSB</span> Teams
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Are you passionate about creativity, organization, people, or communication? 
            Help us shape our community and bring initiatives to life.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <div 
              key={index}
              className={`bg-[#0a1d37] border border-gray-800 p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-default ${team.color}`}
            >
              <div className="mb-4">{team.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{team.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {team.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {team.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest bg-gray-900 px-2 py-1 rounded border border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-cyan-400 font-semibold hover:gap-4 transition-all uppercase text-sm">
                Apply Now <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        {/* <div className="mt-20 text-center p-10 bg-gradient-to-b from-[#0a1d37] to-transparent rounded-3xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Not sure which one to pick?</h2>
          <p className="text-gray-400 mb-6">Every committee offers unique growth. Be part of the team that keeps IEEE ASUSB thriving!</p>
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors uppercase">
            General Application
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default RegistrationDetails;